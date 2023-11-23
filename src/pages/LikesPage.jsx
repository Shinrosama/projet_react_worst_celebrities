import { useState } from "react"

function LikesPage () {

    // je veux garder la valeur que j'obtiens au click pour changer la valeur par défaut
    // la variable useState permet de stocker la valeur et de recharger le composant
    // au rechargement useState cherche a prendre la valeur setlike qui vois qu'une valeur est déjà présente dans like (celle stockée au click)
    // l'état change alors pour afficher un nouveau rendu. 
    const [like, setLike] = useState (0);

    const handleLikeClick = () => {

        setLike (like +1);
    }


    return(

        <main>
            <button onClick={handleLikeClick}>Like</button>
            <p>vous avez liké {like} fois </p>
        </main>
    )
}
export default LikesPage