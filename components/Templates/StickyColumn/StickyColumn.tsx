import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import ServiceCard from '@/components/Molecules/ServiceCard';
import { services as Service } from '@/components/Molecules/ServiceCard/types';

type Props = {
  services: Service[];
  onServiceClick?: () => void;
};

type RowProps = {
  service: Service;
  index: number;
  active: boolean;
  onInView: (index: number) => void;
  onClick: () => void;
};

const ScrollRow: FC<RowProps> = ({ service, index, active, onInView, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-45% 0px -45% 0px' });

  useEffect(() => {
    if (isInView) onInView(index);
  }, [isInView, index, onInView]);

  return (
    <button
      ref={ref}
      type='button'
      onClick={onClick}
      className={`flex flex-col justify-center py-10 w-full text-left border-b transition-colors md:min-h-[55vh] ${
        active ? 'border-ea-verde-500' : 'border-ea-gris-200'
      }`}
    >
      <span
        className={`text-sm font-bold tabular-nums transition-colors ${
          active ? 'text-ea-verde-500' : 'text-ea-gris-400'
        }`}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3
        className={`mt-1 text-3xl md:text-5xl font-medium display-font transition-colors ${
          active ? 'text-ea-verde-900' : 'text-ea-gris-400'
        }`}
      >
        {service.title}
      </h3>
    </button>
  );
};

const StickyColumns: FC<Props> = ({ services, onServiceClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleInView = useCallback((index: number) => setActiveIndex(index), []);

  if (!services || services.length === 0) return null;

  return (
    <div className='flex gap-6 lg:gap-12'>
      {/* Left: sticky active card (desktop only) */}
      <div className='hidden md:block md:w-1/2'>
        <div className='sticky top-24'>
          <div className='flex gap-3 items-center mb-6'>
            <AnimatePresence mode='wait'>
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                className='text-4xl font-bold tabular-nums text-ea-verde-500'
              >
                {String(activeIndex + 1).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
            <span className='text-base text-ea-gris-400'>
              / {String(services.length).padStart(2, '0')}
            </span>
          </div>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceCard service={services[activeIndex]} onClick={onServiceClick} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right: scroll rows (desktop) drive the active card */}
      <div className='w-full md:w-1/2'>
        <div className='hidden md:block'>
          {services.map((service, index) => (
            <ScrollRow
              key={service.title}
              service={service}
              index={index}
              active={index === activeIndex}
              onInView={handleInView}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Mobile: stacked full cards */}
        <div className='flex flex-col gap-8 md:hidden'>
          {services.map(service => (
            <ServiceCard key={service.title} service={service} onClick={onServiceClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyColumns;
