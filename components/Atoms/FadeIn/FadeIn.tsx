import { FC, JSX, ReactNode, useRef } from 'react';
import { motion, useInView } from 'motion/react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
  scale?: number;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
};

const FadeIn: FC<Props> = ({
  children,
  className,
  delay = 0,
  x = 0,
  y = 28,
  scale = 0.95,
  as = 'section',
  id,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const MotionElement = motion[as as keyof typeof motion] as typeof motion.section;

  return (
    <MotionElement
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      animate={isInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : { opacity: 0, y, x, scale }}
      id={id}
    >
      {children}
    </MotionElement>
  );
};

export default FadeIn;
