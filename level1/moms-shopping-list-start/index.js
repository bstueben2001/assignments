const form = document.addItem

const anchor = document.getElementById("list")

    form.addEventListener("submit",function(event){
        event.preventDefault()
        const itemName = form.title.value
        form.title.value = ""

        let newLi = document.createElement("li")
            // newLi.style.disply = "flex"
            // newLi.style.flexDirection = "column"
            // newLi.style.listStyleType = "none"
            // newLi.style.margin = "10px"

            let item = document.createElement("p")
                item.innerHTML = itemName
                // item.classList.add("li")
                item.style.marginBottom = "10px"
                item.style.textAlign = "center"

            let editButton = document.createElement("button")
                editButton.innerHTML = "edit"
                    editButton.addEventListener("click",function(){
                        console.log("Edit button responding")
                        const origText = item.innerHTML                         //saves original text
                        item.innerHTML = ""                                     //clears original text from span
                        const inputBox = document.createElement("input")        //creates input box
                        inputBox.value = origText                               //adds original text to inputBox
                    const saveButton = document.createElement("button")         //saveButton creation
                        // newLi.remove(editButton)
                        // newLi.remove(clearButton)
                        // newLi.append(saveButton)
                    saveButton.innerHTML = "Save"                               //text label
                    saveButton.addEventListener("click",function(){             //saveButton function
                        item.innerHTML = inputBox.value                         //takes whatever is in the updated text and applies it to item.innerHTML content
                        // newLi.append(editButton)
                        // newLi.append(clearButton)
                        // newLi.remove(saveButton)
                    })
                })
                

            let clearButton = document.createElement("button")
                clearButton.innerHTML = "X"
                clearButton.addEventListener("click",function(){
                    console.log("X button responding")
                    newLi.remove()
                    })

        newLi.append(item)
        newLi.append(editButton)
        newLi.append(clearButton)

        anchor.appendChild(newLi)
    })

const oldClearButtons = document.querySelectorAll(".button2")
oldClearButtons.forEach(button => {
    button.addEventListener("click", function(){
        const li = button.closest("li")
        li.remove()
        })
})

const oldEditButtons = document.querySelectorAll(".button1")
oldEditButtons.forEach(button => {
    button.addEventListener("click", function(){
        console.log("Old edits responding")
        //replace text with input field + save button
        })
})
