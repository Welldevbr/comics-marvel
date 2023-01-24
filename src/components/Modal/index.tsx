import { useComic } from "../../context/ComicContext";
import { Comic } from "../../interfaces/GeneralTypes";

interface ModalProps {
  selectedComic: Comic;
}

export default function Modal({ selectedComic }: ModalProps) {
  let { closeModal } = useComic();

  return (
      <div className="overlay" style={{
          "--primary": "white",
          "--text": "black",
          "--sub-title": "rgba(1, 1, 1, 0.6)"
      } as React.CSSProperties}>
          <div className="container">
              <button type="button" onClick={closeModal}>
                  <img src="/assets/close.svg" alt="Close Modal"/>
              </button>
              <img src={selectedComic.thumbnail} alt="Selected Comic thumb" className="card"/>
              <div className="content">
                  <div className="title">
                      <h1>{selectedComic.title}</h1>
                      <hr/>
                      <p className="creator">{selectedComic.creator}</p>
                      <p className="description" dangerouslySetInnerHTML={{__html: selectedComic.description}}/>
                  </div>
              </div>
          </div>
      </div>
  )
}