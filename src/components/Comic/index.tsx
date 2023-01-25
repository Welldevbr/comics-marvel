import { useComic } from "../../context/ComicContext";
import { Comic } from "../../interfaces/GeneralTypes";
import {ComicContainer, TextComic} from "./styles"

interface ComicComponentProps {
  comic: Comic;
}

export function ComicComponent({ comic }: ComicComponentProps) {
  let { id, title, creator, thumbnail } = comic;
  let { openModal } = useComic();

  return (
    <ComicContainer key={id} onClick={() => openModal(comic)}>
      <img src={thumbnail} alt={`${title} thumbnail`}/>
      <TextComic>
          <h2>{ title }</h2>
          <p> { creator }</p>
      </TextComic>
    </ComicContainer>
  );
}