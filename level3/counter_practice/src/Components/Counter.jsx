import { useState } from "react"

export default function Counter(){

    // let total = 0;

    const [total, setTotal] = useState(0)


    function totalFunc(num){
        const newNum = total + num
        setTotal(newNum)
    }

    return(
        <div>
            <h1>{total}</h1>
            <button onClick={() => totalFunc(-1)}>-</button>
            <button onClick={() => totalFunc(+1)}>+</button>
        </div>
    )
}