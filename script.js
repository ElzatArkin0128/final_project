var checkbox = document.querySelector("#checkbox");
var burgerBread = document.querySelectorAll(".burger-bar");
var menu = document.querySelectorAll(".moob");

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        cross();
    } else {
        uncross();
    }
});

function cross() {
    burgerBread[0].style.transform = "rotate(45deg) translate(12px, 16px)";
    burgerBread[1].style.transform = "rotate(-45deg) translate(12px, -17px)";
    menu[0].style.visibility = "hidden";
}

function uncross() {
    burgerBread[0].style.transform = "";
    burgerBread[1].style.transform = "";
    menu[0].style.visibility = "visible";
}
