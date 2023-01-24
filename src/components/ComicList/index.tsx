import useMarvel from "../../hooks/useMarvel"
import { Comic } from "../../interfaces/GeneralTypes";
import { ComicComponent } from "../Comic";
import {ComicsWrapper} from "./style"

export default function ComicsList() {
  const {comics, loading} = useMarvel();

  return (
    <ComicsWrapper>
      { 
        !loading && comics.map(
                (comic: Comic) => {
                    return(
                    <ComicComponent key={comic.id} comic={comic}/>
                )
            }
        )
      }
    </ComicsWrapper>
  )
}