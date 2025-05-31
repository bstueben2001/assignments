
let changeButton = document.getElementById("changeButton")
    changeButton.addEventListener("click",() => {
        changeTextContent('heading', 'Welcome to my website!');
        changeTextContent('paragraph', 'This is a sample paragraph.');
    })


function changeTextContent(elementId, newText) {
    // your code goes here
    document.getElementById(elementId).textContent = newText
   }
   
   // Test the function with different element IDs and new text content

   