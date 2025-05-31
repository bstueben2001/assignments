function escape(){
    const keySearch = document.getElementById("keyButton")
    keySearch.addEventListener("click", () => console.log("You died. Don't put your hand in mysterious holes."))
    // if(putHandInHole = true){
    //  console.log("You died. Don't put your hand in mysterious holes.")
    // } else {
    //     console.log("The door is open. You're free!")
    // }
}

const mysHole = document.getElementById("mysButton")
mysHole.addEventListener("click", function() {
    console.log("You died. Don't put your hand in mysterious holes. That means you Charlie.")
})

let keyInPossession = false
const keySearch = document.getElementById("keyButton")
keySearch.addEventListener("click", function() {
    keyInPossession = true
    console.log("You found a key!")
})

const openDoor = document.getElementById("openButton")
openDoor.addEventListener("click", function() {
    if(keyInPossession){
        console.log("The key unlocks the door. You're free! Good job not putting your hand in mysterious holes!")
    } else {
        console.log("It's locked...")
    }
})



