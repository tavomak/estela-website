import React, { FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  onClick: () => void;
  showModal: boolean;
  size: 'sm' | 'md' | 'lg' | 'xl';
  bgColor?: string;
  noPadding?: boolean;
};

const Modal: FC<Props> = ({
  children,
  onClick,
  showModal,
  size,
  bgColor,
  noPadding,
}) => {
  if (showModal) {
    document.body.classList.add('modal-active');
  }

  const handleClose = () => {
    document.body.classList.remove('modal-active');
    onClick();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0, transform: 'scale(1.1)' }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0, transform: 'scale(1.1)' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed z-40 w-full h-full p-4 overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 left-2 sm:w-screen top-4 md:pt-12 lg:py-24"
          onClick={handleBackdropClick}
        >
          <div
            className={`shadow m-auto border-0 relative overflow-auto  ${size === 'sm' ? styles.sm : styles.md} ${size === 'lg' ? styles.lg : ''} ${size === 'xl' ? styles.xl : ''}  ${bgColor ? `${bgColor}` : 'bg-white'} ${noPadding ? 'p-0' : 'p-4'}`}
          >
            <div className="absolute top-4 right-8 md:right-4">
              <button
                data-testid="printed-username"
                className={`p-0 ${styles.close}`}
                onClick={handleClose}
                type="button"
              >
                <span
                  aria-hidden="true"
                  className="p-0 text-3xl font-bold text-gray-400"
                >
                  &times;
                </span>
              </button>
            </div>
            <div className={`${noPadding ? 'p-0' : ''}`}>{children}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
