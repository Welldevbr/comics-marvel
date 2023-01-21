import { useEffect } from 'react'

import axios from 'axios'
import md5 from 'md5'

export function useAPI(){
  const publicKey = '9690bc81233bab5e02074d49b1dae854'
  const privateKey = '6e70af4d7060da193bcef80dd7e3a90f7f228219'

  const time = Number(new Date())

  const hash = md5(time + privateKey + publicKey)

  useEffect(() => {
    axios.get(
      `http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${hash}&hash=${hash}`
    )
  }, [])
}