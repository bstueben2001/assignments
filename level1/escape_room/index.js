const readline = require("readline-sync");

let hasKey = false; //starting game without item in inventory

console.log("You're locked in a room with a mysterious hole, and a locked door. Just to clarify, the door is locked. Do you put your hand in the mysterious hole or do you search for a key?")

while(true) {
    console.log("What do you do?")
    console.log("1. Look for a key.")
    console.log("2. Put hand in mysterious hole.")
    console.log("3. Try the door.")

    const choice = readline.question("Enter your choice: ")

    if (choice === "1") {
        if (!hasKey) {
            hasKey = true;
            console.log("You found a key.")
        } else {
            console.log("You already have the key.")
        }
    } else if (choice === "2") {
        console.log("You died. Don't put your hand in mysterious holes. That means you Charlie.");
        break;
    } else if (choice === "3") {
        if (hasKey) {
            console.log("The key unlocks the door. You're free! Good job not putting your hand in mysterious holes!")
            break;
        } else {
            console.log("It's locked...")
        }
    } else {
        console.log("Wrong. Try option 1, 2, or 3.")
    }
}