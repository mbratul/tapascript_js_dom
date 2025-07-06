/*  Tapa Script Day -17 JavaScript DOM Example goes here  
    url: https://youtu.be/F4mVSaj6uls?si=4dDZybZFnp1eGvCw
*/
/* 
    DOM Types

    1. Document - Represents the entire page and it is the root node of the DOM tree.
        console.log(document);
    2. Node - A generic term for any elements in the DOM tree. Element Node, Text Node, Attribute Node.
    3. Element - A specific type of node that represents HTML tags/elements
    4. NodeList - An array of Nodes.
    5. Attr - represents the attribute of a node.
        // <img src="/" alt="some image" />
    6. NameNodeMap - A collection of Attr.

 */
// Accessing DOM

//By ID
let titleElem = document.getElementById("heading");
console.log(titleElem);

//By Class
let infoElem = document.getElementsByClassName("info");
console.log(infoElem);
[...infoElem].forEach((elem) => {
  console.log(elem);
});

//By tag Name
let pTagElems = document.getElementsByName("p");
console.log(pTagElems);

// Selector 1. Query Selector 2. Query Selector All
// 1. Query Selector - querySelector()
let paraElem = document.querySelector("p.info"); // return 1st matched element
console.log("using query selector", paraElem);

let getIdElem = document.querySelector("#heading"); // use # sign in querySelector for select any id
console.log("select id using query selector all", getIdElem);

// 2. Query Selector All - querySelectorAll()
let allParaElem = document.querySelectorAll("p.info"); // querySelectorAll returns a node list
console.log("using query selector all", allParaElem);

let getIdAllElem = document.querySelectorAll("#heading"); // use # sign in querySelectorAll for select any id
console.log("select id using query selector all", getIdAllElem);

// DOM Access Methods:

// 1. getElementById(id)
// 2. getElementsByClassName(className)
// 3. getElementsByTagName(tagName)
// 4. querySelector(cssSelector) return 1st matching element
// 5. querySelectorAll(cssSelector) return a Node List

function highlight() {
  console.log("i am highlighted text..");

  let pInfoElem = document.querySelectorAll("p.info");
  pInfoElem.forEach((element) => {
    element.style.backgroundColor = "yellow";
    console.log(element.style);
  });
}

function filterList() {
  let inputElem = document.getElementById("searchInput");
  let inputValue = inputElem.value;

  let itemListElem = document.querySelectorAll("ul#itemList li");
  itemListElem.forEach((item) => {
    /* item.style.backgroundColor = item.innerText
      .toLowerCase()
      .includes(inputValue.toLowerCase())
      ? "green"
      : ""; */
    item.style.display = item.innerText
      .toLowerCase()
      .includes(inputValue.toLowerCase())
      ? "block"
      : "none";
  });
}

/* 
  Tapa Script Day-18 DOM Manipulation  
  url: https://youtu.be/BoYgn_Mf0hA?si=LsEWltFQWHHSMrPv
*/

// - Creating Elements
// - Inserting Elements
// - Modifying Content
// - Removing/replacing Elements
// - Read, Write, and Remove Attributes
// - Travarsing/Navigating DOM
// - Mnaipulating Styles
// - Manipulating Classes
// - Controlling Visibilities
// - Build Project(s)

// - Creating Elements
let pElem = document.createElement("p");
pElem.innerText = "This is a text added Dynamically";
document.body.appendChild(pElem);
console.log(pElem);

// - Inserting Elements
let spanElem = document.createElement("span");
spanElem.innerText = "i am a span added dynamically";
let pElem1 = document.querySelector("p.day18");
document.body.insertBefore(spanElem, pElem1);
console.log(spanElem);

// - Modifying Content
{
  let pElem = document.querySelector("p.day18");
  pElem.innerHTML = "<u>hello developer</u> how are you?";

  let divElem = document.querySelector("div");
  console.log("inner text", divElem.innerText);
  console.log("text content", divElem.textContent);
}

// - Removing/replacing Elements
{
  let ulListElem = document.querySelector("ul#day18List");
  //let liRemoveElem = ulListElem.children[0];
  //ulListElem.removeChild(liRemoveElem);
  replaceByParaElem = document.querySelector("p");
  ulListElem.replaceChildren(replaceByParaElem);

  document.getElementById("removeMe").remove(); //remove all elements of an html tag
  //console.log(ulListElem);
}

// - Read, Write, and Remove Attributes
{
  let imageElem = document.querySelector("img");
  imageElem.setAttribute("src", "./images/banner.jpg");
  imageElem.setAttribute("alt", "banner");

  imageElem.removeAttribute("width");
  imageElem.hasAttribute("src");
  console.log(
    "width attribute of image element is",
    imageElem.hasAttribute("width")
  );

  console.log(imageElem);
}

// - Travarsing/Navigating DOM
{
  //parent element and parent node
  childSpanElem = document.querySelector("#child");
  // find parent element
  console.log("parent element", childSpanElem.parentElement.parentElement);
  console.log("parent node", childSpanElem.parentNode.parentNode);

  // child element or child node
  grandparentElem = document.querySelector("#grandparent");
  console.log("child element", grandparentElem.children);
  console.log("child node", grandparentElem.childNodes);

  //first element and element child
  console.log("first child element", grandparentElem.firstChild);
  console.log("first child node", grandparentElem.firstElementChild);
}
