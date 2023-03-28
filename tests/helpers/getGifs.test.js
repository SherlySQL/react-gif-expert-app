
/**@jest-environment jsdom*/
import {getGifts}  from "../../src/helpers/getGifs"; //con { } por ser import por defecto


describe('Pruebas en el Componente <getGifts/>', () => {

   test('debe retornar un Arreglo de Gifs', async() => {

      const gifsx = await getGifts('Meme');
         expect( gifsx.length ).toBeGreaterThan( 0 ); //evalua que al menos el array tenga 1 elemento
         expect(gifsx[0]).toEqual({ //Evaluamos que el elemento en la pos 0 sea = a este nuevo objeto
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),

         });
         //console.log (gifsx)

   });

});


