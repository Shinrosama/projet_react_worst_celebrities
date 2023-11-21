import { Link } from "react-router-dom"

function CelebrityCard ({starCards}) {


    // on déplace la props a laquelle on aplique le paramètre de la fonction. 
    //cela permet de rendre le code moins fourni et d'éviter d'avoir plusieur fois les mêmes éléments.
    
    return (
        <article>
            <Link to= {`/celebrity/${starCards.id}`}>
            <h2>{starCards.name} </h2>
            <img src={starCards.img} alt={starCards.name}/>
            </Link>
        </article>

    )

}

export default CelebrityCard