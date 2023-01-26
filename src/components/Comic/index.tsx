import { useState } from "react";
import { useComic } from "../../context/ComicContext";
import { Comic } from "../../interfaces/GeneralTypes";
import ModalComponent from "../ModalComponent";
import {ComicContainer, TextComic} from "./styles"

interface ComicComponentProps {
  comic: Comic;
  onClick?: (comic: Comic) => void;
}

export function ComicComponent({ comic }: ComicComponentProps) {
  let { id, title, creator, thumbnail } = comic;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedComic, setSelectedComic] = useState({} as Comic);  

  function open(){
    setIsOpen(true);
    setSelectedComic(comic)
  }

  return (
    <>
      <ComicContainer key={id} onClick={open}>
        <img src={thumbnail} alt={`${title} thumbnail`} />
        <TextComic>
          <h2>{title}</h2>
          <p> {creator}</p>
        </TextComic>
      </ComicContainer>
      <ModalComponent isModalOpen={isOpen} selectedComic={selectedComic} />
    </>
  );
}