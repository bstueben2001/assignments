import { services } from "./services";
import ServiceCard from "./ServiceCard";


export default function ServicePage() {

    const serviceCardElements = services.map(item => {
        return(
            <ServiceCard 
                key= {item.id}
                {...item}
            />
        )
    })

    return ( 
        <div>
            <h1>Our services</h1>
            {serviceCardElements}
        </div>
     );
}
