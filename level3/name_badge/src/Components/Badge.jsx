
export default function Badge(props){
    // console.log("Rendering badge", props)
    
    //destructure props
    const {user, desc, phone, badgeType, terms, index} = props
    
    //alternating color styling
    const headingColor = {
        backgroundColor: index % 2 === 0 ? 'red' : 'blue'
    }

    return(        
    //pull form submitted values and apply props to values
    <div className="badgeBox">
        <h3 style={headingColor} className="badgeHeader">Name: {user}</h3>
        <p>{desc}</p>
        <p>Phone Number: {phone}</p>
        <p>{badgeType}</p>
        <p>Agreed to Terms: {terms ? "Yes" : "No"}</p>
    </div>
)

}