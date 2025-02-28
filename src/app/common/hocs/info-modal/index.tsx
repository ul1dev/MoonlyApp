'use client';

import {
    createContext,
    useState,
    useContext,
    ReactNode,
    MouseEvent,
} from 'react';
import DefaultModalView from './DefaultView';
import SuccessModalView from './SuccessView';

type ModalTypes = 'default' | 'success';

interface ModalContextType {
    openModal: (text: string, type?: ModalTypes) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
    openModal: () => {},
    closeModal: () => {},
});

export function useInfoModal() {
    return useContext(ModalContext);
}

interface InfoModalProviderProps {
    children: ReactNode;
}

export default function InfoModalProvider({
    children,
}: InfoModalProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalText, setModalText] = useState('Loading...');
    const [modalType, setModalType] = useState<ModalTypes>('default');
    const [isClosing, setIsClosing] = useState(false);

    const openModal = (text: string, type: ModalTypes = 'default') => {
        setModalType(type);
        setModalText(text);
        setIsOpen(true);
        setIsClosing(false);
    };

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 500);
    };

    const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}

            {isOpen && modalType === 'default' && (
                <DefaultModalView
                    handleBackdropClick={handleBackdropClick}
                    closeModal={closeModal}
                    isClosing={isClosing}
                    modalText={modalText}
                />
            )}

            {isOpen && modalType === 'success' && (
                <SuccessModalView
                    handleBackdropClick={handleBackdropClick}
                    closeModal={closeModal}
                    isClosing={isClosing}
                    modalText={modalText}
                />
            )}
        </ModalContext.Provider>
    );
}
