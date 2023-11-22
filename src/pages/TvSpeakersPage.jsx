import Header from "../component/Header";
import SpeakerCard from "../component/SpeakerCard"



function TvSpeakersPage () {

    const shittyTvSpeakers = [

        "Laurent Ruquier", "Pascal Praud", "Hanouna", "Morandini", "Faugiel"
    ]

    return (

        <>
        <Header curentPage="TvSpeakersPage"/>
        <main>
            <h3>lES PRESENTATEURS AVENGERS LIDL</h3>

            {shittyTvSpeakers.map((speaker) => {
                return (
                <SpeakerCard speakerName = {speaker}/>
                )
               
            })}
        </main>
        </>
    )
}

 export default TvSpeakersPage;