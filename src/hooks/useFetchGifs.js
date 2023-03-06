import { useEffect, useState } from "react";
import { getGifts}  from "../helpers/getGifs";


const useFetchGifs = ( category ) => { //ESTE ES UN CUSTOM HOOKS, PUES NO RETORNA JSX

    const [imagesx, setImagesx] = useState([]);
    const [isLoading, setIsLoading] = useState(true); //para verificar si esta cargando imagenes


    //Promesa que nos trae las imagenes
    const getImages = async() => { //Funcion que con el async se convierte en promesa
        const newImages = await getGifts( category );
        setImagesx(newImages);
        setIsLoading(false);
    
    }


    useEffect( () => { //Este Hooks tiene 2 argumentos
      getImages(); //1) La función que queremos disparar para que nos traiga las imagenes
    }, []) // 2) Un array de mis dependencias (Si yo dejo las dependencias vacías 
        //significa que este solo se va a disparar la primera vez que se crea)



    return {
        images: imagesx,
        isLoading //para verificar si es true o false que esta cargando imagenes

    }

}

export default useFetchGifs
