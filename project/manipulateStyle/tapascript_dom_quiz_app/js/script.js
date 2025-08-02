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
let score = 0;
let timer;
let timeLeft;

const questionElem = document.getElementById("question");
const optionsElem = document.getElementById("options");
const nextBtnElem = document.getElementById("nextBtn");
const timerElem = document.getElementById("timer");
const resultElem = document.getElementById("result");

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  updateTimer();
  timer = setInterval(countdown, 1000);
  const q = questions[currentQuestion];
  questionElem.textContent = `Q${currentQuestion + 1}. ${q.question}`;
  optionsElem.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(index, true));
    optionsElem.appendChild(btn);
  });
  nextBtnElem.style.display = "none";
}

function countdown() {
  timeLeft--;
  updateTimer();

  if (timeLeft === 0) {
    clearInterval(timer);
    selectAnswer(questions[currentQuestion]?.correct, false);
  }
}

function updateTimer() {
  timerElem.textContent = `${timeLeft} Second`;
}
function selectAnswer(index, shouldScore) {
  clearInterval(timer);
  const q = questions[currentQuestion];

  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn) => (btn.disabled = true));
  if (index === q.correct) {
    shouldScore && score++;
    buttons[index].classList.add("correct");
  } else {
    buttons[index].classList.add("wrong");
    buttons[q.correct].classList.add("correct");
  }
  nextBtnElem.style.display = "inline-block";
}
nextBtnElem.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  nextBtnElem.style.display = "none";
  const highScore = localStorage.getItem("quizHighScore") || 0;
  const isNew = score > highScore;

  if (isNew) {
    localStorage.setItem("quizHighScore", score);
  }
  resultElem.innerHTML = `
    <ht>Hurray!! quiz complete</h2>
    <p>you have scored ${score} out of ${questions.length} questions</p>
    <p>Highest Score: ${Math.max(score, highScore)}</p>
    ${isNew ? "<p> hey new high score</p>" : ""}
    <button onclick="location.reload()">Restart the Quiz</button>
  `;
}
loadQuestion();
