var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

const alphabetArr = alphabet.split("")

function forception(people, alphabetArr){
    const finalArr = []
    for(let i = 0; i < people.length; i++){
        finalArr.push(people[i])
        for(let j = 0; j < alphabetArr.length; j++){
            finalArr.push(alphabetArr[j])
        }

    }
    console.log(finalArr)
}

console.log(forception(people, alphabetArr))