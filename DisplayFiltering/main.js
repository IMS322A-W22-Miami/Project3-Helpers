let fishDivs = Array.from(document.getElementsByClassName("fish"));
let fishButton = document.getElementById("fish-button");

let fruitDivs = Array.from(document.getElementsByClassName("fruit"));
let fruitButton = document.getElementById("fruit-button");

let birdDivs = Array.from(document.getElementsByClassName("bird"));
let birdButton = document.getElementById("bird-button");

fishButton.addEventListener("click", () => {
  fishButton.classList.toggle("inactive");
  for (i in fishDivs) {
    fishDivs[i].classList.toggle("inactive");
  }
})

fruitButton.addEventListener("click", () => {
  fruitButton.classList.toggle("inactive");
  for (i in fruitDivs) {
    fruitDivs[i].classList.toggle("inactive");
  }
})

birdButton.addEventListener("click", () => {
  birdButton.classList.toggle("inactive");
  for (i in birdDivs) {
    birdDivs[i].classList.toggle("inactive");
  }
})