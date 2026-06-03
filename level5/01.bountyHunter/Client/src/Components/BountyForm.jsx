import React, { useState } from "react";

export default function addBountyForm() {
    const initInputs = {
        firstName: "",
        lastName: "",
        living: "",
        bountyAmount: "",
        type: "",
        _id: ""
        }
    const [inputs, setinputs] = useState(initInputs)

    function handleChange(e){
        const { name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function hanldeSubmit(e){
        e.preventDefault()
        //put request
        setInputs(initInputs)
    }

    return (
        <form onSubmit={hanldeSubmit}>
            <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} placeholder="First name"></input>
            <input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} placeholder="Last name"></input>
            <input type="check" name="living" value={inputs.living} onChange={handleChange} placeholder="Status"></input>
            <input type="text" name="bountyAmount" value={inputs.bountyAmount} onChange={handleChange} placeholder="Bounty amount"></input>
            <input type="text" name="type" value={inputs.type} onChange={handleChange} placeholder="Type"></input>
            <button>Add bounty</button>
        </form>
    )
}