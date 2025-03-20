const menuPage = document.getElementById("menuContents");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");

menuOpen.addEventListener("click", function(){
    menuPage.style.height = "290px";
    menuPage.style.width = "200px";
    menuOpen.style.zIndex = "-10";
    menuClose.style.zIndex = "0";

    menuPage.style.transition = "0.4s";

    
})

menuClose.addEventListener("click", function(){
    menuPage.style.height = "0px";
    menuPage.style.width = "0px";
    menuOpen.style.zIndex = "0";
    menuClose.style.zIndex = "-10";

    menuPage.style.transition = "0.4s";

    
})