
var colorChanger = document.getElementById("djBoxJS")



colorChanger.addEventListener("mouseover",blue)
colorChanger.addEventListener("mousedown",red)
colorChanger.addEventListener("mouseup",yellow)
colorChanger.addEventListener("dblclick",green)
colorChanger.addEventListener("wheel",orange)

function blue() {
    colorChanger.style.backgroundColor = "blue"
}
function red() {
    colorChanger.style.backgroundColor = "red"
}
function yellow() {
    colorChanger.style.backgroundColor = "yellow"
}
function green() {
    colorChanger.style.backgroundColor = "green"
}
function orange() {
    colorChanger.style.backgroundColor = "orange"
}

document.addEventListener('keydown', (event) => {
    console.log('Key Pressed: ', event.key);
    console.log('Key code: ', event.code);

    if(event.key === 'b') {
        blue();
     } else {
        if(event.key === 'r') {
            red();
     } else {
        if(event.key === 'y') {
            yellow();
     } else {
        if(event.key === 'g') {
            green();
     } else {
        if(event.key === 'o') {
            orange();
     }
  }}}}});
