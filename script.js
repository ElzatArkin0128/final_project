var body = document.querySelector("body");
var checkbox = document.querySelector("#checkbox");
var burgers = document.querySelectorAll(".burger-bar");
var menu = document.querySelectorAll(".moob");
var reloadLinks = document.querySelectorAll(".reload");

window.addEventListener("resize", () => {
    if (window.innerWidth > 730) {
        body.style.overflowY = "scroll";
    } else if (checkbox.checked) {
        body.style.overflowY = "hidden";
    }
});

checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        crossBurger();
        $('main').addClass("fix-pos");
        $('footer').addClass("fix-pos");
    } else {
        uncrossBurger();
        $('main').removeClass("fix-pos");
        $('footer').removeClass("fix-pos");
    }
});

for (var i = 0; i < reloadLinks.length; i++) {
    reloadLinks[i].addEventListener("click", () => {
        checkbox.checked = false;
        uncrossBurger();
    });
}

function crossBurger() {
    body.style.overflowY = "hidden";
    burgers[0].style.transform = "rotate(45deg) translate(12px, 16px)";
    burgers[1].style.transform = "rotate(-45deg) translate(12px, -16px)";
    menu[0].style.visibility = "hidden";
}

function uncrossBurger() {
    body.style.overflowY = "scroll";
    burgers[0].style.transform = "";
    burgers[1].style.transform = "";
    menu[0].style.visibility = "visible";
}
