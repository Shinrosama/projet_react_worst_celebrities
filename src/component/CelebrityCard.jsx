import { Link } from "react-router-dom"

function CelebrityCard ({starCards}) {

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