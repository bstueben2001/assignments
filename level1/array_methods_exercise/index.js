var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log(fruit)
console.log(vegetables)

// 1.
const poppedVeggies = vegetables.pop()
console.log(vegetables)

// 2.
const shiftFruit = fruit.shift()
console.log(fruit)

//  3.
const indexOrange = fruit.indexOf("orange")
console.log(indexOrange)

//  4.
// const spliceFruit = fruit.splice(indexOrange, 1)
const pushFruit = fruit.push(indexOrange)
console.log(fruit)

//  5.
const lengthVeggies = vegetables.length
console.log(lengthVeggies)

//  6.
const addLengthVeggies = vegetables.push(lengthVeggies)
console.log(vegetables)

//  7.
const food = fruit.concat(vegetables)
console.log(food)

//  8.
const spliceFood = food.splice(4, 2)
console.log(food)

//  9.
const revFood = food.reverse()
console.log(revFood)

//  10.
const joinFood = food.join()
console.log(joinFood)










