
let currentQuestion = 0;
let rightAnswers = 0;
let falseAnswers = 0;
let AUDIO_PASSED = new Audio('./audio/passed.mp3');
let AUDIO_GOOD = new Audio('./audio/good.mp3');
let AUDIO_LOST = new Audio('./audio/lost.mp3')
let AUDIO_FAILED = new Audio('./audio/failed.mp3');
let AUDIO_SUCCESS = new Audio('./audio/SUCCESS.mp3');


function init() {
  document.getElementById("allQuestions").innerHTML = questions.length;
  showQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    resetAnswerButtons();
    showImgBasedResult();
    document.getElementById("amountOfQuestions").innerHTML = questions.length;
    document.getElementById("rightAnswerAmount").innerHTML = rightAnswers;
    document.getElementById("falseAnswer").innerHTML = falseAnswers;
    document.getElementById("endScreen").style = "";
    document.getElementById("questionBody").style.display = "none";
    document.getElementById("nextQuestion").innerHTML = "Neu starten";
    document.getElementById("nextQuestion").onclick = restartQuiz;
    return;
  }

  document.getElementById("nextQuestion").disabled = true;
  document.getElementById("currentQuestionNumber").innerHTML = currentQuestion + 1;
  resetAnswerButtons();
  enableFalseAnswers();
  showQuestion();
}

function showImgBasedResult() {
     if (rightAnswers === questions.length) {
  document.getElementById("cardImg").src = "./img/passedImg.jpg";
  document.getElementById("endTextResult").innerHTML = getHTMLPassed();
  AUDIO_PASSED.play();

} else if (rightAnswers >= questions.length / 2) {
  document.getElementById("cardImg").src = "./img/good_img.jpg";
  document.getElementById("endTextResult").innerHTML = getHTMLGood();
  AUDIO_GOOD.play();
} else {
  document.getElementById("cardImg").src = "./img/failed_img.jpg";
  document.getElementById("endTextResult").innerHTML = getHTMLFail();
  AUDIO_LOST.play(); 
}

}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
}

function restartQuiz() {
  currentQuestion = 0;
  document.getElementById("nextQuestion").innerHTML = "Nächste Frage";
  document.getElementById("nextQuestion").onclick = nextQuestion;
  document.getElementById("questionBody").style.display = "";
  document.getElementById("endScreen").style.display = "none";
  document.getElementById("cardImg").src = "./img/Quiz_img.jpg"
  showQuestion();
  document.getElementById("nextQuestion").disabled = false;
  enableFalseAnswers();
  document.getElementById("currentQuestionNumber").innerHTML =
  currentQuestion + 1;
}

function showQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer1"];
  document.getElementById("answer_2").innerHTML = question["answer2"];
  document.getElementById("answer_3").innerHTML = question["answer3"];
  document.getElementById("answer_4").innerHTML = question["answer4"];

  let percent = (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);

  document.getElementById("progressBar").innerHTML = `${percent} %`;
  document.getElementById("progressBar").style = `width: ${percent}%;`;
}

function answer(selection) {
  let question = questions[currentQuestion];
  let questionCurrentNumber = selection.slice(-1);

  if (questionCurrentNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightAnswers++;
    playSuccess();
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    falseAnswers++;
    playFail();
    let rightAnswerId = "answer_" + question["right_answer"];
    document.getElementById(rightAnswerId).parentNode.classList.add("bg-success");
  }
    document.getElementById("nextQuestion").disabled = false;
    disableFalseAnswers();
  }

function playSuccess() {
    const audio = AUDIO_SUCCESS.cloneNode();
    audio.play();
}

function playFail() {
    const audio = AUDIO_FAILED.cloneNode();
    audio.play();
}

function disableFalseAnswers() {
  let allAnswers = document.getElementsByClassName("quiz-answer-card");
  for (let i = 0; i < allAnswers.length; i++) {
    allAnswers[i].onclick = null;
    allAnswers[i].style.pointerEvents = "none";
    allAnswers[i].style.opacity = "0.6";
  }
}

function enableFalseAnswers() {
  let allAnswers = document.getElementsByClassName("quiz-answer-card");
  for (let i = 0; i < allAnswers.length; i++) {
    allAnswers[i].onclick = function () {
      answer(this.id);
    };
    allAnswers[i].style.pointerEvents = "auto";
    allAnswers[i].style.opacity = "1";
  }
}

