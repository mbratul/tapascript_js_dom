/* JavaScript DOM Example goes here  */
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
  //console.log(itemListElem);
}
//filterList();
