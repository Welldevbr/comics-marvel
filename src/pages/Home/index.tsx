import { Button } from '../../components/Button';
import { Banner, HomeContainer } from './styles';
import axios from "axios";
import md5 from "md5";
import { useEffect, useState } from "react";
import ComicsList from '../../components/ComicList';


const baseURL = "http://gateway.marvel.com/v1/public"
const apiKey = import.meta.env.VITE_API_KEY
const privateKey = import.meta.env.VITE_PRIVATE_KEY
const time = Number(new Date());
const hash = md5(time + privateKey + apiKey);


export function Home() {  
const [comics, setComics] = useState([])
const [url, setUrl] = useState(`${baseURL}/comics?ts=${time}&apikey=${apiKey}&hash=${hash}`)

useEffect(() => {
  const fetch = async() => {
      const response = await axios.get( url )
      setComics(response.data.data.results)
  }

  fetch()
}, [url])


 return (
   <HomeContainer>
      <h1>Novos Lançamentos</h1>
      <Banner>
        <p>
          Compre a sua HQ através da Comics Marvel e ganhe 500 pontos 
        </p>
        <Button>Enviar</Button>
      </Banner>
      <ComicsList />
   </HomeContainer>
 );
}