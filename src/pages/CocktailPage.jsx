import { json } from "react-router-dom";

function CocktailPage () {
    // je vais chercher la liste des cocktails sur une api via une url qui me retournera un tableau d'objets en json.
    // avec fetch je vais chercher les informations via l'url
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")

    // comme je ne reçoi pas directement la totalité de ma requète je récupère d'abord une promesse
    // j'obtiens une réponse qui n'est pas lisible par java script on transforme alors la réponse en json lisible par réact
    
    .then((response) => {

        return response.json();
    }) 

    // quand le fichier json est lisible par java scrip alors on envoi un console log
    .then((json) => {

        console.log(json);
    });

    return (
    <p>test</p>
    )
}

export default CocktailPage;