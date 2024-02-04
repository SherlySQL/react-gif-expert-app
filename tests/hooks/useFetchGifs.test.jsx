

import { renderHook } from '@testing-library/react';
import  useFetchGifs from '../../src/hooks/useFetchGifs'; //sin { } por ser import por defecto


describe ('Pruebas en el hook useFetchGifs', ()=> { 

  test('debe regresar el estado inicial de nuestro hook ', () => {
        
        //renderHook Funcion importada desde React Testing Library
      const { result } = renderHook( ()=> useFetchGifs('One Punch') );
      
      console.log(result);

      const { images, isLoading } = result.current; //desestructuramos el result actual

      expect( images.length ).toBe(0); //Es decir que en su estado inicial hayan 0 imagenes
      expect( isLoading ).toBeTruthy(); //que isLoading sea true en su estado inicial
      
    });
    
});







/*
Cual es el estado inicial de nuestro hook useFetchGifs.js?
            return {
                images: imagesx, (R// que las imagenes sea un arreglo vacio)
                isLoading //para verificar si es true o false que esta cargando imagenes (R// y que el isLoading este en true)
            }
const useFetchGifs = ( category ) Nuestro hook useFetchGifs.js recibe un paremetro llamado category, 
                                  pero en el de test le vamos a poner One Punch


*/
