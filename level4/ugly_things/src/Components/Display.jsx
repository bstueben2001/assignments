
export default function({imgUrl, title, description, _id, handleEditFunc, handleDeleteFunc}){

    //styling
    
    //all image styling
    const imgStyle = {
        width: "300px",
        height: "300px",
        margin: "20px",
        border: "2px solid black"
    }
    
    return(
        <div className="uglyCard">
            <div>
                <img src={imgUrl} style={imgStyle} />
                <h2>{title}</h2>
                <h3>{description}</h3>
            </div>
            <div>
                <button onClick={() => handleEditFunc(_id)}>Edit</button>
                <button onClick={() => handleDeleteFunc(_id)}>Delete</button>
            </div>
        </div>
    )
}