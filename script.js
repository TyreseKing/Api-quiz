var welcome = document.getElementById("welcome")
var quiz = document.getElementById("quiz")
var startBtn = document.getElementById("start")
var questions = document.getElementById("question")
var answers = document.getElementById("answers")
quiz.style.display = "none"

var questionsAndAnswers = [
    {
        question: "What color is the sky?",
        choices: ["Red", "Blue", "Green", "Purple"],
        correct: "Blue"
    },
    {
        question: "What was the first programming lauguage? ",
        choices: ["C+", "C++", "Javascirt", "FORTRAN"],
        correct: "FORTAN"
    },
    {
        question: "Whos the father of programming?",
        choices: ["Elon Musk", "Bill Gates", "Charles Babbage", "Ada Lovelace"],
        correct: "Charles Babbage"
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
        question: "Whats the Color of light?",
        choices: ["Red", "Blue", "Rainbow", "White"],
        correct: "White"
    },
    
]


startBtn.addEventListener("click", function() {
    welcome.style.display = "none"
    quiz.style.display = "block"
})