import { FC, ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

type Props = {
  children: ReactNode;
  className?: string;
  index?: number;
};

const setTranslateOffset = (index: number) => {
  if (index === 1) return 20;
  if (index > 20) return 40;
  return index * 2;
};

// Generic scale-on-scroll wrapper (gsd port, decoupled from <Image>).
const ScrollTriggered: FC<Props> = ({ children, className, index = 0 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [20, setTranslateOffset(index)]);

  return (
    <div ref={ref}>
      <motion.div style={{ scale, y }} className={className}>
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollTriggered;
