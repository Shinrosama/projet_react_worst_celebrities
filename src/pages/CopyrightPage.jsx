import { useState } from "react";

function CopyrightPage () {

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