

export default function Detail({countries}){
    const country= countries
    return (
        <div>
            <h1>Country Detail</h1>
            <h2>Id:{country?.id}</h2>
            <h2>Nombre:{country?.name}</h2>
            <h2>Continente:{country?.continent}</h2>
            <h2>Capital:{country?.capital}</h2>
            <h2>Subregion:{country?.subregion}</h2>
            <h2>Área:{country?.area}</h2>
            <h2>Población:{country?.population}</h2>
        </div>

    )
}
