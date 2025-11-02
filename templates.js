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
  {
    question: "Welche Tags werden für Überschriften verwendet?",
    answer1: "header",
    answer2: "h1 bis h6",
    answer3: "head",
    answer4: "title",
    right_answer: 2,
  },
  {
    question: "Welches Attribut beschreibt den alternativen Text eines Bildes?",
    answer1: "alt",
    answer2: "title",
    answer3: "src",
    answer4: "desc",
    right_answer: 1,
  },
  {
    question: "Wie kommentiert man HTML-Code?",
    answer1: "// Kommentar",
    answer2: "/* Kommentar */",
    answer3: "&lt;!-- Kommentar --&gt;",
    answer4: "<comment>Kommentar</comment>",
    right_answer: 3,
  },
  {
    question: "Wofür steht CSS?",
    answer1: "Creative Style System",
    answer2: "Cascading Style Sheets",
    answer3: "Computer Style Syntax",
    answer4: "Coded Style Script",
    right_answer: 2,
  },
  {
    question: "Wie bindet man ein externes CSS-Stylesheet in HTML ein?",
    answer1: "style src='style.css'",
    answer2: "stylesheet tag mit style.css",
    answer3: "link rel='stylesheet' href='style.css'",
    answer4: "css src='style.css'",
    right_answer: 3,
  },
  {
    question:
      "Wie wählt man in CSS alle Elemente mit der Klasse 'container' aus?",
    answer1: "#container",
    answer2: ".container",
    answer3: "container",
    answer4: "*container",
    right_answer: 2,
  },
  {
    question: "Welche CSS-Eigenschaft ändert die Textfarbe?",
    answer1: "font-color",
    answer2: "color",
    answer3: "text-color",
    answer4: "foreground",
    right_answer: 2,
  },
  {
    question: "Wie kann man in CSS den Hintergrund einer Seite ändern?",
    answer1: "background-color",
    answer2: "bgcolor",
    answer3: "background",
    answer4: "color-background",
    right_answer: 1,
  },
  {
    question: "Was macht das HTML-Tag 'form'?",
    answer1: "Erstellt einen Absatz",
    answer2: "Erstellt ein Formular zur Dateneingabe",
    answer3: "Fügt ein Bild hinzu",
    answer4: "Erstellt eine Tabelle",
    right_answer: 2,
  },
  {
    question:
      "Mit welchem Attribut kann man in einem Formular ein Eingabefeld als Pflichtfeld markieren?",
    answer1: "required",
    answer2: "mandatory",
    answer3: "needed",
    answer4: "must",
    right_answer: 1,
  },
  {
    question: "Was bedeutet das CSS-Attribut 'display: flex;'?",
    answer1: "Das Element wird unsichtbar",
    answer2: "Das Element wird zu einem Flex-Container",
    answer3: "Das Element schwebt über anderen",
    answer4: "Das Element wird zentriert",
    right_answer: 2,
  },
  {
    question: "Wie bindet man JavaScript in eine HTML-Datei ein?",
    answer1: "js Tag",
    answer2: "script Tag",
    answer3: "javascript Tag",
    answer4: "code Tag",
    right_answer: 2,
  },
  {
    question: "Wie schreibt man in JavaScript eine Ausgabe in die Konsole?",
    answer1: "print()",
    answer2: "console.log()",
    answer3: "log.console()",
    answer4: "write.console()",
    right_answer: 2,
  },
  {
    question: "Wie deklariert man eine Variable in JavaScript (ES6)?",
    answer1: "let",
    answer2: "var",
    answer3: "const",
    answer4: "Alle oben genannten",
    right_answer: 4,
  },
  {
    question: "Welches Symbol wird verwendet, um eine ID in CSS auszuwählen?",
    answer1: ".",
    answer2: "#",
    answer3: "*",
    answer4: "&",
    right_answer: 2,
  },
  {
    question: "Was gibt typeof 42 in JavaScript zurück?",
    answer1: "int",
    answer2: "number",
    answer3: "string",
    answer4: "value",
    right_answer: 2,
  },
  {
    question: "Welche Methode wandelt einen Text in eine Zahl um?",
    answer1: "parseInt()",
    answer2: "stringToNum()",
    answer3: "convert()",
    answer4: "numberify()",
    right_answer: 1,
  },
  {
    question: "Wie kann man in JavaScript eine Funktion deklarieren?",
    answer1: "function myFunction() {}",
    answer2: "create function myFunction() {}",
    answer3: "func myFunction() {}",
    answer4: "define myFunction() {}",
    right_answer: 1,
  },
  {
    question: "Was bewirkt der CSS-Befehl 'position: absolute;'?",
    answer1: "Das Element wird relativ zu seinem Eltern-Element positioniert",
    answer2: "Das Element bleibt beim Scrollen fixiert",
    answer3:
      "Das Element wird relativ zum nächstgelegenen positionierten Vorfahren platziert",
    answer4: "Das Element verschwindet vom Layout",
    right_answer: 3,
  },
  {
    question: "Was ist das Ergebnis von '2' + 2 in JavaScript?",
    answer1: "4",
    answer2: "22 (als String)",
    answer3: "NaN",
    answer4: "Fehler",
    right_answer: 2,
  },
  {
    question:
      "Welches Event wird ausgelöst, wenn ein Benutzer auf ein HTML-Element klickt?",
    answer1: "onhover",
    answer2: "onclick",
    answer3: "onpress",
    answer4: "onactivate",
    right_answer: 2,
  },
  {
    question: "Was bedeutet DOM im Zusammenhang mit JavaScript?",
    answer1: "Document Object Model",
    answer2: "Data Object Management",
    answer3: "Display Order Module",
    answer4: "Dynamic Object Map",
    right_answer: 1,
  },
  {
    question:
      "Wie greift man in JavaScript auf ein Element mit der ID demo zu?",
    answer1: "get.Element('demo')",
    answer2: "document.querySelector('.demo')",
    answer3: "document.getElementById('demo')",
    answer4: "document.find('demo')",
    right_answer: 3,
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
  `;
}
