let card = document.querySelector(".card");
let body = document.querySelector("body");
let topp = document.querySelector(".top");
let alrt = document.querySelector(".main-alert")
let i = 0;
let j = 1;
let startY = 0;
let currentY = 0;
let isTouching = false;


//Function to check display orientation 
const isPortrait = window.matchMedia('(orientation: portrait)').matches;
console.log(isPortrait); // Returns `true` if in portrait mode, `false` if in landscape mode
if(isPortrait){
  alrt.style.display='flex'
  fbtn.style.display='none'
}
else{
  alrt.style.display='none'
  fbtn.style.display='flex'
  document.querySelector(".main").style.display='none'
}


// Function to handle animations
function handleScroll(scOp) {
  if (scOp > 0) {
    console.log("Scroll up");
    i--;
  } else {
    console.log("Scroll down");
    i++;
  }
  console.log(i);
  sc = i;
  if (sc > 0 && sc <= 8) {
    card.style.transform = `translateY(${-sc * 19}%)`;
    card.style.transition = ".61s ease";
    card.style.zIndex = 0;
    card.style.height = "300px";
    console.log(-sc * 19);
    j = sc;
  } else if (sc > 8 && sc <= 16) {
    card.style.transform = `translateY(${-(j - (sc - j)) * 19}%)`;
    card.style.transition = ".61s ease";
    card.style.zIndex = 5;
    card.style.height = "200px";
    console.log(-(j - (sc - j)) * 19);
  } else if (sc == 19 || sc == 23) {
    card.style.transform = `scale(${sc / 5})`;
    card.style.transition = "3s ease";
    console.log("scaling : ", sc);
  }
}

// Scroll event listener
window.addEventListener("wheel", (e) => {
  handleScroll(e.wheelDeltaY);
});

// Mouse events
envOpen= function () {
  if (i < 1) {
    topp.style.backgroundColor = "#ffb3c1";
    topp.style.zIndex = -1;
    topp.style.transform = "rotateX(180deg) translateY(60%)";
    topp.style.transitionDelay = "0s";
    card.style.transitionDelay = ".61s";
    card.style.height = "300px";
    card.style.transform = "translateY(-50%)";
  }
}
// body.addEventListener("mouseenter", () => {envOpen});
body.addEventListener("mouseleave", () => {
  if (i < 19) {
    console.log("mouse leave triggered i=", i);
    topp.style.backgroundColor = "#e2546e";
    topp.style.zIndex = 3;
    topp.style.transform = "translateY(-40%)";
    topp.style.transitionDelay = "1.81s";
    card.style.zIndex = 0;
    card.style.height = "200px";
    card.style.transform = "translateY(10%)";
    i = 0;
  }
});

// Touch events
body.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
  isTouching = true;
});

body.addEventListener("touchmove", (e) => {
  if (!isTouching) return;
  currentY = e.touches[0].clientY;
  let deltaY = startY - currentY;
  if (deltaY !== 0) {
    handleScroll(-deltaY);
    startY = currentY; // Update start position for next move
  }
});

body.addEventListener("touchend", () => {
  isTouching = false;
});



//ff
let fullscreenButton = document.getElementById('fbtn');

fullscreenButton.addEventListener('click', () => {
  fbtn.style.display='none'
  document.querySelector(".main").style.display='flex'
  
  if (document.fullscreenElement) {
    // Exit full-screen mode
    console.log("Exit full screen ")
    document.exitFullscreen();
  } else {
    console.log(" full screen ")
    // Enter full-screen mode
    document.documentElement.requestFullscreen();
  }
  setTimeout(envOpen,500)
  
});
