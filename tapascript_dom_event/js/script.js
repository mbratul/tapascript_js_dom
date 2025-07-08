/* JavaScript Goes Here */

// Event Handling in Markup
function handleClick(greeting) {
  console.log(`button click with a message ${greeting}`);
}

// Event Handling in Script
let myBtn2Elem = document.querySelector("#myBtn2");
myBtn2Elem.onclick = function () {
  console.log(`my button 2 click by me`);
};

let countButtonElem = document.querySelector("#countButton");

let counter = 0;
let handleCount = function () {
  console.log("Counter", counter);
  counter++;
};
let greetMe = function () {
  console.log("Thank you", counter);
  counter++;
};
// countButtonElem.addEventListener("click", function () {
//   console.log("counter", counter);
//   counter++;
// });
countButtonElem.addEventListener("click", handleCount); // add event listener
countButtonElem.addEventListener("click", greetMe);
/* countButtonElem.removeEventListener("click", function () {
  console.log("counter", counter);
  counter++;
}); */
countButtonElem.removeEventListener("click", handleCount); //remove event listener

document.addEventListener("DOMContentLoaded", function () {
  console.log("dom content loaded");
});

//Event Object
let searchElem = document.querySelector("#searchInput");

function handleChange(event) {
  console.log(event);
  console.log("Target", event.target);
  console.log("Target Name", event.target.name);
  console.log("Target Value", event.target.value);
  console.log("Event Type", event.type);
  console.log("Current Target", event.currentTarget);
  console.log("this :", this);

  searchElem.value = " ";
}
searchElem.addEventListener("change", handleChange);
