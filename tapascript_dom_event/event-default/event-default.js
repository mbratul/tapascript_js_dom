document.querySelector("#websiteLink").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("default behavior eliminated");
});
userIDElem = document.querySelector("#userID");
userPassElem = document.querySelector("#userPass");
document.querySelector("#loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e, "default behavior prevented");

  userID.value = " ";
  userPassElem.value = " ";
});
