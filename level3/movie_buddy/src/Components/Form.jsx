import { useState } from "react"

export default function Form(props){

    const {addMovie} = props

    // const [initState, setInitState] = useState({
    //     title: '',
    //     description: '',
    //     rating: ''
    // })

    const initState = {
        title: '',
        description: '',
        rating: ''
    }

    const [formData, setFormData] = useState(initState)

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })        
    }

    function handleSubmit(e){
        e.preventDefault()
        addMovie(formData)
        setFormData(initState)
    }
    
    console.log(formData)

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add a New Movie</h2>
            <input 
                placeholder="title" 
                name="title"
                value={formData.title}
                onChange={handleChange}/>
            <input 
                placeholder="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />
            <input 
                placeholder="rating"
                name="rating"    
                value={formData.rating}
                onChange={handleChange}
            />
            <button>Submit New Movie</button>
        </form>
    )
}