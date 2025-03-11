const navButton = document.getElementById("navButton");
const navPage = document.getElementById("navPage");
const navClose = document.getElementById("navClose");
const enterButton = document.getElementById("enterButton");
const footerCont = document.getElementById("startDescription");
const headerCont = document.getElementById("headerCont");
const panorama = document.getElementById("panorama");
const restartButton = document.getElementById("restartButton");


navButton.addEventListener("click", function() {
    navPage.style.width = "200px";
    this.style.marginRight = "-10px";
    this.style.transition = "0.5s";
    navClose.style.right = "-10px";
    navClose.style.transition = "0.4s";
    restartButton.style.right = "200px";
    restartButton.style.transition = "0.4s";
})

navClose.addEventListener("click", function() {
    navPage.style.width = "0px";
    navButton.style.marginRight = "0px";
    navButton.style.transition = "0.5s";
    this.style.right = "-50px";
    this.style.transition = "0.4s";
    restartButton.style.right = "50px";
    restartButton.style.transition = "0.4s";
})


enterButton.addEventListener("click", function() {
    footerCont.style.marginBottom = "-200px";
    footerCont.style.transition = "1s";
    headerCont.style.marginTop = "-200px";
    headerCont.style.transition = "1s";
    panorama.style.marginTop = "0px";
    panorama.style.transition = "1s";
})

restartButton.addEventListener("click", function() {
    footerCont.style.marginBottom = "0px";
    footerCont.style.transition = "1s";
    headerCont.style.marginTop = "0px";
    headerCont.style.transition = "1s";
    panorama.style.marginTop = "-1000px";
    panorama.style.transition = "1s";

    navPage.style.width = "0px";
    navButton.style.marginRight = "0px";
    navButton.style.transition = "0.5s";
    this.style.right = "-50px";
    this.style.transition = "0.4s";
    restartButton.style.right = "50px";
    restartButton.style.transition = "0.4s";
    navClose.style.right = "-50px";
    navClose.style.transition = "0.4s";
    
    let currentRotation = 0; // Initialize or get current rotation if needed
    if (this.style.transform) {
      const match = this.style.transform.match(/rotate\(([-\d.]+)deg\)/);
      if (match) {
        currentRotation = parseFloat(match[1]);
      }
    }
  
    currentRotation += 360; // Rotate 360 degrees (one full rotation)
    this.style.transform = `rotate(${currentRotation}deg)`;
})


