/* JavaScript Goes Here */
// Tapa Script DOM Quiz App
const quizDataElem = [
  {
    question: "What does DOM Stand for?",
    options: [
      "Document Order Model",
      "Document Object Model",
      "Data Object Method",
      "Direct Object Management",
    ],
    correct: 1,
  },

  {
    question: "Which method select by ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElement()",
      "getElementByClassName()",
    ],
    correct: 0,
  },
  {
    question: "Which event fire on input change?",
    options: ["click", "submit", "change", "keydown"],
    correct: 2,
  },
];

let questions = [...quizDataElem].sort(() => Math.random() - 0.5);
let currentQuestion = 0;

const questionElem = document.getElementById("question");
const optionsElem = document.getElementById("options");
const nextBtnElem = document.getElementById("nextBtn");
const timerElem = document.getElementById("timer");
const resultElem = document.getElementById("result");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionElem.textContent = `Q${currentQuestion + 1}. ${q.question}`;

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
    optionsElem.appendChild(btn);
  });
}

loadQuestion();
