import { useState } from "react"

export default function Create(){

    const [input, setInput]= useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
});
    const [error, setError]=useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
    });
    const validate=()=>{
        let error={}

        if(input.name === "" || input.name[0].trim().length === 0){
            error.name="ingrese un nombre por favor"
        }
        return error;
    };


    const handleChange=(event)=>{
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        })

        setError(
            validate({
                ...input,
                [event.target.name]: event.target.value,
            })
        )
    };
    const handleSubmit=(event)=>{
        event.preventDefault()
        if(Object.keys(error).length === 0){
            alert("Todo Ok")
        } else{
            alert("Faltan Datos")
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                        <input name="name" value={input.name} onChange={handleChange}/>    
                        <p>{error.name && error.name}</p>
                </div>
                <div>
                    <label>Dificultad:</label>
                        <input name="difficulty" value={input.difficulty} onChange={handleChange}/>
                        <p>{error.difficulty && error.difficulty}</p>
                </div>
                <div>
                    <label>Duración </label>
                        <input name="duration" value={input.duration} onChange={handleChange}/>
                        <p>{error.duration && error.duration}</p>
                </div>
                <div>
                    <label>Temporada:</label>
                        <input name="season" value={input.season} onChange={handleChange}/>
                        <p>{error.season && error.season}</p>
                </div>
                <button type="submit">ENVIAR</button>
            </form>
        </div>

    )
}

