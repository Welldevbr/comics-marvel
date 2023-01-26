import useMarvel from "../../hooks/useMarvel"
import { Comic } from "../../interfaces/GeneralTypes";
import { ComicComponent } from "../Comic";
import {ComicsWrapper} from "./styles"

export default function ComicsList() {
  const {comics, loading} = useMarvel();
  console.log(loading)

  return (
    <ComicsWrapper>
      { 
        (loading) ? <h2>Loading</h2>:(
          comics.map(
            (comic: Comic) => {
                return(
                    <ComicComponent
                        key={comic.id} 
                        comic={comic}
                    />
                )
            }
        )
        )
      }
    </ComicsWrapper>
  )
}