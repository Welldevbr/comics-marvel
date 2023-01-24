import { Comic } from "../../interfaces/GeneralTypes";
import {ComicContainer} from "./styles"

interface ComicComponentProps {
  comic: Comic;
}

export function ComicComponent({ comic }: ComicComponentProps) {
  let { id, title, creator, thumbnail } = comic;

  return (
    <ComicContainer key={id}>
      <img src={thumbnail} alt={`${title} thumbnail`}/>
      <div>
          <h2>{ title }</h2>
          <p> { creator }</p>
      </div>
    </ComicContainer>
  );
}