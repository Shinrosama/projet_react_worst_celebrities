import { useState } from "react";

function FormMessagePage () {
    
//je veux récupépérer la valeur tappée par l'utilisateur dans le formulaire
//je veux que la valeur stoquée s'affiche en même temps qu'elle est récupérée
// j'utilise donc useState afin de récupérer la valeur stockée dans message a chaque fois qu'un caractère est tapé dans le formulaire il recharge le composant.

    const [message, setMessage] = useState ("");

// grace au paramètre event on peu pointer sur la target (le formulaire) et en retirer la value (le/les caractères tapés) 
    const handleMessageChange = (event) => {

        setMessage(event.target.value);
    }

    return (
        <form>
            <label>
                {/* on récupère ici les caractères entrés par l'utilisateur */}
                <input onChange={handleMessageChange} type = "text" name = "message"/> 
            </label>
            {/* on remet ici les éléments traité plus haut lors du esestate */}
            <p>Vous avez envoyé : "{message}"</p>
        </form>
    )
}

export default FormMessagePage;