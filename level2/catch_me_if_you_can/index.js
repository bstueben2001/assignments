// function sum(x, y){
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw "invalid type"
//         }
//     // return x + y
//     console.log(x + y)
// }

// try{
//     sum(1,2)
// } catch(err) {
//     console.log(err)
// }



var user = {username: "sam", password: "123abc"};
var wrongUser = {username: "sam", password: "123abb"}

function login(username, password){
    try {
        if(username !== input1 || password !== input2){
            throw "Incorrect. Please re-enter username or password."
        } else {
            console.log("Login successful.")
        }
    } catch(err) {
        console.log(err)
    } finally {
        console.log("Thank you!")
    }
}

// let input1 = user.username
// let input2 = user.password
let input1 = wrongUser.username
let input2 = wrongUser.password

login(user.username, user.password)