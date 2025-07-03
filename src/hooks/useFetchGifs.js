import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
     //funcion asincrona que espera la respuesta de la api  
        const getImages = async () => {
    
        const newImages = await getGifs(category)
        //funcion que actualiza el estado local con la respuesta que viene de la funcion getGifs
        setImages (newImages)
        setIsLoading(false)
    }
    
    //usamos el useEffect para que ejecute la funcion como efecto secundario y no cada vez que se renderize el componente    
     useEffect(() =>{
        //ejecucion de la funcion que llama a la api
    getImages();
     },[])   
  return {
    images,
    isLoading
  }
}
