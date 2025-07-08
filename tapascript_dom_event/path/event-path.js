console.log("Event Bubbling, Capturing, and Delegation");
// url:https://javascript.info/bubbling-and-capturing
// by Default Capture phase is disabled and byDefault Bubbling Phase is Enabled
//capturing
//In event capturing, the event flows from the outermost ancestor down to the target element before the actual target handles it.

let grandparentElemCapture = document
  .querySelector("#grandparent")
  .addEventListener(
    "click",
    function () {
      console.log("Capture grand parent clicked");
    },
    true // capture phase
  );
let parentElemCapture = document.querySelector("#parent").addEventListener(
  "click",
  function () {
    console.log("Capture parent clicked");
  },
  true // capture phase
);
let childElemCapture = document.querySelector("#child").addEventListener(
  "click",
  function () {
    console.log("Capture child clicked");
  },
  true // capture phase
);

// in event bubbling, the event starts from from target element and bubbles up through its ancestors
// the flow is : Child > Parent > Grand Parent > document

let grandparentElemBubble = document
  .querySelector("#grandparent")
  .addEventListener("click", function () {
    console.log("grand parent clicked");
  });
let parentElemBubble = document
  .querySelector("#parent")
  .addEventListener("click", function () {
    console.log("parent clicked");
  });
let childElemBubble = document
  .querySelector("#child")
  .addEventListener("click", function () {
    console.log("child clicked");
  });

// Event Delegation - it is a technique where you add a single event listener to a parent element instead of each child. It uses event bubbling to handle events from dynamically added or existing child elements.

document.querySelector("#itemList").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(`you clicked on ${event.target.textContent}`);
  }
});
