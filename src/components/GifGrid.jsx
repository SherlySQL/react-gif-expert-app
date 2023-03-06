
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => { //Funcional Component


  //Hooks importado useFetchGifs
  const { images, isLoading } = useFetchGifs( category);
  console.log ({ images, isLoading });



return (
  <>
      <h3>{ category }</h3>

      { //if moderno (si isLoading está cargando imagenes, muestre lo que esta en el h2)
        isLoading && (<h2>Cargando...</h2>)
      }

      <div className="card-grid">
        {
         images.map( ( imagex ) => ( //imagex es una varible que recibe todas las propiedades de images, e iteramos sobre ella
            <GifItem 
              //PROPS ENVIADAS DEL PADRE GifGrid al hijo GifItem
                  key={ imagex.id } //(key es parte del map)
                  { ...imagex} //En lugar de poner propiedad x propiedad utilizamos ...Spred
                               //Spred nos manda todas las propiedades del imagex al props de componente hijo

            />
         ))
       
        }
      </div>
       
  </>
  )
}







