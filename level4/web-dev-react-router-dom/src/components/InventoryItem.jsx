import {useNavigate} from 'react-router-dom'

function InventoryItem(props) {

    const {name, category, price, quantity, id} = props

    const navigate = useNavigate()

    function handleClick(){
        navigate(`/inventory/${id}`)
    }

    return ( 
        <div className="inventory-item" onClick={handleClick}>
            <h3>{name}</h3>
            <h4>{category}</h4>
            <p><b>Price:</b> ${price}</p>
            <p>{quantity} left</p>
        </div>
     );
}

export default InventoryItem;