import { useEffect, useState } from 'react'
import axios from 'axios'
import md5 from 'md5'

const publicKey = '9690bc81233bab5e02074d49b1dae854'
const privateKey = '6e70af4d7060da193bcef80dd7e3a90f7f228219'
const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

const url = `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`


export function useAPI(){
  const [items, setItems] = useState<any[]>([])
  
  useEffect(() => {
    const fetch = async() => {
      const response = await axios.get( url )
      setItems(response.data.data.results)
    }

    fetch()   

  }, [url])

  return { items }
}