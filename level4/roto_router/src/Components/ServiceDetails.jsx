
import { services } from "./services";
import { useParams } from "react-router-dom";

export default function ServiceDetails() {

    const {id} = useParams()
    
    const foundServices = services.find(item => item.id === id)

    return ( 
        <div>
          <h2>{id}</h2>
          <h2>Service: {foundServices.service}</h2>
          <h2>Price: {foundServices.price}</h2>
          <h2>Duration: {foundServices.duration}</h2>
        </div>
     );
}

