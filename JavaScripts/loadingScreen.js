const loadingScreen = document.getElementById("loadingScreen");

window.onload = function() {
    loadingScreen.style.opacity = "0%";
    loadingScreen.style.pointerEvents = "none";
    loadingScreen.style.transition = "1s";
};