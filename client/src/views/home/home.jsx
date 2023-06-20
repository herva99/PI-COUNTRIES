import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux";
import NavBar from "../../componentes/navbar/navbar"
import CardList from "../../componentes/cardList/cardList"
import {getCountries, getCountriesByName}  from "../../redux/actions" 
import "./home.styles.css"

export default function Home(){

    const dispatch= useDispatch()
    const allCountries= useSelector((state)=>state.allCountries)
   // const [filtered, setFiltered]= useState([]);
    const [searchSting, setSearchString] = useState("");

    useEffect(()=>{
        if(!allCountries.length){
            dispatch(getCountries());
        }
        //     setFiltered(allCountries)
    }, [dispatch, allCountries])

    const handleChange=(event)=>{
        setSearchString(event.target.value.toLowerCase())
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(getCountriesByName(searchSting))
    }
/*
    const handleSubmit = (event)=>{
        event.preventDefault()
        if(searchSting !== ""){
            const filter = filtered.filter((country)=>
            country.name.toLowerCase().includes(searchSting));
            return setFiltered(filter)
        }
        setFiltered(allCountries)
    }
*/
    return (

        <div className="home">
            <h1 className="home-title">ESTAS EN EL HOME</h1>
            <NavBar handleSubmit={handleSubmit} handleChange={handleChange}/>
            <CardList  allCountries= {allCountries}/>
        </div>
    )
}

