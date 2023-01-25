import { useComic } from "../../context/ComicContext";
import { Comic } from "../../interfaces/GeneralTypes";
import { Overlay, ModalContainer, ComicInfo } from "./styled";

interface ModalProps {
  selectedComic: Comic;
}

export default function Modal({ selectedComic }: ModalProps) {
  let { closeModal } = useComic();

  return (
      <div>
          <ModalContainer>
            <button type="button" onClick={closeModal}>
                fechar
            </button>
              <img src={selectedComic.thumbnail} />
                <ComicInfo >
                   <h1>{selectedComic.title}</h1>
                   <hr/>
                   <p >{selectedComic.creator}</p>
                   <p dangerouslySetInnerHTML={{__html: selectedComic.description}}/>
                </ComicInfo>
          </ModalContainer>
      </div>
  )
}