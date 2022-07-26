import Nike from "../../assets/img/Nike.jpg";
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    return (
        <div className="logo">
            <Link to='/inicio'>
                <img src={Nike} alt="Nike" width="150" />
            </Link>
        </div>
    )
}