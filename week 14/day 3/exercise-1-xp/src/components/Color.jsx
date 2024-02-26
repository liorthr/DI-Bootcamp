import { useState } from "react";

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState("red")


    return(
        <header>
        <h2>My favorite color is {favoriteColor}</h2>
        </header>
    )

            // Dont understand what you want with the note its not clear
}

export default Color