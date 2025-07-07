/* JavaScript TO DO App */
console.log("Project To Do");

function addTask() {
  let taskInputElem = document.querySelector("#taskInput");
  let ultaskListElem = document.querySelector("#taskList");

  let task = taskInputElem.value;
  if (task.trim() == "") return;

  liElem = document.createElement("li");
  liElem.innerText = task;

  selectBtnElem = document.createElement("button");
  selectBtnElem.innerText = "Select";
  selectBtnElem.classList.add("buttonGap");
  selectBtnElem.onclick = function () {
    liElem.classList.toggle("completed");
  };

  liElem.appendChild(selectBtnElem);

  deleteBtnElem = document.createElement("button");
  deleteBtnElem.innerText = "Delete";
  deleteBtnElem.classList.add("buttonGap");
  deleteBtnElem.onclick = function () {
    liElem.remove();
  };

  liElem.appendChild(deleteBtnElem);

  ultaskListElem.appendChild(liElem);
  taskInputElem.value = " ";

  //console.log(ultaskListElem);
}
//addTask();

/* function deleteTask() {
  liElem.remove();
} */

function filterTasks() {
  let inputElem = document.querySelector("#searchInput");
  let inputValue = inputElem.value;

  let itemListElem = document.querySelectorAll("ul#taskList li");
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
