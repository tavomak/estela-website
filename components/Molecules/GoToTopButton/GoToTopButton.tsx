import { FC, useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const SHOW_AFTER = 400;

const GoToTopButton: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type='button'
      aria-label='Go to top'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`btnArrow fixed bottom-6 right-6 z-50 text-2xl shadow-lg transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <FaAngleUp />
    </button>
  );
};

export default GoToTopButton;
