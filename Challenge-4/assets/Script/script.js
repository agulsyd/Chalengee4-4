var button = document.querySelector("#btnn");
var preguntas = document.querySelector("#preguntas");
var info = document.querySelector('#information');
var high = document.querySelector("#highscore");


var time = 0;
var correct=true;
var AvQuestions=0;
var prueba=0;


button.addEventListener("click", Start);
var Start = function(){
    var timer = document.createElement("p");
    timer.className = ("clock");
    timer.textContent = ("Time:");
    preguntas.appendChild(timer);
    info.style.display = "none";
    setInterval(TiempoRestante,1000);
    //setNextQuestion();
};

var TiempoRestante = function(){
    if(time === 30){
        clearInterval(prueba);
    }
    else{
        time++;
        console.log(time);
    }
}


//var setNextQuestion = function(){



button.addEventListener("click", Start);
