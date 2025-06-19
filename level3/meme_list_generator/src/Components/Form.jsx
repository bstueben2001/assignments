import {useState, useEffect } from 'react'

export default function Form({addMeme, memeInfo, handleChange, handleSubmit}){

// // state prior to any input and what the inputs reset to
//    const initState = {
//         topText: "",
//         bottomText: ""
//     }

// // formData state
// const [formData, setFormData] = useState(initState)

// //essentially updates values (formData) with live changes
//     function handleChange(e){ 
//         const {name, value} = e.target //as name (input field) is updataed with value
//         console.log(e.target)
//         setFormData(prevFormData => { //then sets State
//             return {
//                 ...prevFormData,  //spreading prev data (to seperate input field names)
//                 [name]: value //overwriting old(prev) data with new values
//             }
//         })        
//     }

//  //submit function to add to list of memes
//     function submitFunc(e){
//             e.preventDefault()
//             addMeme(formData)
//     }

    return(
        <form onSubmit={handleSubmit}>
            <input className='inputs' 
                name="topText" 
                value={memeInfo.topText} 
                onChange={handleChange} 
                placeholder="top text">
            </input>
            <input className='inputs' 
                name="bottomText" 
                value={memeInfo.bottomText} 
                onChange={handleChange} 
                placeholder="bottom text">
            </input>
            <button className='saveButton'>Save your meme!</button>
        </form>
    )
}