var inputBox = document.getElementById("inputBox")

var b1 = document.getElementById("b1")

b1.addEventListener("click",logResult)

function logResult(){
    console.log(inputBox.value)
    document.createElement("p")
    document.body.innerHTML += "<p>" + (inputBox.value) + "</p>"
}
