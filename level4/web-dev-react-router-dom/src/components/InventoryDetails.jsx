import { inventory } from "../inventory";
import { useParams } from "react-router-dom";

function InventoryDetails() {

    const {id} = useParams()
    
    const foundItem = inventory.find(item => item.id === id)

    return ( 
        <div>
          <h2>{id}</h2>
          <h2>Name: {foundItem.name}</h2>
          <h2>Category: {foundItem.category}</h2>
          <h2>Price: {foundItem.price}</h2>
          <h2>Quantity: {foundItem.quantity}</h2>
        </div>
     );
}

export default InventoryDetails;