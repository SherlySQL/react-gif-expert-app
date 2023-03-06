import { useState } from "react";


export const AddCategory = ( { onNewCategory }) => { //Funcional Component
      
      //FUNCION #1
      //Aqui controlo los cambios en el estado, cada vez que el usuario va ingresando un dato 
        const [inputValue, setInputValue]= useState('Casa') 
        const onInputChange = ({ target }) => {
          setInputValue ( target.value );
        }

      //FUNCION #2
      //Este evento onSubmit se activa caundo el usuario hace enter
      const onSubmit = ( event ) => {
        event.preventDefault(); //para que no recargue el form 

        //Este if es para evitar que si no hay datos y se presiona enter, se inserten "espacios vacios" desde input
        // RETURN: es para que se salgo del ciclo  si cumplió 
        if (inputValue.trim().length <= 1) return;      
        onNewCategory( inputValue.trim() ); //Aqui envia el nuevo valor "inputValue" a la función props que recibio del padre (onNewCategory)
        setInputValue(''); //esto es para limpiar el input, despues que se guarda un valor
      }
 

  return (
       //FORMA #1
      // <form onSubmit={ (event) => onSubmit(event) }> 

      //FORMA #2
      <form onSubmit={  onSubmit }> 
          <input 
              type="text"
              placeholder="Buscar gifs"
              value={ inputValue }

              //Llamamos al objeto event y se lo pasamos como parametro a la función onInputChange 
              //FORMA #1
              //onChange={ (event) => onInputChange(event) } 

              //FORMA #2
              onChange={ onInputChange } 
          />
      </form>
  )
}





























//FORMAR ANTERIOR 
//QUE SE REALIZÓ CON setCategories


// import { useState } from "react";

//   const AddCategory = ( { setCategories }) => {
      
//     //FUNCION #1
//       const [inputValue, setInputValue]= useState('Denice') //Aqui controlo los cambios en el estado que va haciendo el usuario cada vez que va ingresando un dato 
//       const onInputChange = ({ target }) => {
//         setInputValue ( target.value );
//       }

//       //FUNCION #2
//       const onSubmit = ( event ) => {
//         event.preventDefault(); //para que no recargue el form 
//         if (inputValue.trim().length <= 1) return;  //Este if es para evitar que si no hay datos y se presiona enter, se inserten "espacios vacios" desde input// RETURN: es para que se salgo del ciclo  si cumplió 
//         setCategories( categ => [...categ, inputValue ]);//Unimos los valores que tenga setCategories + el inputValue
//         setInputValue(''); //esto es para limpiar el input, despues que se guarda un valor
    
//       }
 

//   return (
//        //FORMA #1
//       // <form onSubmit={ (event) => onSubmit(event) }> 

//       //FORMA #2
//       <form onSubmit={  onSubmit }> 
//           <input 
//               type="text"
//               placeholder="Buscar gifs"
//               value={ inputValue }

//               //Llamamos al objeto event y se lo pasamos como parametro a la función onInputChange 

//               //FORMA #1
//               //onChange={ (event) => onInputChange(event) } 

//               //FORMA #2
//               onChange={ onInputChange } 
//           />
//       </form>

//   )
// }

// export default AddCategory
