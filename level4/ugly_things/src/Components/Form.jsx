import { useContext } from "react"
import {ListContext} from "./Context.jsx"

export default function Form(){
    
const { uglyInfo, handleChange , handleSubmit } = useContext(ListContext)

    return (
        <form onSubmit={handleSubmit}>
            <div className="inputBox">
                <input
                className="inputFields"
                name="imgUrl"
                value={uglyInfo.imgUrl} 
                placeholder="image URL" 
                onChange={handleChange}
                />
                <input
                className="inputFields"
                name="title"
                value={uglyInfo.title} 
                placeholder="title" 
                onChange={handleChange}
                />
                <input
                className="inputFields"
                name="description"
                value={uglyInfo.description} 
                placeholder="description" 
                onChange={handleChange}
                />
                <button type="submit">Add to list</button>
             </div>
        </form>
    )
}