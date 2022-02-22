var questions = [
    {
       question:"Commonly used data type do not include? _____",
       option1:"string",
       option2:"booleans",
       option3:"alerts",
       option4:"numbers"
    },
    {
        question:"Arrays in Javascript can be used to store______",
        option1:"numbers and strings",
        option2:"other arrays",
        option3:"booleans",
        option4:"all of the above"
    }
];


var timer = document.createElement("p");
    timer.className = ("clock");
    timer.textContent = ("Time:");
    preguntas.appendChild(timer);

    
    <div id="preguntas" class="qbox">
        <h2 id="questionn">1.</h2>
        <h2 id="questionT">"Commonly used data type do not include? _____"</h2>
        <br>
        <br>
    </div>


    var Start = function(){
    info.style.display = "none";
    setInterval(TiempoRestante,1000);
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