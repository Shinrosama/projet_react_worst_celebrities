import { Link } from "react-router-dom";
import Header from "../component/Header";
import { shittyStars } from "../utils/celebrities-utils";
import CelebrityCard from "../component/CelebrityCard";


function CelebritiesPage () {





    return (
        <main>
            <Header/>
            {shittyStars.map((star) => {

                return (
                    //je rapelle la page qui contiens la props
                    <CelebrityCard starCards={star}/>
                )
            })}
        </main>


    )
}

export default CelebritiesPage;