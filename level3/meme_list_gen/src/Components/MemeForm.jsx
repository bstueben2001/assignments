import {useEffect, useState} from "react"

export default function MemeForm(props){

   const initState = {
        topText: "",
        bottomText: ""
    }

    const [formData, setFormData] = useState(initState)

    function handleChange(e){ //essentially updating with live changes
        const {name, value} = e.target //as name (input field) is updataed with value
        console.log(e.target)
        setFormData(prevFormData => { //then sets State
            return {
                ...prevFormData,  //spreading prev data (to seperate input field names)
                [name]: value //overwriting old(prev) data with new values
            }
        })        
    }

    function submitFunc(e){ //submit function to add to list of memes
        e.preventDefault()
        console.log(props)
        props.addMemeToList({memeText:{topText: "string", bottomText: "string"}, imgURL: "https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png"}

        )
    }

     useEffect(() => {
        props.memeTextInfo(formData)
    },[formData])

    return(
        <form onSubmit={submitFunc}>
            <input 
                name="topText" 
                value={formData.topText} 
                onChange={handleChange} 
                placeholder="top text">
            </input>
            <input 
                name="bottomText" 
                value={formData.bottomText} 
                onChange={handleChange} 
                placeholder="bottom text">
            </input>
            <button>Submit</button>
        </form>
    )
}