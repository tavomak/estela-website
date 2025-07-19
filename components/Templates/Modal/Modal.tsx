import React, { FC } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Button from '@/components/Atoms/Button';
import CloseIcon from '@/components/Atoms/Svg/CloseIcon';
import { useModal } from '@/hooks/useModal';

type Props = {
  size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  bgColor?: string;
  noPadding?: boolean;
};

const Modal: FC<Props> = ({ size, bgColor, noPadding }) => {
  const { showModal, modalContent, toggleModal } = useModal();

  if (showModal) {
    document.body.classList.add('modal-active');
  }

  const handleClose = () => {
    document.body.classList.remove('modal-active');
    toggleModal();
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
          className='flex overflow-y-auto overflow-x-hidden fixed left-0 top-4 z-40 justify-center items-center p-4 w-full h-full bg-ea-verde-oscuro-500/50 sm:w-screen md:pt-12 md:p-24'
          onClick={handleBackdropClick}
        >
          <div
            className={`shadow-(--default-box-shadow) m-auto border-0 relative overflow-auto ${size === 'sm' ? 'max-w-[400px]' : ''} ${size === 'md' ? 'max-w-[500px]' : ''} ${size === 'lg' ? 'max-w-[650px]' : ''} ${size === 'xl' ? 'max-w-[930px]' : ''} ${size === 'xxl' ? 'max-w-[1100px]' : ''}  ${bgColor ? `${bgColor}` : 'bg-white'} ${noPadding ? 'p-0' : 'p-4'}`}
          >
            <div className='absolute top-4 right-8 md:right-4'>
              <Button
                className='relative z-20 rounded-full cursor-pointer size-8 bg-ea-verde-500 md:bg-ea-verde-oscuro-400 text-ea-amarillo-500 hover:bg-ea-verde-500 hover:text-ea-verde-900'
                onClick={handleClose}
              >
                <span className='m-auto'>
                  <CloseIcon />
                </span>
              </Button>
            </div>
            <div className={`${noPadding ? 'p-0' : ''}`}>{modalContent}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
