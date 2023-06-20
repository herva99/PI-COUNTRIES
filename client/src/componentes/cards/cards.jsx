import "./cards.styles.css"
import {Link} from "react-router-dom"

export default function Cards({countries}) {
    const {name, continent, id, imgFlag}= countries
    return(
        <div className="cards">
            <Link to={`/home/${id}`}>
            <img src={imgFlag} alt={name}/>
            <p>Name Country: {name}</p>
            <p>continent: {continent}</p>
            </Link>
        </div>
    )
};