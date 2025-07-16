const femImgs = ["assets/fem1.png", "assets/calcinha280.jpg"];
const mascImgs = ["assets/masc1.png", "assets/cueca1130.webp"];
let index = 0;

setInterval(() => {
  index = (index + 1) % femImgs.length;
  document.getElementById("img-fem").src = femImgs[index];
  document.getElementById("img-masc").src = mascImgs[index];
}, 3000);
