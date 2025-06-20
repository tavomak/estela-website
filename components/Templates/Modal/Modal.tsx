import React, { FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/Atoms/Button';
import CloseIcon from '@/components/Atoms/Svg/CloseIcon';
import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  onClick: () => void;
  showModal: boolean;
  size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
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
          className="overflow-y-auto overflow-x-hidden fixed left-0 top-4 z-40 p-4 w-full h-full bg-black bg-opacity-50 sm:w-screen md:pt-12 md:p-24"
          onClick={handleBackdropClick}
        >
          <div
            className={`shadow m-auto border-0 relative overflow-auto  ${size === 'sm' ? styles.sm : styles.md} ${size === 'lg' ? styles.lg : ''} ${size === 'xl' ? styles.xl : ''} ${size === 'xxl' ? styles.xxl : ''}  ${bgColor ? `${bgColor}` : 'bg-white'} ${noPadding ? 'p-0' : 'p-4'}`}
          >
            <div className="absolute top-4 right-8 md:right-4">
              <Button
                className="relative z-20 rounded-full size-8 bg-ea-verde-500 md:bg-verde-oscuro-400 text-ea-amarillo-500"
                onClick={handleClose}
              >
                <span className="m-auto">
                  <CloseIcon />
                </span>
              </Button>
            </div>
            <div className={`${noPadding ? 'p-0' : ''}`}>{children}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
