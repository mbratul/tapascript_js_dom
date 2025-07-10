let faq = document.querySelector(".faq");
// console.log(faq);
//add event listener
faq.addEventListener("click", function (e) {
  if (e.target.classList.contains("question")) {
    e.stopPropagation();

    let currentItem = e.target.parentElement;
    let currentAnswer = currentItem.querySelector(".answer");
    currentAnswer.classList.toggle("show");
  }

  //console.log(currentAnswer);
});

document.addEventListener("click", function () {
  allAnswer = document.querySelectorAll(".answer.show");
  allAnswer.forEach((answer) => answer.classList.remove("show"));
});
