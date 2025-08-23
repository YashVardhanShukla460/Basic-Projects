let height = document.getElementById("height");
let weight = document.getElementById("weight");
let button = document.getElementById("button");
let result = document.getElementById("result");
button.addEventListener("click", (event) => {
event.preventDefault();
  if (height.value === "" || weight.value === "") {
    result.innerHTML = "Please enter valid height and weight";
    return;
  }
  let h = parseFloat(height.value) / 100;
  let w = parseFloat(weight.value);
  if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
    result.innerHTML = "Please enter valid numeric values for height and weight";
    return;
  }
  result.innerHTML = `Your BMI is ${ (w / (h*h)).toFixed(2) }`;
});