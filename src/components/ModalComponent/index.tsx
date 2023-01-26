import { useComic } from "../../context/ComicContext";
import { Comic } from "../../interfaces/GeneralTypes";
import { ModalContainer } from "./styled";

interface ModalProps {
  selectedComic: Comic;
  isModalOpen: boolean;
}

import Modal from 'react-modal';
import { useEffect, useState } from "react";

const customStyles = {
  overlay:{ 
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(12px)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function ModalComponent({isModalOpen, selectedComic}: ModalProps) {
  const {closeModal} = useComic()

  
  return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <ModalContainer onClick={closeModal}>
            <span>
              <svg width="50" height="36" viewBox="0 0 50 36"   fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4247 2L2 18L18.4247 34M48 18H2.46"   stroke="#202020" stroke-width="4"   stroke-miterlimit="10" stroke-linecap="round"   stroke-linejoin="round"/>
              </svg>
            </span>

            <img src={selectedComic.thumbnail} alt="Selected Comic thumb" className="card"/>
                <div className="content">
                    <div className="title">
                        <h1>{selectedComic.title}</h1>
                        <hr/>
                        <p className="creator">{selectedComic.creator}</p>
                        <p className="description" dangerouslySetInnerHTML={{__html: selectedComic.description}}/>
                    </div>
                </div>
          </ModalContainer>
      </Modal>
  )
}