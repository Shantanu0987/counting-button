let number = document.getElementById("count");
let button = document.getElementById("button");
let count = 0;

button.addEventListener("click", function () {
  count += 1;
  number.innerHTML = "Clicked " + count + " time";
});
