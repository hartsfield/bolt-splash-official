{{ define "scroll.js"}}
function scrollHandler() {
    if (window.scrollY < window.innerHeight) {
        homeDiv = document.getElementById("logo-overlay");
        homeDiv.style.opacity = (100 - (window.scrollY/6)) / 100;
    }
}

window.addEventListener('scroll', scrollHandler);

window.onload = () => {
    if (window.scrollY > window.innerHeight/2) {
        homeDiv = document.getElementById("logo-overlay");
        homeDiv.style.opacity = 0;
    }
};

{{end}}
