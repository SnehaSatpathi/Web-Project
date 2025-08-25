const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: 1
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    correct: 1
  },
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    correct: 0
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const options = document.querySelectorAll(".option");

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  options.forEach((button, index) => {
    button.textContent = currentQuestion.options[index];
    button.style.backgroundColor = "#007bff"; // Reset color
  });

  document.getElementById("result").style.display = "none"; // Hide result
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  const options = document.querySelectorAll(".option");

  if (selectedOption === currentQuestion.correct) {
    score++;
    options[selectedOption].style.backgroundColor = "green";
  } else {
    options[selectedOption].style.backgroundColor = "red";
    options[currentQuestion.correct].style.backgroundColor = "green"; // Highlight correct answer
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question").textContent = "Quiz Completed!";
    document.querySelectorAll(".option").forEach(button => (button.style.display = "none"));
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = `${score} / ${questions.length}`;
  }
}

// Start quiz
loadQuestion();
