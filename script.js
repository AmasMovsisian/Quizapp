let questions = [
  {
    "question": "Wer hat HTML erfunden?",
    "answer1": "Justin Bieber",
    "answer2": "Tim Berners-Lee",
    "answer3": "Elon Musk",
    "answer4": "Bill Gates",
    "right_answer": 2
  },
  {
    "question": "Wofür steht HTML?",
    "answer1": "HyperText Markup Language",
    "answer2": "HyperText Makeup Language",
    "answer3": "HighText Machine Language",
    "answer4": "Home Tool Markup Language",
    "right_answer": 1
  },
  {
    "question": "Welches Tag wird verwendet, um einen Link zu erstellen?",
    "answer1": "link",
    "answer2": "a",
    "answer3": "href",
    "answer4": "url",
    "right_answer": 2
  },
  {
    "question": "Mit welchem Tag fügt man ein Bild ein?",
    "answer1": "img",
    "answer2": "picture",
    "answer3": "src",
    "answer4": "image",
    "right_answer": 1
  },
  {
    "question": "Welches Tag wird für Absätze verwendet?",
    "answer1": "paragraph",
    "answer2": "text",
    "answer3": "p",
    "answer4": "par",
    "right_answer": 3
  },
  {
    "question": "Welches Attribut gibt die Ziel-URL eines Links an?",
    "answer1": "src",
    "answer2": "alt",
    "answer3": "href",
    "answer4": "link",
    "right_answer": 3
  },
  {
    "question": "Welches Tag wird verwendet, um eine Tabelle zu erstellen?",
    "answer1": "table",
    "answer2": "tab",
    "answer3": "t",
    "answer4": "tbl",
    "right_answer": 1
  }
];

let currentQuestion = 0;
let el = document.getElementById(selection).parentNode;
el.classList.remove('bg-success', 'bg-danger');


function init(){
    document.getElementById("allQuestions").innerHTML = questions.length;
    showQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        document.getElementById("questionText").innerHTML = "Herzlichen Glückwunsch! Du hast alle Fragen beantwortet!";
        resetAnswerButtons();
        document.getElementById("nextQuestion").innerHTML = "Neu starten";
        document.getElementById("nextQuestion").onclick = restartQuiz;
        return;
    }
    document.getElementById("nextQuestion").disabled = true;
    document.getElementById("currentQuestionNumber").innerHTML = currentQuestion + 1;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function restartQuiz() {
    currentQuestion = 0;
    document.getElementById("nextQuestion").innerHTML = "Nächste Frage";
    document.getElementById("nextQuestion").onclick = nextQuestion;
    showQuestion();
    document.getElementById("currentQuestionNumber").innerHTML = currentQuestion + 1;
}



function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("questionText").innerHTML = question['question'];
    document.getElementById("answer_1").innerHTML = question['answer1'];
    document.getElementById("answer_2").innerHTML = question['answer2'];
    document.getElementById("answer_3").innerHTML = question['answer3'];
    document.getElementById("answer_4").innerHTML = question['answer4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let questionCurrentNumber = selection.slice(-1);

    if(questionCurrentNumber == question['right_answer']) {
       document.getElementById(selection).parentNode.classList.add('bg-success');
       document.getElementById("nextQuestion").disabled = false;
    } else {
       document.getElementById(selection).parentNode.classList.add('bg-danger');
    }
    
}
