import Header from "../component/Header";
import { shittyStars } from "../utils/celebrities-utils";


function RandomCelebrityPage () {

   

      

      const randomIndex = (Math.random() * (shittyStars.length - 1)).toFixed(0);

      const randomCelebrity = shittyStars[randomIndex];

      console.log(randomCelebrity)
    return (
        <>
        <Header curentPage="random"/>
        <article>
                <p>{randomCelebrity.name} </p>
                <img src={randomCelebrity.img} alt={randomCelebrity.name}/>

        </article>
       </>
    )
}

export default RandomCelebrityPage;