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
countButtonElem.addEventListener("click", function () {
  console.log("counter", counter);
  counter++;
});
