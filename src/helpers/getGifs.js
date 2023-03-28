
export const getGifts = async( category ) =>{ //Función que nos trae el Api

    const url = `https://api.giphy.com/v1/gifs/search?api_key=2xjwU3DCVt9IBoH0E1dzSsnMeAQYivBE&q=${ category }&limit=20`;
    const resp = await fetch ( url );
    const { data } = await resp.json();
  
    const gifs = data.map( img =>({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
    console.log (gifs);
    return gifs;
  }



  