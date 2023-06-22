import { Link } from "react-router-dom"
import "./landing.styles.css"
export default function Landing(){
    return (
        <div className="landing">
            <div>
                <h1>¡Welcome To The Individual Project Of Henry Countries!</h1>
                <h2>Developed by Hernán Vázquez</h2>
                <Link to="/home">
                <button>HOME</button>
                </Link>
            </div>
        </div>

    )
}

