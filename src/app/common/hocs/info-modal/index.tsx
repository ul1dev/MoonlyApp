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
import AlertModalView from './AlertView';

type ModalTypes = 'default' | 'success' | 'error';

interface ModalContextType {
    openModal: (
        text: string,
        type?: ModalTypes,
        isResetState?: boolean
    ) => void;
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

    const openModal = (
        text: string,
        type: ModalTypes = 'default',
        isResetState = false
    ) => {
        const newModal: ModalData = {
            id: idCounter.current++,
            text,
            type,
            isClosing: false,
        };

        if (isResetState) {
            setModals([newModal]);
        } else {
            setModals((prev) => [...prev, newModal]);
        }
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

            {currentModal &&
                ['success', 'error'].includes(currentModal.type) && (
                    <AlertModalView
                        handleBackdropClick={handleBackdropClick}
                        closeModal={closeModal}
                        isClosing={currentModal.isClosing}
                        modalText={currentModal.text}
                        modalId={currentModal.id}
                        // @ts-ignore
                        type={currentModal.type}
                    />
                )}
        </ModalContext.Provider>
    );
}
