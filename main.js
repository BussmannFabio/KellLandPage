const femImgs = ["assets/fem1.png", "assets/calcinha280.jpg", "assets/760calcinha.webp"];
const mascImgs = ["assets/masc1.png", "assets/cueca1130.webp", "assets/cueca1110.jpg"];
const mascImgsA = ["assets/1010cueca.webp","assets/cuecaslipper.webp","assets/1010cueca.webp"];
const femImgsA = ["assets/calcinhaadult3.webp", "assets/calcinhaadultmodelo.jpg", "assets/calcinhadult2.webp"];

let index = 0;

setInterval(() => {
  index = (index + 1) % femImgs.length;
  document.getElementById("img-fem").src = femImgs[index];
  document.getElementById("img-fem-a").src = femImgsA[index];
  document.getElementById("img-masc").src = mascImgs[index];
  document.getElementById("img-masc-a").src = mascImgsA[index];
}, 2400);
