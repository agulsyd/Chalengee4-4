var button = document.querySelector("#btnn");
var info = document.querySelector('#information');
var high = document.querySelector("#highscore");
var preguntas = 
  {
    question: "prueba1",
    1: "jejox",
    2: "lol,",
    3: "troll",
    4:"ashe",
    ans: "respuesta3" 
  }
;
var questionMain = document.querySelector(".question");
var option1 = document.querySelector("#respuesta2");
var option2 = document.querySelector("#respuesta2");
var option3 = document.querySelector("#respuesta3");
var option4 = document.querySelector("#respuesta4");
var submit =document.querySelector("#accept");



console.dir(button);
var time = 0;
var correct=true;
var prueba=0;

var Start = function(){
  console.log(questionMain);
 questionMain.innerText = preguntas.question;
};
Start();

