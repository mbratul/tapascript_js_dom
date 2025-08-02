// Step 1 : Create a Custom Event
let myEvent = new CustomEvent("userLoggedIn", {
  detail: {
    username: "tapascript",
    role: "admin",
  },
});

// Step 2 : Listen to the Custom Event
document.addEventListener("userLoggedIn", (e) => {
  console.log(`user logged in ${e.detail.username}`);
});

// Step 3 : Dispatching the Custom Event
document.dispatchEvent(myEvent);

function loginUser(username) {
  let event = new CustomEvent("userLoggedIn", {
    detail: { username },
  });

  document.dispatchEvent(event);
}

document.addEventListener("userLoggedIn", (e) => {
  let user = e.detail.username;
  document.getElementById("welcome").textContent = `Welcome ${user}`;
});
