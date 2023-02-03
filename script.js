var welcome = document.getElementById("welcome");
var quiz = document.getElementById("quiz");
var startBtn = document.getElementById("start");
var questions = 0;
var answers = document.getElementById("answers");
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft")
var highScoreButton = document.getElementById("highScore");
var wrpper = document.getElementById("content");
var questionsBox = document.getElementById("questionsBox")
var questionSpot = document.getElementById("questionSpot")
var createUl = document.getElementById("choicesUl")
var opener = document.getElementById("opener")
var score = 0;
var startTime = 60 * 2;
var correctAnswerCount = 0;
var wrongAnswerCount = 0;
var pauseInterval = 0;
var substractTime = 10;


// quiz.style.display = "none"

var questionsAndAnswers = [
    {
        question: "What does 'DOM' stand for?",
        choices: ["Document Oriented Model", "Designated Object Model", "Document Object Model", "Document Orbital Model"],
        correct: "Document Object Model"
    },
    {
        question: "Which HTML element do we use to link a Javascript? ",
        choices: ["<body>", "<link>", "<html>", "<scirpt>"],
        correct: "<scirpt>"
    },
    {
        question: "How do you Create a function in javascript?",
        choices: ["function()", "function = yourfunction()", "function yourfunction()", "function"],
        correct: "function yourfunction()"
    },
    {
        question: "Who made C++?",
        choices: ["Elon Musk", "Bjanre Stroustup", "Guido Van Rossum", "Steve Jobs"],
        correct: "Bjanre Stroustup"
    },
    {
        question: "What is Brendan Eich responisble for?",
        choices: ["C++", "Java", "Javascript", "Ptyhon"],
        correct: "Javascript"
    },
    {
        question: "Who invented programming?",
        choices: ["Steve Jobs", "Jeff Bezos", "Ada Lovelace", "Charles Babbage"],
        correct: "Ada Lovelace"
    },
    {
        question: "What is JavaScript used for?",
        choices: ["Multimedia control", "Animation", "Dynamically updating", "Pretty much everything"],
        correct: "Pretty much everything"
    },
    {
        question: "What's the easiest coding language to learn?",
        choices: ["C+", "Javascript", "C++", "Python"],
        correct: "Python"
    },
    {
        question: "What's the hardest coding langauge to learn?",
        choices: ["C++", "C+", "Haskell", "Prolog"],
        correct: "Haskell"
    },
    {
        question: "What is Javascirpt?",
        choices: ["A Coffee", "A drink", "A Rainbow", "A codeing language"],
        correct: "A codeing language"
    },

];


timer.addEventListener("click", function () {
    // welcome.style.display = "none"
    // quiz.style.display = "block"
    if (pauseInterval === 0) {
        pauseInterval = setInterval(function () {
            startTime--;
            timeLeft.textContent = "Time: " + startTime;
            if (startTime <= 0) {
                clearInterval(pauseInterval);
                finish();
                timeLeft.textContent = "Time's up!";
            }
        }, 1000);
    }
    display(questions);
});

function display(questions) {
    opener.style.display = "none"
    questionSpot.innerHTML = "";
    createUl.innerHTML = "";
    for (var i = 0; i < questionsAndAnswers.length; i++) {
        let userQuestions = questionsAndAnswers[questions].question;
        var userAnswers = questionsAndAnswers[questions].choices;
        questionSpot.textContent = userQuestions;
    }
    userAnswers.forEach(function (i) {
        let listItem = document.createElement("li");
        listItem.textContent = i;
        questionSpot.appendChild(createUl)
        createUl.appendChild(listItem)
        listItem.addEventListener("click", (input));
    })

};

const createDiv = document.createElement("div");
function input(event) {
    let element = event.target;
    if (element.matches("li")) {
        createDiv.id = "createDiv";
        if (element.textContent == questionsAndAnswers[questions].correct) {
            score++;
            createDiv.textContent = " Correct";
        } else {
            startTime = startTime - substractTime;
            createDiv.textContent = " Wrong" + questionsAndAnswers[questions].correct;
        }
    }
    questions++;
    if (questions >= questionsAndAnswers.length) {
        finish();
    } else {
        display(questions);
    }
    questionSpot.appendChild(createDiv);
};

function finish() {
    questionsBox.innerHTML = "";
    timeLeft.innerHTML = "";
    const createH1 = document.createElement("h1");
    createH1.id = "createH1";
    createH1.textContent = "Finished!"
    questionsBox.appendChild(createH1);
    const createP = document.createElement("p");
    createP.id = "createP";
    questionsBox.appendChild(createP);
    if (startTime >= 0) {
        const createP2 = document.createElement("p");
        clearInterval(pauseInterval);
        createP.textContent = "Your score is: " + score + " time left is: " + startTime;
        questionsBox.appendChild(createP2);
    }
    const infoPrompt = document.createElement("label");

    infoPrompt.id = "createLabel";
    infoPrompt.textContent = "Enter your initials: ";
    questionsBox.appendChild(infoPrompt);

    const userInitials = document.createElement("input");
    userInitials.type = "text";
    userInitials.id = "initials";
    userInitials.textContent = "";
    questionsBox.appendChild(userInitials);
    const saveInfo = document.createElement("button");
    saveInfo.type = "submit";
    saveInfo.id = "Submit";
    saveInfo.textContent = "Submit";
    questionsBox.appendChild(saveInfo);

    saveInfo.addEventListener("click", function () {
        var initials = userInitials.value;
        if (initials === "") {
            console.log("No value entered!");
        } else {
            var finalScore = {
                initials: initials,
                score: timeLeft * 2
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            window.location.replace("score.html");
        }
    });
}