import { Routes } from "react-router-dom";
import Header from "../component/Header";
import CelebrityCard from "../component/CelebrityCard";

function HomePage () {
     const shittyStars = [
        {
          id: 1,
          name: "Vincent Lagaffe",
          bio: "Le jet ski c'est mon dada",
          img: "https://file1.telestar.fr/var/telestar/storage/images/2015/photos/vincent-lagaf-decroche-un-record-du-monde-grace-au-flyboard-!-photos-132229/989014-1-fre-FR/Vincent-Lagaf-decroche-un-record-du-monde-grace-au-Flyboard-!-Photos.jpg?alias=original",
          publishedAt: "2020-10-10",
          isPickedByTeam: true,
        },
        {
          id: 2,
          name: "Justin Bieber",
          bio: "hahahahahcedfplêd",
          img: "https://media.gqmagazine.fr/photos/640b1aa5bd6f5c8e911df9ea/master/pass/010322_JBHair_01.jpg",
          publishedAt: "2021-10-10",
          isPickedByTeam: true,
        },
        {
          id: 3,
          name: "Donald Trump",
          bio: "Faire chier les gens",
          img: "https://www.challenges.fr/assets/img/2023/08/25/cover-r4x3w1200-64ecdcc97b04b-photo-d-identite-judiciaire-mug-shot-de-donald-trump.jpg",
          publishedAt: "2020-9-10",
          isPickedByTeam: true,
        },
        {
          id: 4,
          name: "Dora l'exploratrice",
          bio: "migrant de mère en fille",
          img: "https://pbs.twimg.com/profile_images/752615415671554049/a9iPawr3_400x400.jpg",
          publishedAt: "2019-10-11",
          isPickedByTeam: false,
        },
        {
          id: 5,
          name: "Mikey Mouse",
          bio: "a La rue pour mauvaise gestion de Star Wars",
          img: "https://i.pinimg.com/originals/71/50/92/715092e50918cf7b35061730a917df73.jpg",
          publishedAt: "2012-12-12",
          isPickedByTeam: true,
        },
      ];

      const shittyStarsSortedByDate = shittyStars.sort((star1, star2) => {

        return new Date(star1.publishedAt) - new Date(star2.publishedAt);

      })

      const lastShitystrars = shittyStarsSortedByDate.slice (-5)

      const shittyStarsPickedByTeam = shittyStarsSortedByDate.filter((star)=>{
       
        return (star.isPickedByTeam === true);
        
      });

      const lastShitystrarsPickedByTeam = shittyStarsPickedByTeam.slice(-3)


    return (
        <main>
            <Header curentPage="home"/>
            <section>
                <h2>Last celebrities :</h2>
                {lastShitystrars.map((star) => {
                    return (
                        <CelebrityCard starCards={star}/>
                    );
                })}
                
                <h2>Choix de la rédaction :</h2>
                {lastShitystrarsPickedByTeam.map((star) => {
                    return (
                        <CelebrityCard starCards={star}/>
                    );
                })}


            </section>
        </main>
    )
}

export default HomePage;