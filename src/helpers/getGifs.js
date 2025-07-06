


//funcion que llama a la api y usa el estado category como parametro de busqueda con una limitacion de 10 repuestas
 export const getGifs = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?api_key=5px0kaluR36y1op7f9EUsjYuvEMdaw7j&q=${category}&limit=10`;
    const resp = await fetch(url);
    //desestructuracion de la respuesta 
    const {data} = await resp.json()
    //console.log(data)
    const gifs = data.map (img => ({
        id:img.id,
        title: img.title,
        url: img.images.downsized_medium.url

        

    }))
    console.log(gifs)
    return gifs
   
   
  };
  
