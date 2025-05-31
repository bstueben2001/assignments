const form = document.forms["calc"]


const subButton = document.getElementById("submitButton")
subButton.addEventListener("click", function(e) {
    e.preventDefault();
    const n1 = parseFloat(form["num1"].value)
    const n2 = parseFloat(form["num2"].value)
    let sum = addFunc(n1,n2)
    const answer = document.getElementById("answerSpan")
    answer.append(sum)
})


const subButton2 = document.getElementById("submitButton2")
subButton2.addEventListener("click", function(e) {
    e.preventDefault();
    const n3 = parseFloat(form["num3"].value)
    const n4 = parseFloat(form["num4"].value)
    let dif = subFunc(n3,n4)
    const answer2 = document.getElementById("answerSpan2")
    answer2.append(dif)
})


const subButton3 = document.getElementById("submitButton3")
subButton3.addEventListener("click", function(e) {
    e.preventDefault();
    const n5 = parseFloat(form["num5"].value)
    const n6 = parseFloat(form["num6"].value)
    let prod = mulFunc(n5,n6)
    const answer3 = document.getElementById("answerSpan3")
    answer3.append(prod)
})


function addFunc(n1,n2){
    return n1+n2;
}


function subFunc(n3,n4){
    return n3-n4;
}


function mulFunc(n5,n6){
    return n5*n6;
}


//PSEUDOCODE
    //addEventListener for submit
        //preventDefault()
    //access form
    //save num1
    //save num2
    //num1 + num2
    //return and append result onto 'answerSpan'


    // const form = document.forms["calc"]
    // const n1 = form["num1"]
    // console.log(n1)
