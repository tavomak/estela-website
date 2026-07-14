import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /** seconds for one full loop — lower is faster */
  duration?: number;
  direction?: 'left' | 'right';
};

// Dep-free marquee: two identical tracks translated -50% = seamless loop.
// ponytail: CSS keyframe over react-fast-marquee; add the dep only if
// autoFill / gradient / dynamic-speed features are ever actually needed.
const Marquee: FC<Props> = ({ children, className, duration = 25, direction = 'left' }) => (
  <div className={`overflow-hidden ${className ?? ''}`}>
    <div
      className='flex w-max hover:[animation-play-state:paused]'
      style={{
        animation: `marquee ${duration}s linear infinite`,
        animationDirection: direction === 'right' ? 'reverse' : 'normal',
      }}
    >
      <div className='flex shrink-0 items-center'>{children}</div>
      <div className='flex shrink-0 items-center' aria-hidden>
        {children}
      </div>
    </div>
  </div>
);

export default Marquee;
