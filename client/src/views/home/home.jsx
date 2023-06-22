import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux";
import NavBar from "../../componentes/navbar/navbar"
import CardList from "../../componentes/cardList/cardList"
import {getCountries, getCountriesByName}  from "../../redux/actions" 
import { Link } from "react-router-dom";
import "./home.styles.css"




export default function Home() {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries);
    const [searchString, setSearchString] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [selectedContinent, setSelectedContinent] = useState("");
    const [showAllCountries, setShowAllCountries] = useState(true);
    
  
    const toggleSortOrderAsc = () => {
      setSortOrder("asc");
    };
  
    const toggleSortOrderDesc = () => {
      setSortOrder("desc");
    };
  
    const handleContinentFilter = (continent) => {
      setSelectedContinent(continent);
      setShowAllCountries(false);
    };
  
    const handleShowAllCountries = () => {
      setSelectedContinent("");
      setShowAllCountries(true);
    };
  
    useEffect(() => {
      if (!allCountries.length) {
        dispatch(getCountries());
      }
    }, [dispatch, allCountries]);
  
    const handleChange = (event) => {
      setSearchString(event.target.value.toLowerCase());
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(getCountriesByName(searchString));
    };
  
    return (
      <div className="home">
        <h1 className="home-title">ESTAS EN EL HOME</h1>
        <NavBar handleSubmit={handleSubmit} handleChange={handleChange} />
        <Link to="/create">
              <button>Crear Actividad</button>
        </Link>
        <button onClick={handleShowAllCountries}>Mostrar todos los países</button>
        <button onClick={toggleSortOrderAsc}>Orden Ascendente</button>
        <button onClick={toggleSortOrderDesc}>Orden Descendente</button>
        <button onClick={() => handleContinentFilter("Europe")}>Filtrar por Europa</button>
        <button onClick={() => handleContinentFilter("Asia")}>Filtrar por Asia</button>
        <button onClick={() => handleContinentFilter("Americas")}>Filtrar por America</button>
        <button onClick={() => handleContinentFilter("Africa")}>Filtrar por Africa</button>
        <button onClick={() => handleContinentFilter("Antarctic")}>Filtrar por Antartica</button>
        <button onClick={() => handleContinentFilter("Oceania")}>Filtrar por Oceania</button>
        
        <CardList
          allCountries={allCountries}
          sortOrder={sortOrder}
          selectedContinent={selectedContinent}
          showAllCountries={showAllCountries}
        />
      </div>
    );
  }
  
