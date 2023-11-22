import { useState } from "react";

function CopyrightPage () {
    //avec la variable useState je veux pouvoir stocker une valeur et recharger mon composant en la prenant en compte.
    // au premier passage les éléméents de la page seront lu normalement car displaytext n'aura stocké aucune valeur, par défaut ce sera true
    // lors du click sur le composant celà stocke la nouvelle valeur de displaytext et recharge le composant.
    // lors du click suivant, la valeur de displaytext stocké lors du rechargement alors l'effet inverse se produit dans ce cas qui est celui d'un bouléen. 
    const [displayText, setDisplayText] = useState(true);

    const handleButtonClick = () => {
        setDisplayText(!displayText);
    }

    return (

        <main>
            {displayText && <p>Blablabla</p>}
            
            <button onClick={handleButtonClick}>Cacher le texte</button>
        </main>
    )
}

export default CopyrightPage;