for(let i = 0; i <= 100; i++){
    // console.log(i)
if(i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz")
    } else if(i % 3 === 0) {
        console.log("fizz")
    } else if(i % 5 === 0) {
        console.log("buzz")
    } else {
        console.log(i)
    }
}

//tally function pseudocode

//const tallyObj = {}
//let fizzCount = count [i] if === "fizz"
//push or add fizzCount > tallyObj
//let buzzCount = count [i] if === "buzz"
//push or add buzzCount > tallyObj
//let fizzBuzzCount = count [i] if === "fizzbuzz"
//push or add fizzBuzzCount > tallyObj
//console.log(tallyObj)

function countIf() {
    const tallyObj = {
        fizz: 0,
        buzz: 0,
        fizzbuzz: 0
    }
    for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz")
        tallyObj.fizzbuzz++
        } else if(i % 3 === 0) {
            console.log("fizz")
            tallyObj.fizz++
        } else if(i % 5 === 0) {
            console.log("buzz")
            tallyObj.buzz++
        } else {
            console.log(i)
        }
    }
    return tallyObj
}
const count = countIf()
console.log(count)