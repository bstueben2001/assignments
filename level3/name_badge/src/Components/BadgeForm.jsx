import { useState } from "react"

export default function Form({addBadge}){


    //initial state
    const initState = {
        user: '',
        desc: '',
        phone: '',
        badgeType: '',
        terms: ''
    }


    //badge state
    const [badgeInfo, setBadgeInfo] = useState(initState)


    //validity test
    const formValid = () => {
        //destructure badgeInfo (state or saved values of inputs)
    const {user, desc, phone, badgeType, terms} = badgeInfo;
    //return if conditions are true
    return (
        //use trim() to eliminate spaces. && used to meet multiple conditions
        user.trim().length >= 3 && // next three inputs must not be empty, and must be longer than 3 characters
        desc.trim().length >= 3 &&
        phone.trim().length >= 3 && 
        badgeType.trim() !== '' && //must select either employee or guest
        terms === true //terms must be agreed to (checked box)
        );
    };


    //changing any data in the form - ask ChatGPT to break this down
    const changeFunc = (e) => {
        //destructuring the input values
        const {name, type, value, checked} = e.target;
        //updating the badgeInfo
        setBadgeInfo(prevBadgeInfo => {
            //keep all existing values from previous state
            return{
                ...prevBadgeInfo,
                //if checkbox, use the boolean, if not use the input value
                [name]: type === "checkbox" ? checked : value
            }
        })

    }


    const submitFunc = function(e){
        e.preventDefault();
        // addBadgeInfo(badgeInfo) - if anything, addBadgeInfo should be a function of Badge
        console.log(badgeInfo)
        // //formValid check
        // if (!formValid()) {
        // console.log("Form is not valid.");
        // return;
        // }

        addBadge(badgeInfo);
        //clear input fields
        setBadgeInfo(initState)
    }


    return(
        <form className="formBox" onSubmit={submitFunc}>
            <input type="text" name="user" placeholder="username" value={badgeInfo.user} onChange={changeFunc}/>
            <input type="text" name="desc" placeholder="description" value={badgeInfo.desc} onChange={changeFunc}/>
            <input type="number" name="phone" placeholder="phone number" value={badgeInfo.phone} onChange={changeFunc}/>
            <div>
                <input type="radio" name="badgeType" placeholder="badge type" value="Employee" checked={badgeInfo.badgeType === "Employee"} onChange={changeFunc}/>Employee
                <input type="radio" name="badgeType" placeholder="badge type" value="Guest" checked={badgeInfo.badgeType === "Guest"} onChange={changeFunc}/>Guest
            </div>
            <input type="checkbox" name="terms" placeholder="Agree" value={badgeInfo.terms} onChange={changeFunc}/>Agree to Terms and Conditions
            <button type="submit" disabled={!formValid()}>Submit</button>
        </form>
    )
}