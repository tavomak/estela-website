import React, { createContext, useState, useContext, useMemo, FC, ReactNode } from 'react';

type Props = {
  children: React.ReactNode;
};

interface ModalContextType {
  showModal: boolean;
  modalContent: ReactNode | null;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider: FC<Props> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const data = useMemo(
    () => ({
      showModal,
      modalContent,
      openModal,
      closeModal,
    }),
    [showModal, modalContent]
  );

  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};

const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export { ModalProvider, useModal };
