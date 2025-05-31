// for(let i = 0; i <= 9; i++){
//     console.log([i])
// }

// for(let i = 9; i >= 0; i--){
//     console.log([i])
// }

// const fruit = ["banana", "orange", "apple", "kiwi"]

// for(let i = 0; i <= fruit.length; i++){
//     console.log(fruit[i])
// }


// Bronze 1.
let numbers = []

for (let i = 0; i < 10; i++) {
numbers.push(i) 
}
console.log(numbers)


// Bronze 2.
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

// Bronze 3. 
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

let oddFruit = []

for (let i = 0; i < fruit.length; i += 2) {
oddFruit.push(fruit[i])
} 
console.log(oddFruit)
