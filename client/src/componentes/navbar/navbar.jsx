import "./navbar.styles.css"

export default function NavBar({handleSubmit, handleChange}) {
    return(
        <div >
            <form className="search-box">
                <input onChange={handleChange} placeholder="Buscador"/>
                <button onClick={handleSubmit} className="button">Buscar</button>
            </form>
        </div>
    )
};