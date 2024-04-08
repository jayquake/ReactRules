import React, { createContext, useContext, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ModalContext = createContext();

export function useModalContext() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const openModal = useCallback((item) => {
    setCurrentItem(item);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setCurrentItem(null);
    setModalOpen(false);
  }, []);

  const openModalAndUpdateURL = useCallback((item) => {
    setCurrentItem(item);
    setModalOpen(true);
    navigate(`/${item.criteria}/${item.route}/`);
  }, []);
  const closeModalAndResetURL = useCallback(
    (navigate) => {
      setCurrentItem(null);
      setModalOpen(false);
      navigate(`/${currentItem.criteria}/`);
    },
    [currentItem]
  );

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        openModal,
        closeModal,
        currentItem,
        openModalAndUpdateURL,
        closeModalAndResetURL
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
