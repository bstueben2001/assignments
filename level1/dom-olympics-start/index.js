
// var headerText = document.getElementById("header")

// headerText.innerHTML += "<header>JavaScript Made This!!</header>"
// headerText.innerHTML += "<span>Brendon</span><header>wrote the JavaScript</header>"
    // headerText.style.color = "orange"

    // var eraseButton = document.getElementById("#clear-button")

    // eraseButton.document.addEventListener("click",clear)

    // var messages = document.getElementsByClassName("#messages")

    // function clear() {
    //     messages.parentNode.removeChild(messages);
    // }

    // const themeOption = document.getElementById("theme-drop-down")
    // themeOption.addEventListener("change",function(event){
    //     const selectedOption = event.target.value
    //     const left = document.querySelectorAll("message left")
    //     const right = document.querySelectorAll("message right")
    //     if(selectedOption === "theme-one"){
    //         console.log("blue-brown, huzzah!")
    //         left.forEach(function(element){
    //             element.style.color = "blue"
    //         })
    //         right.forEach(function(element){
    //             element.style.color = "brown"
    //         })
    //     } else if(selectedOption === "theme-two"){
    //         console.log("red-black, hooray!")
    //         left.forEach(function(element){
    //             element.style.color = "red"
    //         })
    //         right.forEach(function(element){
    //             element.style.color = "black"
    //         })
    //     }
    // })


// Bronze
const header = document.getElementById("header")


header.textContent = "JavaScript wrote this"
const subText1 = document.createElement("span")
subText1.textContent = "Brendon"
subText1.style.color = "orange"
header.append(subText1)
const subText2 = document.createElement("p")
subText2.textContent = " wrote the JavaScript"
header.append(subText2)


// Silver pt.1


// Silver pt.2
const clrButton = document.getElementById("clear-button")
clrButton.addEventListener("click", function(){
    console.log("This listener is working")
    const texts = document.getElementsByClassName("messages")
    for(let text of texts) {
        text.textContent = ""
    }
    // Original attempt
    // for(let i = 0; i < texts.length; i++){
    //     texts.textContent = ""
    // }
})



