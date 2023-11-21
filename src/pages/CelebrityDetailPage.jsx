import { useParams } from "react-router-dom";
import { shittyStars } from "../utils/celebrities-utils";
import Header from "../component/Header";


function CelebryDetailPage () {

    const {celebrityId} = useParams();

    const id = parseInt(celebrityId)

   

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