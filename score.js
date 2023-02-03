var highScoreBtn = document.getElementById("highScore");
var clearBtn = document.getElementById("clear");
var retakeBtn = document.getElementById("retake");


clearBtn.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

retakeBtn.addEventListener("click", function() {
    window.location.replace("index.html");
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScoreBtn.appendChild(createLi);
    }
}