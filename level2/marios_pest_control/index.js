const form = document["marioForm"]

const submitButton = form.submitButton
submitButton.addEventListener("click", function(e){
    e.preventDefault()

    calculator()
})

const enemyArray = [
    {name: "goomba", cost: 5},
    {name: "bob-omb", cost: 7},
    {name: "cheep-cheep", cost: 11}
]

function calculator(){

    const num1 = form.goomba.value
    const num2 = enemyArray[0].cost
    const cost1 = costMultiplier(num1,num2)
    const num3 = form["bob-omb"].value
    const num4 = enemyArray[1].cost
    const cost2 = costMultiplier(num3,num4)
    const num5 = form["cheep-cheep"].value
    const num6 = enemyArray[2].cost
    const cost3 = costMultiplier(num5,num6)
    const grandTotal = cost1 + cost2 + cost3
    const totalCost = document.getElementById("totalCost")
    totalCost.textContent = "Total Cost: "
    totalCost.append(grandTotal)
}

function costMultiplier(num1, num2) {
    const cost = num1 * num2
    return cost
}

//PSUEDOCODE
//     if(form.name === 'goomba'){
//     let num1 = form.goomba.value;  //save input.value in a var (num1)
//     console.log(num1);
//     let num2 = enemyArray[0].cost;   //callback to enemyArray, pull enemyArray.cost  +  //save enemyArray.cost in a var (num2)
//     console.log(num2);
//     let cost = costMultiplier(num1, num2)
//     console.log(cost)
//     const totalCost = document.getElementById("totalCost")
//     totalCost.append(cost)
//     } else if (form.name === 'bob-omb') {
//         let num3 = form['bob-omb'].value;  //save input.value in a var (num1)
//         console.log(num3);
//         let num4 = enemyArray[1].cost;   //callback to enemyArray, pull enemyArray.cost  +  //save enemyArray.cost in a var (num2)
//         console.log(num4);
//         let cost = costMultiplier(num3, num4)
//         console.log(cost)
//         const totalCost = document.getElementById("totalCost")
//         totalCost.append(cost)
//     } else {
//         let num5 = form['cheep-cheep'].value;  //save input.value in a var (num1)
//         console.log(num5);
//         let num6 = enemyArray[2].cost;   //callback to enemyArray, pull enemyArray.cost  +  //save enemyArray.cost in a var (num2)
//         console.log(num6);
//         let cost = costMultiplier(num5, num6)
//         console.log(cost)
//         const totalCost = document.getElementById("totalCost")
//         totalCost.append(cost)
//     }
// }

