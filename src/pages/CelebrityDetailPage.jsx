import { useParams } from "react-router-dom";
import { shittyStars } from "../utils/celebrities-utils";
import Header from "../component/Header";


function CelebryDetailPage () {

    //je crée une variable afin de récupérer un id dans l'url
    const {celebrityId} = useParams();
    //je fait en sorte que l'id issu de l'url qui est de type chaine de caractères devienne un integer (nombre).
    const id = parseInt(celebrityId)

   
       // je cherche dans mon tableau des célébrités, et j'en sort des id de stars que je rapelle dans mon url via le paramètre celebrityId
       // La variable récupère les stars trouvées dans le tableau
      const celebrityToDisplay = shittyStars.find((celebrity) => {

        return celebrity.id === id;

      })

    return (
        <main>
            <Header />
            <h2>{celebrityToDisplay.name}</h2>
            <p>{celebrityToDisplay.bio}</p>
            <img src={celebrityToDisplay.img} alt={celebrityToDisplay.name}/>

        </main>

    )
}

export default CelebryDetailPage ;