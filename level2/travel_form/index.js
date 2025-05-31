const form = document.forms["travelForm"]

let restrictionArray = []

const submit = document.addEventListener("submit", function(e){
    e.preventDefault();
    for(let i = 0; i < form["dietary"].length; i++){
        if(form["dietary"][i].checked){
        restrictionArray.push(form["dietary"][i].value)
        }
    }
        let person = {
            firstName: form["firstName"].value,
            lastName: form["lastName"].value,
            age: form["age"].value,
            gender: form["gender"].value,
            destination: form["dest"].value,
            diet: restrictionArray
        }
        // console.log(person)
        alert(JSON.stringify(person, null, 2))
    }
)
