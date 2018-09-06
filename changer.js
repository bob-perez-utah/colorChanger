var button = document.querySelector("button");
// var isPurple = false;

button.addEventListener("click", changeColor);

// function changeColor() {
//     if (isPurple) {
//         document.body.style.background = "white";
//         isPurple = false;
//     } else {
//         document.body.style.background = "purple";
//         isPurple = true;
//     }

// }

function changeColor() {
    document.body.classList.toggle("purple");
}