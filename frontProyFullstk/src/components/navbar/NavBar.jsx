import { LiaSignInAltSolid } from "react-icons/lia";
import { Link } from 'react-router-dom'
import { FaUserAstronaut } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaSpaceAwesome } from "react-icons/fa6"
import { useSelector } from "react-redux"
import './NavBar.scss'

const NavBar = () => {

    const user = useSelector((state) => state.auth.user)

    console.log('desde el nav ' + user);

    return (
        <header>
            <nav>
                <Link to='/'>
                    <FaSpaceAwesome size={40} color="rgb(210, 210, 71)" />
                </Link>

                <div className="input_style-search">
                    <input type="text" />
                    <button>🎞️</button>
                </div>

                <div className="nav__options">
                    {(!user) ? ( //================================== REVIAR ESTA VALIDACION =======
                        <ul>
                            <li>
                                <Link to='/logout'>
                                    <RiLogoutCircleRLine size={20} />
                                </Link>
                            </li>
                        </ul>

                    ) : (

                        <ul>
                            <li>
                                <Link to='/login'>
                                    <LiaSignInAltSolid size={30} />
                                </Link>
                            </li>
                            <li>
                                <Link to='/register'>
                                    <FaUserAstronaut size={40} />
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default NavBar
