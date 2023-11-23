import { useState } from "react"

function LikesPage () {

    // je veux garder la valeur que j'obtiens au click pour changer la valeur par défaut
    // la variable useState permet de stocker la valeur et de recharger le composant
    // au rechargement useState cherche a prendre la valeur setlike qui vois qu'une valeur est déjà présente dans like (celle stockée au click)
    // l'état change alors pour afficher un nouveau rendu. 
    const [like, setLike] = useState (0);
    const [displayMessage, setDisplayMessage] = useState(false)

    const handleLikeClick = () => {
        if (like < 5) {
        setLike (like +1);
    } else {
        setDisplayMessage (true);
    }
    };

    const handleCloseMessage = () => {

        setDisplayMessage (false);
    };


    return(

        <main>
            {displayMessage && (
                <div>
                    <p>Vous ne pouvez pas liker plus de 5 fois</p>
                    <button onClick={handleCloseMessage}>Fermer le message</button>
                </div>
            )}    
            <button onClick={handleLikeClick}>Like</button>
            <p>vous avez liké {like} fois </p>
        </main>
    )
}
export default LikesPage