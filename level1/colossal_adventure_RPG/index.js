const readline = require("readline-sync"); //activates readline-sync

console.log("Welcome to your adventure that may or may not be colossal, friend!"); //beginning dialogue

let playerName = readline.question("What do they call you? "); //setup game with playerName
console.log("Greetings, " + playerName + "...we have a quest for you..."); //setup game
console.log("..."); //spacing
// console.log("Press the 'W' key to walk towards your destiny..."); //setup game

let inventoryArray = []

let player = { //establishes player object
    name: playerName,
    hp: 50,
    living: true,
    inv: inventoryArray
}

const enemyArray = [ //establishes enemy objects
    {enemyName: "John Pork", enemyHP: 10, enemySpell: "Pork Chop"},
    {enemyName: "Chicken Jockey", enemyHP: 10, enemySpell: "Impossible hitbox"},
    {enemyName: "Zalgaron, the Father of Fear", enemyHP: 10, enemySpell: "Scorpion on your ankle in your best friend's basement back in 2020"}
]

const lootPool = ["A half of a ham and cheese sandwich", "Solace in the undeniable truth and inevitability of the universe's demise", "Larry"] //establishes loot pool

while(player.living && inventoryArray.length < 3) {
    console.log(inventoryArray.length, "inventory")
    if(inventoryArray.length < 3) { //how the game determines if player has won
            if(player.hp <= 0) { //if player is dead, set player.living status to 'dead' and show this message
                const continueResponse = readline.question("Do you want to continue? (y/n)").toLowerCase();
                if(continueResponse === "n") {
                    player.living = false
                    console.log("Thou art dead")
                    break;
                } else if(continueResponse === "y") { // All other game interactions start here       
                   gameplayLoop();
                } else {
                    console.log("Invalid response. Please choose between yes or no") //correction
                }
            } else {
                gameplayLoop();
            }
    } else { //final message
        console.log("You have gathered all of the loot. You have finished your quest, o' great champion!")
        break; //end loop and game
        // process.exit(0) instead, but when I can get it to work
    }
}

function damageFunc() {
    return Math.ceil(Math.random() * 5);
}

function fightFunc(){
    let enemy = randomizeEnemy()
    console.log("The Great " + enemy.enemyName + " appears for battle!")
    while(player.hp > 0 && enemy.enemyHP > 0) {
        const playerHit = damageFunc()
        enemy.enemyHP -= playerHit 
        console.log("You hit the " + enemy.enemyName + " for " + playerHit + " damage")
        console.log("The Great " + enemy.enemyName + " counter attacks.")
        player.hp -= damageFunc()
        console.log("You took a hit. Ouch. Your health is now at " + player.hp)
        if(enemy.enemyHP <= 0) {
            const lootItem = randomizeLoot() 
            inventoryArray.push(lootItem)
            console.log("You win! " + lootItem + " has been added to your inventory!")
        } else if(player.hp <= 0) {
            player.living = false
            console.log("Thou art dead")
            break;
        }
    }
}

function flightFunc(){
    const escape = randomizeEscape()
    if(escape === 1) {
        console.log("You escaped. Keep walking forward.")
    } else {
        console.log("The enemy caught you. Your fight begins...")
        fightFunc()
    }
}

function randomizeEncounter() {
    return Math.ceil(Math.random() * 3);
}

function randomizeEscape() {
    return Math.ceil(Math.random() * 2);
}

function randomizeEnemy(){
    return enemyArray[Math.floor(Math.random() * enemyArray.length)];
}

function randomizeLoot(){
    const loot = lootPool[Math.floor(Math.random() * lootPool.length)];
    lootPool.splice(lootPool.indexOf(loot),1)
    return loot
}

function gameplayLoop() {
    const answer = readline.question("Press [w] to walk or press [p] to see stats ")
        if(answer === 'p') { // Allows player to see their stats (the player object)
            console.log(player);
        } else if(answer === 'w') { //This is where interactions begin based on if the player decides to walk forward
            console.log("You begin walking...")
            const encounter = randomizeEncounter()
            if(encounter === 1) {
            const fightResponse = readline.question("An enemy appears, do you choose to fight or attempt an escape? fight/flight ").toLowerCase();
                if (fightResponse === "fight"){
                    fightFunc()
                } else if(fightResponse === "flight"){
                    flightFunc()
                } else {
                    console.log("Invalid response.")
                }
            } else {
                console.log("Keep walking.")
            }
        } else {
            console.log("Invalid response.")
        }
}

//PSEUDOCODE

    // const readline = require("readline-sync");

    // console.log("Welcome to your adventure that may or may not be colossal, friend!");

    // let playerName = readline.question("What do they call you?");
    // console.log("Greetings, " + playerName + "...we have a quest for you...");
    // console.log("...");
    // console.log("Press the 'W' key to walk towards your destiny...");

    //player needs to start with HP
    //add inventoryArray + make a while loop on inventoryArray that loops the game until 3 items are in inventory (array count === 3)
    //add enemyArray
    //add lootPool
    // 'p' key (eventListener) prints playerName + inventoryArray

//if 'w' key is pressed (eventListener) => random algorithm (a 1/3 chance) of attack() 
//if (enemy appears)
    //while(enemy is present){
        //if (enemy appears), {select an enemy from enemiesArray[ add enemy objects with names/HP]
            //console.log("The Great " + randomEnemyName + " appears for battle!")
            //console.log(1. Fight)
            //console.log(2. Flight)
            //const choice = readline.question("What ever shall you do, 1 or 2?")
                //if(choice == "1") {
                    //while(){
                        //if(enemy health is <= 0) {
                            //console.log("You defeated " + enemyName)
                            //push randomLoot to inventoryArray
                            //add HP                            
                        //} else if(playerName health is <= 0) {
                            //console.log("You died.")
                            //break
                            //}
                        //} else {
                        //keep playing (loop until one of conditionas are met)
                        //player attacks for random min/max damage (- enemyHP)
                        //then, enemy counter attacks random damage (- playerHP) 
                        //}
                    //}
                //} else if(choice === "2") {
                    //50% chance of escaping
                    //if escape, we good in da hood (keep walkin')
                    //} else {
                        // while() {
                            // enemy attacks (- playerHP)
                            // player counter attacks for random min/max damage (- enemyHP)
                        //}
        //} else {
        //  console.log("Please select 1 or 2")
        //}
//} else {
//console.log("Keep walkin'")
    //}
//}