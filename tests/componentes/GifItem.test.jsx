
/**@jest-environment jsdom*/
import { render, screen } from "@testing-library/react";
import GifItem  from "../../src/components/GifItem"; //sin { } por ser import por defecto


describe('Pruebas en el Componente <GifItem/>', () => {
    const titlex = 'Hola';
    const urlx = 'https://sherly.com/';


    test('debe hacer match con el snapshot', () => {
       const { container } = render( <GifItem title={ titlex } url={ urlx } /> );
       expect( container ).toMatchSnapshot();

    });


    test('debe mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifItem title={ titlex } url={ urlx } /> );
        screen.debug();
        //FORMA 1
        //expect( screen.getByRole('img').src ).toBe(urlx);
        //expect( screen.getByRole('img').alt ).toBe(titlex);

        //FORMA 2 DESESTRUCTURANDO
         const { src, alt } = screen.getByRole('img');
            expect( src ).toBe( urlx );
            expect( alt ).toBe( titlex );
        
 
     });


     test('debe mostrar el titulo (es decir un texto) en el componente', () => {
        
        render( <GifItem title={ titlex } url={ urlx } /> );
        expect( screen.getByText(titlex)).toBeTruthy();
      
     });


});
