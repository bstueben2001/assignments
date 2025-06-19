import {useEffect, useState} from "react"
import axios from "axios"
import MemeList from "./MemeList"

export default function MemeImages(props){

const [startMeme, setStartMeme] = useState();
    
const imgStyle = {
    width: "450px",
    height: "600px",
    margin: "20px",
    border: "2px solid black"
}

const getRandomMeme = () => {     
    axios.get("https://api.imgflip.com/get_memes")
        .then(res => {
            const memes = res.data.data.memes;
            const randomMeme = memes[Math.floor(Math.random() * memes.length)]
            setStartMeme(randomMeme.url)
            // console.log(res.data)
        })
        .catch(err => console.log(err))
};
 
useEffect(() => {
 axios.get("https://api.imgflip.com/get_memes")
    .then(res => {
        const memes = res.data.data.memes;
            if (memes.length > 0) {
                setStartMeme(memes[0].url);
            }})
    .catch(err => console.log(err))
},[])

















    return(
        <div style={{ position: "relative", textAlign: "center", marginTop: "20px" }}>
            <button onClick={getRandomMeme}>Get a new meme!</button>
                <h3 className="topText">{props.memeText?.topText}</h3>
                {startMeme && <img src={startMeme} style={imgStyle}></img>}
                <h3 className="bottomText">{props.memeText?.bottomText}</h3>
        </div>
    )
}

//pass meme into meme array (MemeList)