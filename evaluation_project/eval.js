
const b1 = document.getElementById("b1")

b1.addEventListener("click",changeHeader)

function changeHeader() {
    document.querySelector("#header").textContent= "Nice to meet you!" 
}





const b2 = document.getElementById("b2")

const Posts = [
    { username: "Chandler", textContent: "Lorem ipsum", date: "01/16/2023"},
    { username: "Jaydin", textContent: "Lorem ipsum", date: "10/17/2024"},
    { username: "Daniela", textContent: "Lorem ipsum", date: "04/28/2019"}
]

b2.addEventListener("click",blogPostObjects)

function blogPostObjects() {
    for(let i = 0; i < Posts.length; i++)
        console.log(Posts[i]), 
        alert(Posts[i].username)
}






const b3 = document.getElementById("b3");

b3.addEventListener("click",toggleDarkMode)

function toggleDarkMode(){
    if(document.body.classList.contains("darkMode")) {
    document.body.classList.remove("darkMode");
    } else {
    document.body.classList.add("darkMode");
    }
    if(document.body.classList.contains("darkModeHeader")) {
        document.body.classList.remove("darkModeHeader");
        } else {
        document.body.classList.add("darkModeHeader");
        }
}
