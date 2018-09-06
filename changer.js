var button = document.querySelector("button");
var isColored = false;

button.addEventListener("click", changeColor);

function changeColor() {
    if (isColored) {
        document.body.style.background = "white";
        isColored = false;
    } else {
        document.body.style.background = "purple";
        isColored = true;
    }

}