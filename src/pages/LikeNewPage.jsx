import { useState } from "react"

function LikeNewPage () {

    const [likeNew, setlikeNew] = useState(0);

        const handleLikeNewClick = () => {

            setlikeNew (likeNew +1);
        }

    return (
        <main>
            <button onclick={handleLikeNewClick} >Like</button>
            <p>vous avez clické {likeNew} fois</p>
        </main>

    )
}

export default LikeNewPage