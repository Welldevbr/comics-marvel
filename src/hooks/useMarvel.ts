import { useEffect, useState } from "react";
import { Comic } from "../interfaces/GeneralTypes";
import axios from "axios";
import md5 from "md5";

const apiKey = "9690bc81233bab5e02074d49b1dae854"
const privateKey = "6e70af4d7060da193bcef80dd7e3a90f7f228219"

  const getHash = () => {
    let ts = Date.now();
    let hash = md5(ts + privateKey + apiKey)
    return "&ts="+ts+"&hash="+hash;
  }

  const api = axios.create({
    baseURL: "https://gateway.marvel.com:443/v1/public"
  });


export default function useMarvel() {
    let [comics, setComics] = useState<Array<Comic>>([]);
    let [loading, setLoading] = useState(true);

    async function getComics(): Promise<Array<Comic>>{
        let comics: Array<Comic> = [];
        let response = await api.get(
            `/comics?apikey=${apiKey}` + getHash()
        );

        let { data } = response.data;
        
        
        for (let comic of data?.results){
            comics.push({
                id: comic.id,
                title: comic.title,
                description: comic.description,
                creator: comic.creators.available ? comic.creators.items[0]["name"] : null,
                thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
            } as Comic)
        }

        return comics;
    }

    useEffect(() => {
        if (loading){
            getComics()
                .then((comics) => {
                    setComics(comics)
                }
            );

            setLoading(false);
        }
    }, [loading]);

    return {comics, loading}
}

       