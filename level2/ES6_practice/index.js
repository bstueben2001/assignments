// const manName = "John"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", manName)
//     return petObjects
// }

// runForLoop(["cat", "dog"])



// // 1.
// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot => ({ type: "carrot", name: carrot }))
// }
// console.log(mapVegetables(carrots))



// // 2.
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => (person.friendly))
// }
// console.log(filterForFriendly(people))



// // 3.
// const doMathSum = (a, b) => a + b;
// console.log(doMathSum(5,3));

// let produceProduct = (a, b) => a * b;
// console.log(produceProduct(8,11))



// // 4.
// let printString = (firstName,lastName,age) => "Hi " + firstName + " " + lastName + ", how does it feel to be " + age + "?"

// console.log(printString("Jane","Doe","100"))



// // 5.
// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  function filterForDogs(arr) {return arr.filter(animal => animal.type === "dog")}
//  console.log(filterForDogs(animals))


// 4.5.
let printString = (firstName,lastName,age) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
    
// "Hi " + firstName + " " + lastName + ", how does it feel to be " + age + "?"

console.log(printString("Jane","Doe","100"))

