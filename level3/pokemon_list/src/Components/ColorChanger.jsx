import axios from "axios"
import { useEffect, useState } from "react"

export default function ColorChanger(){

    const [background, setBackground] = useState("white")

    const getColor = () => {
            axios.get("https://random-color.onrender.com/colors/random")
            .then(res => setBackground(res.data.hex))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        document.body.style.backgroundColor = background
    }, [background])

    return(
        <div>
            <button onClick={getColor}>Theme</button>
        </div>
    )
}