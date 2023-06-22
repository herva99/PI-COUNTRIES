import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getCountries } from "../../redux/actions";
import { Link } from "react-router-dom";
export default function Create() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: "",
  });
  const [error, setError] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: "",
  });

  useEffect(() => {
    dispatch(getCountries());
}, [dispatch]);

  const validate = () => {
    let error = {};

    if (input.name === "" || input.name[0].trim().length === 0) {
      error.name = "Ingrese un nombre por favor";
    }
    return error;
  };

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

    setError(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationError = validate();
  
    if (Object.keys(validationError).length === 0) {
      try {
        const countryId = input.country; 
        const newActivity = await dispatch(createActivity(input, countryId));
  
        if (newActivity) {
          alert("Actividad creada exitosamente");
          setInput({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            country: "",
          });
          dispatch(getCountries());
        } else {
          alert("Error al crear la actividad");
        }
      } catch (error) {
        console.log(error);
        alert("Error al crear la actividad");
      }
    } else {
      alert("Faltan Datos");
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la Actividad:</label>
          <input name="name" value={input.name} onChange={handleChange} />
          <p>{error.name && error.name}</p>
        </div>
        <div>
          <label>Dificultad:</label>
          <input
            name="difficulty"
            value={input.difficulty}
            onChange={handleChange}
          />
          <p>{error.difficulty && error.difficulty}</p>
        </div>
        <div>
          <label>Duración:</label>
          <input
            name="duration"
            value={input.duration}
            onChange={handleChange}
          />
          <p>{error.duration && error.duration}</p>
        </div>
        <div>
          <label>Temporada:</label>
          <input name="season" value={input.season} onChange={handleChange} />
          <p>{error.season && error.season}</p>
        </div>
        <div>
          <label>País:</label>
          <select name="country" value={input.country} onChange={handleChange}>
            <option value="">Seleccionar país</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          <p>{error.country && error.country}</p>
        </div>
        <button type="submit">Crear</button>
        <Link to="/home">
              <button>Volver</button>
        </Link>
      </form>
    </div>
  );
};