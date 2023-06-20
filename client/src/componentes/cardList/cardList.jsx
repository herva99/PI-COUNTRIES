import Cards from "../cards/cards"
import "./cardList.styles.css"

export default function CardList({allCountries}) {
   
    const countriesList= allCountries
    if (!Array.isArray(countriesList)) {
        // No se encontraron países, mostrar un mensaje adecuado
        return <div>No se encontro un Pais con ese nombre</div>;
      }
    

    return(
        <div className="card-list">
            {countriesList?.map((countries, index)=>
            ( <Cards key={index} countries={countries}/>))}
        </div>
    )
};