let colorPicker = document.getElementById("color-picker");
let colorSwatch = document.getElementById("color-swatch");
let startButton = document.getElementById("start-button");

colorPicker.addEventListener("change", () => {
  colorSwatch.style.backgroundColor = colorPicker.value;
})

startButton.addEventListener("click", () => {
  colorSwatch.style.animationPlayState = "running";
})