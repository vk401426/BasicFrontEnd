let card = document.querySelector(".card");
let body = document.querySelector("body");
let topp = document.querySelector(".top");
let i = 0;
let j = 1;

window.addEventListener("wheel", (e) => {
  scOp = e.wheelDeltaY;
  if (scOp > 0) {
    console.log("Scroll up");
    i--;
  } else {
    console.log("scroll down");
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
});
body.addEventListener("mouseenter", () => {
  if (i < 1) {
    topp.style.backgroundColor = "#ffb3c1";
    topp.style.zIndex = -1;
    topp.style.transform = "rotateX(180deg) translateY(60%)";
    topp.style.transitionDelay = "0s";
    card.style.transitionDelay = ".61s";
    card.style.height = "300px";
    card.style.transform = "translateY(-50%)";
  }
});

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
