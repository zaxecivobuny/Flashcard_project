generateFifth = function (n){
    return (n * n * n * n * n);
}

getRandomUnder100 = function (){
    return Math.floor((Math.random() * 100) +1)
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

createFifthProblem = function(){
    window.answer = getRandomUnder100();
    console.log(window.answer);
    var displayAnswer = numberWithCommas( generateFifth(window.answer) );
    document.getElementById("challenge").innerHTML = displayAnswer;
}

checkAnswer = function(){
    var userAnswer = document.getElementById("answer").value;
    if (userAnswer == window.answer) {
        document.getElementById("checkResult").innerHTML = window.answer + " is correct!";
    } else {
        document.getElementById("checkResult").innerHTML = "Sorry, that is not correct. Try again.";
    }
}

toggleCheatsheet = function(){
    var el = document.getElementById("cheatsheet");
    if (el.hidden) {
        el.hidden = false;
    } else {
        el.hidden = true;
    }
}

console.log("fifth_root_functions loaded");