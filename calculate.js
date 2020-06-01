let currentValue = 0;
let pastValue = 0;
let numButtons = document.querySelectorAll(".number");

//Detecting Number Press
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", function () {
    setCurrent(numButtons[i].innerText);
    console.log(numButtons[i].innerText);
  });
}

function setCurrent(num) {
  currentValue += num;
  displayCurrent(currentValue);
}

function displayCurrent(num) {
  document.getElementById("current").innerText = formattedNumber(num);
}

function displayPast(num) {
  document.getElementById("past").innerText = formattedNumber(num);
}

document.getElementById("clear").addEventListener("click", function () {
  currentValue = 0;
  pastValue = 0;
  displayCurrent(currentValue);
  displayPast(pastValue);
});

//formats numbers to include commas where needed for easier readability
function formattedNumber(num) {
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}

displayCurrent(currentValue);
displayPast(pastValue);
