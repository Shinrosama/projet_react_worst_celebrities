import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CelebritiesPage from "../pages/CelebritiesPage";

function Header ({curentPage} ) {

    return (

        <header>
            <nav>
                <ul>
                    <li>
                        {curentPage === "home" ? (
                        <strong>
                            <Link to="/">Home</Link>
                        </strong>
                        ) : (
                            <Link to="/">Home</Link>

                        )
                    }
                    </li>
                    <li>
                        {curentPage === "celebrities" ? (
                        <strong>
                            <Link to = "/celebrities">Celebrity</Link>
                        </strong>
                    
                        ) : (

                            <Link to = "/celebrities">Celebrity</Link>
                        )
                    }
                    </li>
                    <li>
                        {curentPage === "random" ? (
                       
                        <strong>
                            <Link to= "/randomcelebrity" >Random Celebrity</Link>
                        </strong>
                         ) : (
                            <Link to= "/randomcelebrity" >Random Celebrity</Link>
                         )
                        }
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;