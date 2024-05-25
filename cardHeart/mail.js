let card = document.querySelector(".card");
let body = document.querySelector("body");
let main = document.querySelector(".main");
let topp = document.querySelector(".top");
let alrt = document.querySelector(".main-alert")
let i = 0;
let j = 1;
let isOpen=false
let startY = 0;
let currentY = 0;
let isTouching = false;


//Function to check display orientation 


let handleOrientation = function (){
const isPortrait = window.matchMedia('(orientation: portrait)').matches;
console.log(isPortrait); // Returns `true` if in portrait mode, `false` if in landscape mode
if(isPortrait){
  alrt.style.display='flex'
  document.querySelector(".main").style.display='none'
  fbtn.style.display='none'
}
else{
  if(!document.fullscreenElement){
  alrt.style.display='none'
  fbtn.style.display='flex'
  document.querySelector(".main").style.display='none'
}}}
handleOrientation()
window.addEventListener('resize',handleOrientation);



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
  if(sc<0)
    envClose()
  else if(sc>=0&&sc<=3)
    {
      envOpen()
      card.style.height = "50%";
      card.style.transform = `translateY(55%)`;
    }
  if (sc>3&&sc <=8) {
    card.style.transform = `translateY(-55%)`;
    card.style.transition = ".61s ease";
    card.style.zIndex = 0;
    card.style.height = "65%";
    console.log(-sc * 19);
    j = sc;
  } else if (sc>8 && sc <=13) {
    // card.style.transform = `translateY(${-(j - (sc - j)) *5}%)`;
    card.style.transform = `translateY(55%)`
    card.style.transition = ".61s ease";
    card.style.zIndex = 5;
    card.style.height = " 55%";
    console.log(-(j - (sc - j)) * 19);
  } else if (sc == 15) {
    card.style.transform = `translateY(55%) scale(3.4)`;
    card.style.transition = "3s ease";
    console.log("scaling : ", sc);
  }
  else if(sc>16)
    i=16
}

// Scroll event listener
window.addEventListener("wheel", (e) => {
  handleScroll(e.wheelDeltaY);
});

// Mouse events
envOpen= function () {
  if (i <=3) {
    topp.style.backgroundColor = "#ffb3c1";
    topp.style.zIndex = -1;
    topp.style.transform = "rotateX(180deg) translateY(60%)";
    topp.style.transitionDelay = "0s";
    card.style.transitionDelay = ".61s";
    card.style.height = "50%";
    card.style.transform = "translateY(35%)";
  }
}

main.addEventListener('mouseenter',()=>{
  if(isOpen)
    envOpen()
});

main.addEventListener("mouseleave", () => {envClose});
  
  envClose= function (){
  if (i < 19) {
    console.log("mouse leave triggered i=", i);
    topp.style.backgroundColor = "#e2546e";
    topp.style.zIndex = 3;
    topp.style.transform = "translateY(-40%)";
    topp.style.transitionDelay = ".81s";
    card.style.zIndex = 0;
    card.style.height = "50%";
    card.style.transform = "translateY(90%)";
    i = 0;
  }
}

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
  isOpen=true;
  
});


