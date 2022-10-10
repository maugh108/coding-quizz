var time = 60;
var startEl = document.getElementById("startbutton");
var timerEl = document.getElementById("time");
var introEl = document.getElementById("intro");
var quizEl = document.getElementById("quiz");
var submitscoreEl = document.getElementById("submitscore");
var scoretableEl = document.getElementById("scoretable");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var startEl = document.getElementById("startbutton");
var truewrongEl = document.getElementById("true-wrong");
var qIndex = 0;

var questions = [["commonly used data types don't include (01):", ["strings", "booleans", "alerts", "numbers"], "alerts"],
                 ["commonly used data types don't include (02):", ["numbers", "strings", "booleans", "alerts"], "alerts"],
                 ["commonly used data types don't include (03):", ["alerts", "numbers", "strings", "booleans"], "alerts"],
                 ["commonly used data types don't include (04):", ["booleans", "alerts", "numbers", "strings"], "alerts"]];
  
  function clock() {
    time--;
    timerEl.textContent = time;

    }

  function startquizz() {

    console.log("entró a start quizz");
    
    introEl.setAttribute("class", "hide");
    quizEl.removeAttribute("class");
    
    timerId = setInterval(clock, 1000);

    timerEl.textContent = time;
    renderquestion(0);
  }

  function renderquestion(memIndex) {

    console.log("entró a render question");
    
    var index = 0 + memIndex;
    var renderedquestion = questions[index]
    var renderedoptions = renderedquestion[1]
    var correctanswer = renderedquestion[2];

    answersEl.innerHTML = "";
    
    questionEl.textContent = renderedquestion[0];
             
    for ( i = 0; i < renderedquestion[1].length; i++) {
      var option = document.createElement("button")
      answersEl.appendChild(option);
      option.setAttribute("class", "choice");
      option.setAttribute("value", renderedoptions[i]);

      option.textContent = i + 1 + ". " + renderedoptions[i];
  
      option.onclick = function () {

        if (this.value == correctanswer) {
          
          truewrongEl.textContent = "Correct :D";       
          

        } else {      

          time -= 10;
          console.log (this.value);
       
          if (time < 0) {
            time = 0;
            return;
          }
       
          timerEl.textContent = time;
          truewrongEl.textContent = "Wrong :(";

        }
       
        truewrongEl.removeAttribute("class");

        if (index < questions.length){
          qIndex++;
          renderquestion(qIndex);
        } else {

          qIndex = 0;

          return;

        }
        
      }

      }
      
    }



startEl.onclick = startquizz;
