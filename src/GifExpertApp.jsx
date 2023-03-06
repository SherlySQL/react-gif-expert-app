
import { useState } from "react";
import {AddCategory, GifGrid} from "./components"; //importación de Archivo Barril


const GifExpertApp = () => {

    //Categories es un array, al cual desestructuramos y tiene 2 elementos
    const [categories, setCategories]= useState(['Princess']);


    //No utilizar push en array en react, no es muy conveniente
    //Si queremos añadir un elemento en el array categories
    //Hacemos un nuevo array donde incluimos, todo lo actual de categories + "el valor nuevo(newCategory)"
    const onAddCategory = ( newCategory ) => {

        //el If evalua si el array categories incluye la newCategory que deseo incluir, 
        //con (return) se sale de la función onAddCategory, pero si no entonces continua a la siguiente linea e incluye el nuevo valor
          if ( categories.includes(newCategory) ) return; 

     setCategories([ newCategory, ...categories ]) //Aqui es donde finalmente se incluye la nueva categoria + las 2 existentes
  }

  return (
    <>
        <h1>GifExpertApp</h1>
       
        <AddCategory 
          onNewCategory={ event => onAddCategory(event) }//Se renderiza el componente hijo AddCategory
                                                          //AddCategory recibe de su padre como props la funcion onNewCategory
                                                          //Addcategory lo único que hace es crear un input 
                                                          //y al final emitir un valor para el padre GifExpert cuando el usuario hace enter, en el input 
        />

      {
        categories.map((category) => (
          <GifGrid  //Se renderiza el componente hijo GifGrid (se repite segun el tamaño del array)
            key={category} //Map siempre ocupa una Key para mapear un array, podemos utilizar cualquier nombre "category"
            category={category} /> //GifGrid recibe de su padre como props el valor de "category"
        ))
      }  
    </>
  )
}

export default GifExpertApp



















//FORMAR ANTERIOR 
//QUE SE REALIZÓ CON setCategories

// import { useState } from "react"
// import AddCategory from "./components/AddCategory";

// const GifExpertApp = () => {

//     //Categories es un array, al cual desestructuramos y tiene 2 elementos
//     const [categories, setCategories]= useState(['Princess', 'Mayah']);

//     //No utilizar push en array en react, no es muy conveniente
//     //Si queremos añadir un elemento en el array categories
//     //Hacemos un nuevo array donde incluimos, todo lo actual de cateries + "el valor nuevo(newCategory)"

//     const onAddCategory = ( ) => {
//     setCategories( cat => [...cat, 'Sherly']);

//   }



//   return (
//     <>

//     {/*Titulo*/}  
//     <h1>GifExpertApp</h1>


//     {/*Input*/} 
//     <AddCategory setCategories ={ setCategories }/>


//     {/*Listado Dinamico*/}
//     <ol>
//       {
//         categories.map( category => {
//            return <li key={ category }>{ category }</li>
//         })
//       }
//     </ol>

//     </>
//   )
// }

// export default GifExpertApp
