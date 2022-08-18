// ------------Dark mode fnc-----------------//

function darkMode() {
    let element = document.body;
    element.style.backgroundImage=NaN;
}

var nav = document.getElementById('navlist');

//----------------toggling Navbar--------------------------- 

function toggleNav() {

    if (nav.style.display === "")
        nav.style.display = "block";

    else
        nav.style.display = "";
}


function windowResizeHandler() {
    if (screen.width > 500)
        nav.style.display = "";
}

window.addEventListener("resize", windowResizeHandler);
