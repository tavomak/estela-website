import { FC, ReactNode, useRef, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from 'motion/react';
import FadeIn from '@/components/Atoms/FadeIn';
import { caseStudies, type CaseStudy } from '@/utils/constants';

type Stat = { value: string; label: string };

const themes = {
  mint: {
    card: 'bg-ea-verde-200 text-ea-verde-oscuro-500 shadow-[8px_8px_0_#639D90]',
    title: 'text-ea-verde-900',
    muted: 'text-ea-verde-oscuro-400',
    stat: 'bg-ea-verde-oscuro-500 text-ea-amarillo',
    accent: 'border-ea-verde-900',
    link: 'bg-ea-verde-oscuro-500 text-ea-amarillo',
  },
  dark: {
    card: 'bg-ea-verde-oscuro-500 text-white shadow-[8px_8px_0_var(--color-ea-verde-900)]',
    title: 'text-ea-amarillo',
    muted: 'text-white/70',
    stat: 'bg-ea-amarillo text-ea-verde-oscuro-500',
    accent: 'border-ea-amarillo',
    link: 'bg-ea-amarillo text-ea-verde-oscuro-500',
  },
};

const PEEK = 24;
const desktopQuery = '(min-width: 1024px)';
const subscribe = (cb: () => void) => {
  const mql = window.matchMedia(desktopQuery);
  mql.addEventListener('change', cb);
  return () => mql.removeEventListener('change', cb);
};

const useIsDesktop = () =>
  useSyncExternalStore(
    subscribe,
    () => window.matchMedia(desktopQuery).matches,
    () => false
  );

const CaseCard: FC<{ study: CaseStudy; index: number; deck: boolean }> = ({
  study,
  index,
  deck,
}) => {
  const t = useTranslations('common');
  const theme = themes[study.theme];
  const stats = t.raw(`homepage_cases.${study.id}.stats`) as Stat[];
  const alts = t.raw(`homepage_cases.${study.id}.images_alt`) as string[];

  // Interleave stats and screenshots so numbers lead the row
  const images: ReactNode[] = study.images.map((src, i) => (
    <li key={src} className='overflow-hidden relative shrink-0 snap-start size-44 lg:size-52'>
      <Image src={src} alt={alts[i]} fill sizes='208px' className='object-cover object-top' />
    </li>
  ));
  const statTiles: ReactNode[] = stats.map(stat => (
    <li
      key={stat.label}
      className={`flex flex-col justify-between p-4 shrink-0 snap-start size-44 lg:size-52 ${theme.stat}`}
    >
      <span className='text-4xl font-medium tabular-nums lg:text-5xl display-font'>
        {stat.value}
      </span>
      <span className='text-xs leading-snug lg:text-sm'>{stat.label}</span>
    </li>
  ));
  const tiles = [statTiles[0], images[0], statTiles[1], ...images.slice(1), ...statTiles.slice(2)];

  return (
    <article
      className={`flex overflow-hidden flex-col gap-8 p-6 md:p-10 xl:p-12 ${deck ? 'h-full' : ''} ${theme.card}`}
    >
      <header className='flex gap-6 justify-between'>
        <div className='max-w-2xl'>
          <h3
            className={`text-4xl font-medium xl:text-6xl lg:text-5xl display-font text-balance ${theme.title}`}
          >
            {study.name}
          </h3>
          <p className={`mt-4 text-pretty lg:text-lg ${theme.muted}`}>
            {t(`homepage_cases.${study.id}.sub`)}
          </p>
        </div>
        <span
          className={`text-2xl lg:text-3xl display-font tabular-nums ${theme.muted}`}
          aria-hidden='true'
        >
          ({String(index + 1).padStart(2, '0')})
        </span>
      </header>

      <div className='grid gap-8 mt-auto lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-end'>
        <figure className={`pl-4 border-l-4 ${theme.accent}`}>
          <blockquote className='text-pretty'>“{t(`homepage_cases.${study.id}.quote`)}”</blockquote>
          <figcaption className={`mt-3 text-sm ${theme.muted}`}>
            <span className='block font-semibold'>{study.author}</span>
            {t(`homepage_cases.${study.id}.role`)}
          </figcaption>
          <a
            href={study.url}
            target='_blank'
            rel='noopener noreferrer'
            className={`inline-flex gap-2 items-center py-2 px-4 mt-6 text-xs font-semibold tracking-widest uppercase transition hover:translate-x-0.5 hover:-translate-y-0.5 ${theme.link}`}
          >
            {t('homepage_cases_visit')}
            <FiArrowUpRight className='size-4' aria-hidden='true' />
          </a>
        </figure>
        <ul className='flex overflow-x-auto gap-4 -mr-6 pr-6 snap-x snap-mandatory md:-mr-10 md:pr-10 lg:overflow-visible xl:-mr-12'>
          {tiles}
        </ul>
      </div>
    </article>
  );
};

const DeckLayer: FC<{
  progress: MotionValue<number>;
  index: number;
  total: number;
  children: ReactNode;
}> = ({ progress, index, total, children }) => {
  // Half-card dwell at start/end, one viewport of scroll per transition
  const rel = useTransform(
    progress,
    p => index - Math.min(Math.max(p * total - 0.5, 0), total - 1)
  );
  const y = useTransform(rel, r => (r < 0 ? r * window.innerHeight * 1.1 : r * PEEK));
  const rotateX = useTransform(rel, r => (r < 0 ? -r * 28 : 0));
  const scale = useTransform(rel, r => (r < 0 ? 1 : 1 - r * 0.05));

  return (
    <motion.div
      className='absolute inset-0 origin-bottom'
      style={{ y, rotateX, scale, zIndex: total - index }}
    >
      {children}
    </motion.div>
  );
};

// Separate component so useScroll only runs when its target ref is mounted
const PinnedDeck = () => {
  const ref = useRef<HTMLDivElement>(null);
  const total = caseStudies.length;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    // Height is data-driven: one viewport per card plus half a viewport of dwell on each end
    <div ref={ref} className='relative' style={{ height: `${(total + 1) * 100}vh` }}>
      <div className='flex sticky top-16 items-center h-[calc(100vh-4rem)] perspective-[1600px]'>
        <div className='relative w-full h-[min(640px,calc(100vh-10rem))]'>
          {caseStudies.map((study, i) => (
            <DeckLayer key={study.id} progress={scrollYProgress} index={i} total={total}>
              <CaseCard study={study} index={i} deck />
            </DeckLayer>
          ))}
        </div>
      </div>
    </div>
  );
};

const CaseDeck = () => {
  const isDesktop = useIsDesktop();
  const reduceMotion = useReducedMotion();

  if (isDesktop && !reduceMotion) return <PinnedDeck />;

  return (
    <div className='grid gap-10 pr-2'>
      {caseStudies.map((study, i) => (
        <FadeIn key={study.id} as='div'>
          <CaseCard study={study} index={i} deck={false} />
        </FadeIn>
      ))}
    </div>
  );
};

export default CaseDeck;
