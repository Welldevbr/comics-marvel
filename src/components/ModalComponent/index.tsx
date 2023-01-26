import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useComic } from "../../context/ComicContext";
import { Comic } from "../../interfaces/GeneralTypes";
import { ModalContainer, Content } from "./styled";

interface ModalProps {
  selectedComic: Comic;
  isModalOpen: number;
}


const customStyles = {
  overlay:{ 
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(8px)',
    positon: 'relative',
    zIndex: '1111'
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
  
  const [open, setOpen] = useState(false);
		const closeModal  = () => setOpen(false);

		useEffect(() => {
			if( isModalOpen == 1) { setOpen(false) }
			else { setOpen(true) }
		}, [isModalOpen]);

  
  return (
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalContainer>
          <span onClick={closeModal}>
              <svg width="50" height="36" viewBox="0 0 50 36"   fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4247 2L2 18L18.4247 34M48 18H2.46"   stroke="#202020" stroke-width="4"   stroke-miterlimit="10" stroke-linecap="round"   stroke-linejoin="round"/>
              </svg>
          </span>
          <Content>
                <img 
                  src={selectedComic.thumbnail} 
                  alt="Selected Comic thumb" 
                />
                <div>
                      <h1>{selectedComic.title}</h1>
                      <hr/>
                      <p>{selectedComic.creator}</p>
                      <span dangerouslySetInnerHTML={{__html: selectedComic.description}}/>
                </div>
          </Content>
        </ModalContainer>
      </Modal>
  )
}