var welcome = document.getElementById("welcome")
var quiz = document.getElementById("quiz")
var startBtn = document.getElementById("start")
var questions = document.getElementById("question")
var answers = document.getElementById("answers")
quiz.style.display = "none"

var questionsAndAnswers = [
    {
        question: "What does 'DOM' stand for?",
        choices: ["Document Oriented Model", " Designated Object Model", "Document Object Model", "Document Orbital Model"],
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
    
]


startBtn.addEventListener("click", function() {
    welcome.style.display = "none"
    quiz.style.display = "block"
})