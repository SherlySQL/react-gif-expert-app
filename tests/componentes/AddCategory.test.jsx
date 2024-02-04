

/**@jest-environment jsdom*/
import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory }  from "../../src/components/AddCategory"; //con { } por no ser import por defecto


describe('Pruebas en el Componente <AddCategory/>', () => {
   

    test('debe de cambiar el valor de la caja de texto', () => {

       render( <AddCategory onNewCategory={ () => {} } /> ); //onNewCategory recibe un arrowfunction

       const input = screen.getByRole('textbox'); //creamos una etiqueta html tipo input (en jest se pone como tipo textbox)
       fireEvent.input(input, { target: { value: 'Mayah' } }); //input recibe el valor que hay en el event (fireEvent)
       expect ( input.value ).toBe('Mayah') //Comparamos si el valor que tiene el input del evento == a Mayah?
       screen.debug(); 
       
    });




    test('Verificammos si luego de guardar el valor del Input, se limpia la caja de texto', () => {

        const inputValue = "Mayah";

        render( <AddCategory onNewCategory={ () => {} } /> ); //onNewCategory recibe un arrowfunction
         
        const input = screen.getByRole('textbox'); //creamos una etiqueta html tipo input (en jest se pone como tipo textbox)
        const form = screen.getByRole('form'); //creamos una etiqueta html tipo form (la ligamos con el aria-label="form" de AddCategory)

        fireEvent.input(input, { target: { value: inputValue } }); //input recibe el valor que hay en el event (fireEvent)
        fireEvent.submit(form);
        
        expect ( input.value ).toBe('') //Comparamos si el valor que tiene el input del evento == ""? 
        screen.debug();
        
     });


    

     
});






