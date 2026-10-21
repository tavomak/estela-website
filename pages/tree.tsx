import type { GetStaticPropsContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import Layout from '@/components/Templates/Layout';
import FadeIn from '@/components/Atoms/FadeIn';
import FormSubscribe from '@/components/Molecules/Forms/FormSubscribe';
import useSocialIcon from '@/hooks/useSocialIcon';
import { loadMessages } from '@/utils/i18n/getMessages';
import { treeContact, treeLinks, type TreeLink } from '@/utils/constants';

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => ({
  props: {
    messages: await loadMessages(locale),
  },
});

const wrap = 'mx-auto w-full max-w-[480px] px-5';
const label = 'text-xs font-semibold tracking-[.08em] uppercase';
const goArrow = 'grid place-items-center rounded-full bg-ea-verde-oscuro-500 text-ea-amarillo';
const focusRing =
  'focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ea-verde-900';

const cardStyles = {
  estela: 'bg-ea-verde-200 shadow-[6px_6px_0_#639D90] hover:shadow-[4px_4px_0_#639D90]',
  lari: 'bg-ea-amarillo-200 shadow-[6px_6px_0_#C9D46B] hover:shadow-[4px_4px_0_#C9D46B]',
};

const Tree = () => {
  const t = useTranslations('common');
  const [getIcon] = useSocialIcon();
  const whatsappUrl = `https://wa.me/${treeContact.whatsapp}?text=${encodeURIComponent(
    t('tree_whatsapp_message')
  )}`;

  const renderLinks = (brand: keyof typeof treeLinks) => (
    <ul className='grid gap-3.5 pr-1.5 pb-1.5'>
      {treeLinks[brand].map(({ network, name, handle, url }: TreeLink) => {
        const isInternal = url.startsWith('/');
        const className = `grid grid-cols-[28px_minmax(0,1fr)_36px] items-center gap-3.5 min-h-[68px] py-3 pr-3.5 pl-[18px] text-ea-verde-oscuro-500 transition hover:translate-x-0.5 hover:translate-y-0.5 motion-reduce:transition-none ${cardStyles[brand]} ${focusRing}`;
        const content = (
          <>
            <span className='text-[26px]' aria-hidden='true'>
              {getIcon(network)}
            </span>
            <span className='grid min-w-0 leading-tight'>
              <span className='display-font text-[19px] font-medium'>
                {name.startsWith('tree_') ? t(name) : name}
              </span>
              <span className='overflow-hidden text-sm whitespace-nowrap opacity-80 text-ellipsis'>
                {handle}
              </span>
            </span>
            <span className={`w-9 h-9 ${goArrow}`} aria-hidden='true'>
              <FiArrowUpRight className='w-[18px] h-[18px]' />
            </span>
          </>
        );
        return (
          <li key={url}>
            {isInternal ? (
              <Link href={url} className={className}>
                {content}
              </Link>
            ) : (
              <a href={url} target='_blank' rel='noopener noreferrer' className={className}>
                {content}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <Layout title={t('tree_title')} description={t('tree_description')} noIndex>
      <FadeIn className={`grid gap-2.5 pt-9 pb-8 ${wrap}`}>
        <h1 className='display-font font-medium text-balance text-ea-verde-900 text-[clamp(36px,10vw,46px)] leading-[1.05]'>
          {t('tree_hero_title')}
        </h1>
        <p className='text-ea-verde-oscuro-400'>{t('tree_hero_subtitle')}</p>
      </FadeIn>

      <div className={`grid gap-9 pb-10 ${wrap}`}>
        <FadeIn className='grid gap-3.5' delay={0.1}>
          <span className={`${label} text-ea-verde-900`}>Estela Estudio</span>
          <h2 className='sr-only'>{t('tree_links_title', { brand: 'Estela Estudio' })}</h2>
          {renderLinks('estela')}
        </FadeIn>

        <FadeIn className='grid gap-3.5' delay={0.2}>
          <span className={`${label} text-ea-verde-900`}>Lari-Dada</span>
          <h2 className='sr-only'>{t('tree_links_title', { brand: 'Lari-Dada' })}</h2>
          {renderLinks('lari')}
        </FadeIn>
      </div>

      <section className='text-white bg-ea-verde-oscuro-500'>
        <FadeIn as='div' className={`grid gap-3.5 py-10 ${wrap}`}>
          <span className={`${label} text-ea-verde-200`}>{t('tree_promo_label')}</span>
          <h2 className='display-font text-[30px] font-medium leading-[1.1] text-balance text-ea-amarillo'>
            {t('tree_promo_title')}
          </h2>
          <FormSubscribe />
        </FadeIn>
      </section>

      <FadeIn className={`grid gap-3.5 py-10 ${wrap}`}>
        <span className={`${label} text-ea-verde-900`}>{t('tree_contact_label')}</span>
        <h2 className='display-font text-[28px] font-medium leading-[1.1] text-ea-verde-900'>
          {t('tree_contact_title')}
        </h2>
        <div className='grid grid-cols-[120px_minmax(0,1fr)] max-[360px]:grid-cols-1 items-center gap-[18px] p-[18px] mr-1.5 border-2 border-ea-verde-oscuro-500 shadow-[6px_6px_0_#123026]'>
          <Image
            src='/qr-whatsapp-tree.svg'
            alt={t('tree_qr_alt')}
            width={120}
            height={120}
            unoptimized
            className='w-full max-[360px]:w-40 h-auto'
          />
          <div className='grid gap-3 min-w-0'>
            <span className='display-font text-lg font-medium whitespace-nowrap tabular-nums text-ea-verde-900'>
              {treeContact.phoneLabel}
            </span>
            <a
              href={whatsappUrl}
              target='_blank'
              rel='noopener noreferrer'
              className={`inline-flex gap-2.5 items-center text-sm font-medium w-fit text-ea-verde-oscuro-500 ${focusRing}`}
            >
              {t('tree_open_chat')}
              <span className={`w-8 h-8 ${goArrow}`} aria-hidden='true'>
                <FiArrowRight className='w-[18px] h-[18px]' />
              </span>
            </a>
          </div>
          <span className='grid col-span-full gap-0.5 pt-3.5 text-[13px] border-t border-[#DCE8E3] text-ea-verde-oscuro-400'>
            {t('tree_email')}
            <a
              href={`mailto:${treeContact.email}`}
              className={`display-font text-lg font-medium wrap-anywhere text-ea-verde-900 hover:underline ${focusRing}`}
            >
              {treeContact.email}
            </a>
          </span>
          <span className='grid col-span-full gap-0.5 pt-3.5 text-[13px] border-t border-[#DCE8E3] text-ea-verde-oscuro-400'>
            LinkedIn
            <a
              href={treeContact.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className={`display-font text-lg font-medium text-ea-verde-900 hover:underline ${focusRing}`}
            >
              {treeContact.linkedinName}
            </a>
          </span>
        </div>
      </FadeIn>
    </Layout>
  );
};

export default Tree;
