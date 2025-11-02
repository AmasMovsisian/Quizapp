let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer1: "Justin Bieber",
    answer2: "Tim Berners-Lee",
    answer3: "Elon Musk",
    answer4: "Bill Gates",
    right_answer: 2,
  },
  {
    question: "Wofür steht HTML?",
    answer1: "HyperText Markup Language",
    answer2: "HyperText Makeup Language",
    answer3: "HighText Machine Language",
    answer4: "Home Tool Markup Language",
    right_answer: 1,
  },
  {
    question: "Welches Tag wird verwendet, um einen Link zu erstellen?",
    answer1: "link",
    answer2: "a",
    answer3: "href",
    answer4: "url",
    right_answer: 2,
  },
  {
    question: "Mit welchem Tag fügt man ein Bild ein?",
    answer1: "img",
    answer2: "picture",
    answer3: "src",
    answer4: "image",
    right_answer: 1,
  },
  {
    question: "Welches Tag wird für Absätze verwendet?",
    answer1: "paragraph",
    answer2: "text",
    answer3: "p",
    answer4: "par",
    right_answer: 3,
  },
  {
    question: "Welches Attribut gibt die Ziel-URL eines Links an?",
    answer1: "src",
    answer2: "alt",
    answer3: "href",
    answer4: "link",
    right_answer: 3,
  },
  {
    question: "Welches Tag wird verwendet, um eine Tabelle zu erstellen?",
    answer1: "table",
    answer2: "tab",
    answer3: "t",
    answer4: "tbl",
    right_answer: 1,
  },
];


function getHTMLPassed() {
  return `
    <h1><b>Das Quiz ist beendet!</b></h1>
    <br /><br />
    <span>
        <b id="rightAnswerAmount">${rightAnswers}</b> von
        <b id="amountOfQuestions">${questions.length}</b> Fragen hast du gleich beim ersten
        Versuch richtig beantwortet!<br><br> 🏆 Bravo!
        <br>Falsche Antworten: <b id="falseAnswer">${falseAnswers}</b>
    </span>
  `;
}

function getHTMLGood() {
  return `
    <h1><b>Das Quiz ist beendet!</b></h1>
    <p>
      <b id="rightAnswerAmount">${rightAnswers}</b> von 
      <b id="amountOfQuestions">${questions.length}</b> Fragen richtig beantwortet!<br>
      👍 Gut gemacht!<br>
      Falsche Antworten: <b id="falseAnswer">${falseAnswers}</b>
    </p>
  `;
}

function getHTMLFail() {
  return `
    <h1><b>Das Quiz ist beendet!</b></h1>
    <br /><br />
    <span>
        <b id="rightAnswerAmount">${rightAnswers}</b> von
        <b id="amountOfQuestions">${questions.length}</b> Fragen richtig beantwortet!<br><br> 
        😕 Versuch es nochmal!<br>
        Falsche Antworten: <b id="falseAnswer">${falseAnswers}</b>
    </span>
    <br><br>
     <button class="btn btn-secondary" onclick="restartQuiz()">
                        Neu Starten
                    </button>
  `
  ;
}
