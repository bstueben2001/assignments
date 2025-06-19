import {useEffect, useState} from "react"
import axios from "axios"
import MemeList from "./MemeList"

export default function MemeDisplay(props){
    
const imgStyle = {
    width: "450px",
    height: "600px",
    margin: "20px",
    border: "2px solid black"
}

    return(
        <div style={{ position: "relative", textAlign: "center", marginTop: "20px" }}>
                <h3 className="topText">{props.memeText?.topText}</h3>
                <img src={props.imgURL} style={imgStyle}></img>
                <h3 className="bottomText">{props.memeText?.bottomText}</h3>
        </div>
    )
}

//pass meme into meme array (MemeList)