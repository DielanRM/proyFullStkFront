import { LiaSignInAltSolid } from "react-icons/lia";
import { Link } from 'react-router-dom'
import { FaUserAstronaut } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import './NavBar.scss'

const NavBar = () => {
    return (
        <header>
            <nav>
                <Link to='/'>Busca tu pelicula</Link>

                <div className="input_style">
                    <input type="text" />
                    <button>🎞️</button>
                </div>

                <div className="nav__options">
                    <ul>
                        <li>
                            <Link to='/login'>
                                <LiaSignInAltSolid size={30}/>
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <FaUserAstronaut size={40}/>
                            </Link>
                        </li>
                        <li>
                            <Link to='/logout'>
                                <RiLogoutCircleRLine size={20}/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
