import { useEffect, useState } from 'react';
import Modal from 'react-modal';
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

function ChildModal(props?: any){
  const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

  return (
    <><button onClick={handleOpen}>Click</button><Modal
      isOpen={open}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContainer>
        <Content>
          <h1>Tested</h1>
        </Content>
      </ModalContainer>
    </Modal></>
  )
}

export default function ParentModal({isModalOpen, selectedComic}: ModalProps) {
  
  const [open, setOpen] = useState(false);
		const closeModal  = () => setOpen(false);

		useEffect(() => {
			if( isModalOpen == 1) { setOpen(false) }
			else { setOpen(true) }
		}, [isModalOpen]);

    const handleCheckCreators = () => {
      if( selectedComic.creator == "" || selectedComic.creator == null ){ return `Não há Criadores Disponiveis`}
      else { return `${selectedComic.creator}, ` }
    }

    const handleCheckDescription = () => {
			if( selectedComic.description == "" ){ return `Não há Descrição Disponivel`}
			else { return selectedComic.description}
		}

  
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
                      <p>{handleCheckCreators()}</p>
                      <span dangerouslySetInnerHTML={{__html: handleCheckDescription()}}/>
                </div>
          </Content>
        </ModalContainer>
        <ChildModal />
      </Modal>
  )
}