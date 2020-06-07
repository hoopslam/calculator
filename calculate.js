let currentValue = "";
let pastValue = "";
let operator = undefined;
let numButtons = document.querySelectorAll(".number");

////////// Display Functions //////////

function displayCurrent(num) {
  document.getElementById("current").innerText = formatNumber(num);
}

function displayPast(num) {
  document.getElementById("past").innerText = formatNumber(num);
}

//Append pressed number onto current display
function setCurrent(num) {
  if (currentValue.length > 16) {
    //max display value must be less than 17 digits
    return;
  }
  console.log(currentValue.length);
  currentValue += num;
  displayCurrent(currentValue);
}

///////// Formatters ///////////

//formats number to formatted string
function formatNumber(num) {
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}

//String to number formatter
function reverseFormatNumber(stringNum) {
  return Number(stringNum.replace(/,/g, "")); //use regex to remove commas and return num
}

////////// Button Functions //////////

//Detecting Number Press
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", function () {
    setCurrent(numButtons[i].innerText);
  });
}

//delete button
document.getElementById("del").addEventListener("click", function () {
  currentValue = currentValue.slice(0, currentValue.length - 1);
  displayCurrent(currentValue);
});

//Clear button
document.getElementById("clear").addEventListener("click", function () {
  currentValue = 0;
  pastValue = 0;
  displayCurrent(currentValue);
  displayPast(pastValue);
});

//Equals button

////////// Operand Functions //////////

function division(current, past) {
  currentValue = past / current;
}

displayCurrent(currentValue);
displayPast(pastValue);
