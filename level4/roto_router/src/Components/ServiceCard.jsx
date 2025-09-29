import {useNavigate} from 'react-router-dom'

export default function ServiceCard(props){

    const {id, service, price, duration} = props

    const navigate = useNavigate()

    function handleClick(){
        navigate(`/services/${id}`)
    }

    return(
        <>
        <div onClick={handleClick}>
            <h3>{service}</h3>
            <h4>{price}</h4>
            <p>{duration}</p>
        </div>
        </>
    )
}

