'use client';

import {
    createContext,
    useState,
    useContext,
    useRef,
    ReactNode,
    MouseEvent,
} from 'react';
import DefaultModalView from './DefaultView';
import SuccessModalView from './SuccessView';
import ErrorModalView from './ErrorView';

type ModalTypes = 'default' | 'success' | 'error';

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

interface ModalData {
    id: number;
    text: string;
    type: ModalTypes;
    isClosing: boolean;
}

interface InfoModalProviderProps {
    children: ReactNode;
}

export default function InfoModalProvider({
    children,
}: InfoModalProviderProps) {
    const [modals, setModals] = useState<ModalData[]>([]);
    const idCounter = useRef(0);

    const openModal = (text: string, type: ModalTypes = 'default') => {
        const newModal: ModalData = {
            id: idCounter.current++,
            text,
            type,
            isClosing: false,
        };
        setModals((prev) => [...prev, newModal]);
    };

    const closeModalById = (id: number) => {
        setModals((prev) =>
            prev.map((modal) =>
                modal.id === id ? { ...modal, isClosing: true } : modal
            )
        );
        setTimeout(() => {
            setModals((prev) => prev.filter((modal) => modal.id !== id));
        }, 500);
    };

    const closeModal = () => {
        if (modals.length === 0) return;
        closeModalById(modals[0].id);
    };

    const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const currentModal = modals[0];

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}

            {currentModal && currentModal.type === 'default' && (
                <DefaultModalView
                    handleBackdropClick={handleBackdropClick}
                    closeModal={closeModal}
                    isClosing={currentModal.isClosing}
                    modalText={currentModal.text}
                />
            )}

            {currentModal && currentModal.type === 'success' && (
                <SuccessModalView
                    handleBackdropClick={handleBackdropClick}
                    closeModal={closeModal}
                    isClosing={currentModal.isClosing}
                    modalText={currentModal.text}
                    modalId={currentModal.id}
                />
            )}

            {currentModal && currentModal.type === 'error' && (
                <ErrorModalView
                    handleBackdropClick={handleBackdropClick}
                    closeModal={closeModal}
                    isClosing={currentModal.isClosing}
                    modalText={currentModal.text}
                    modalId={currentModal.id}
                />
            )}
        </ModalContext.Provider>
    );
}
