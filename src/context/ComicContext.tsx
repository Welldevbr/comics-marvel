import React, { createContext, useContext, useState } from 'react';
import ModalComponent from '../components/ModalComponent';
import Modal from '../components/ModalComponent';
import { Comic, ContextData } from '../interfaces/GeneralTypes'


interface ComicProviderProps {
    children: React.ReactNode;
}

const ComicContext = createContext({} as ContextData);

export function useComic(){
    return useContext(ComicContext);
}

export default function ComicProvider({ children }: ComicProviderProps) {
    const [selectedComic, setSelectedComic] = useState({} as Comic);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function openModal(comic : Comic){
        setIsModalOpen(true);
        setSelectedComic(comic);
    }

    function closeModal(){
        setIsModalOpen(false);
        console.log('close')
    }
    
    return (
        <ComicContext.Provider value={{closeModal, openModal}}>
            { children }
        </ComicContext.Provider>
    );
}