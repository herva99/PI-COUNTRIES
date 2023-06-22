import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesById } from "../../redux/actions";
import { Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countryDetail);

  useEffect(() => {
    dispatch(getCountriesById(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Country Detail</h1>
      <>
        <h2>Id: {country?.id}</h2>
        <h2>Nombre: {country?.name}</h2>
        <h2>Continente: {country?.continent}</h2>
        <h2>Capital: {country?.capital}</h2>
        <h2>Subregión: {country?.subregion}</h2>
        <h2>Área: {country?.area}</h2>
        <h2>Población: {country?.population}</h2>
        <h2>Actividades:</h2>
        {country?.Activities?.map((activity) => (
          <div key={activity.id}>
            <h3>Nombre: {activity.name}</h3>
            <p>Dificultad: {activity.difficulty}</p>
            <p>Duración: {activity.duration}</p>
            <p>Temporada: {activity.season}</p>
          </div>
        ))}
       <img src={country?.imgFlag} alt={country?.name} />
        <div>
        <Link to="/home">
          <button>Volver</button>
        </Link>
        </div>
      </>
    </div>
  );
}
