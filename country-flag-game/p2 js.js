let chalNum = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
let nextCount = 0;
let valueOfButton;
let correct = 0;
let question = 1;
let wrong = 0;
let countClicks = 0;
let clicksBeforeShowAnswer = 0;
let total = document.getElementById("total");

function getPic(){
   loadChal(chalNum[0], false)

   total.innerHTML = ` <br/> ${correct}/${question}`   
}

let submitButton = document.createElement("INPUT");
function loadChal(x,y){

   let chal = document.getElementById(`challenge${x}`);
   let removeNext = document.getElementById("next")
      // chal.setAttribute("class", "show")
      // chal.className = "show"
   chal.style.display = "block"

   // REMOVES THE NEXT BUTTON AND PUTS THE SUBMIT QUIZ BUTTON SO DATA CAN BE TAKEN TO DATABASE
   if(y == true){
      chal.children[3].children[1].remove(); // REMOVES THE 20th "NEXT" BUTTON
      
      // chal.children[6].insertAdjacentHTML("beforeend", submitButton)
      
      Object.assign(submitButton,{
         type:"submit",
         value: "Submit Game",
         id: "submitQuiz",
         className: 'submit disabled'
      });
      chal.children[3].appendChild(submitButton);

      // DISABLES THE SUBMIT BUTTON AT FIRST UNTIL THE LAST QUESTION IS ANSWERED
      submitButton.disabled = true;
      submitButton.className = "disabled";
   }  
}

function chooseCorrect(x){// ALLOWS THE USER TO SELECT AN OPTION BASED ON THE OPTIONS PROVIDED, HIGHLIGHT IT RED OR GREEN  
   let x2Parent1Child = x.parentElement.parentElement.children
   if(countClicks < 1){

      if(x2Parent1Child[0].getAttribute("alt") == x.value){

         x.className = "correct"
         correct +=1
         total.innerHTML = ` <br/> ${correct}/${question} <br/> ${percent(correct/question)}%`
      }else{
 
         x.className = "wrong"
         wrong+=1
         total.innerHTML = ` <br/> ${correct}/${question} <br/> ${percent(correct/question)}%`
      }
     x.style.cursor = 'default'
   }

   countClicks = 1;
   //REVEALS SUBMIT BUTTON AND ENABLES IT
   enableSubmit()
}

function showAnswer(x){

   let x2Parent1Child = x.parentElement.parentElement.children
   if(countClicks <= 0){

      if(confirm("If you click 'ok' the question will be marked wrong :/")){

         for(y=0; y<4; y+=1){

            if(x2Parent1Child[0].getAttribute("alt") == x2Parent1Child[2].children[y].value){

               x2Parent1Child[2].children[y].className = "correct"

               total.innerHTML = ` <br/> ${correct}/${question} <br/> ${percent(correct/question)}%`
               wrong+=1;
               countClicks = 1;
               //REVEALS SUBMIT BUTTON AND ENABLES IT
               enableSubmit() 
            }
         }
      }
   }else{

      for(y=0; y<4; y+=1){

         if(x2Parent1Child[0].getAttribute("alt") == x2Parent1Child[2].children[y].value){

            if(x2Parent1Child[2].children[y].classList.contains("correct") && countClicks >=1){

               alert("Answer already selected")

            }else{

               x2Parent1Child[2].children[y].className = "correct"   
            }
         }
      }
      countClicks = 1 
   }  
}  
   
function next(x){

   if(countClicks === 0){
      // it should be marked wrong if they go to next without choosing
      // it confirms whether or not the user wants to skip it.

      if(confirm("Are you sure you want to move on without answering? Doing so will mark it wrong.")){

         countClicks+=1 // if the user says ok it loads the next question. if cancel it stays on the page
         wrong+=1
      }
   }
   // CHECKS THE COUNTCLICKS HERE SO IT CAN LOAD NEXT PAGE
   if(countClicks > 0){

      let x2Parent = x.parentElement.parentElement
      countClicks = 0;// resets clicker everytime user goes to next page
 

      if(question >=20){
         x2Parent.style.display = "block"
      }else{
         x2Parent.style.display = "none"
      }

      if(question <= 20){ // RE UPDATES EVERYTIME A QUESTION IS ADDED, at 20

         question+=1
         total.innerHTML = ` <br/> ${correct}/${question} <br/> ${percent(correct/(question-1))}%`

         if( question === 2){             
            // show the next challenge
            loadChal(chalNum[question-1],false)
         }else if( question === 3){             
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 4){
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 5){
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 6){
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 7){
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 8){
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 9){
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 10){
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 11){
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 12){
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 13){
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 14){
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 15){
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 16){
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 17){
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 18){
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 19){
            // show the next challenge
            loadChal(chalNum[question-1], false);
         }else if(question === 20){
            // show the next challenge
            loadChal(chalNum[question-1], true);        
         }
      }        
   }           
}

function enableSubmit(){//REVEALS SUBMIT BUTTON AND ENABLES IT
   
   if(countClicks > 0){

      submitButton.className = "submit";
      submitButton.disabled = false;
   }
}

function shuffle(a) {// RANDOMIZES ARRAY WITHOUT DUPLICATING ANY NUMBER... MATH.random() may return a duplicate
   var y, z;
   for (x = a.length - 1; x > 0; x--) {

      y = Math.floor(Math.random() * (x + 1));
      z = a[x];
      a[x] = a[y];
      a[y] = z;
   }

   return a;
}

function percent(x){ // TURNS SCORE INTO PERCENT

   let value = x

   return ( value * 100 ).toFixed(2)
}

let toggleCount = 0;
function darkMode(){ // DARK BACKGROUND

   let body = document.getElementById("body");
   let h3;
   let h1 = document.getElementById("title"); 
   let total = document.getElementById("total"); 
   let img = document.getElementsByTagName("IMG");
   let toggle = document.getElementById("toggle");
   toggleCount +=1;
   body.classList.toggle("darkMode");
   body.classList.toggle("white")
   title.classList.toggle("white");
   total.classList.toggle("totalDark");
   if(toggleCount%2 === 0){
      toggle.setAttribute('title', "Dark Mode");
   }else{
      toggle.setAttribute('title', "Light Mode");
   }

   for(x=1; x<=20; x+=1){

      h3 = document.getElementById(`head${x}`);
      h3.classList.toggle("white");
   }

   for(x=1; x<=4; x+=1){

      img[x-1].classList.toggle("darkModePicBoxShadow")
   }
}

function spin(){

   let title = document.getElementsByTagName("H1")
   let world = document.getElementById("world")
   let x = 0;

   // while(x<1){

         title[x].className = "title"
         world.className = "world"
      // x+=1
   // }
}
spin();

let switchButtonsArray = new Array(0,1,2,3);
function switchButtons(x=null){

   let getButtonHolder;
   let buttons;
   for(x=1; x<=20; x+=1){
      getButtonHolder = document.getElementById(`challenge${x}`).children[2];

      for(y=0; y<=3; y+=1){
         shuffle(switchButtonsArray);
         buttons = getButtonHolder.children[switchButtonsArray[y]]
         getButtonHolder.appendChild(buttons);
      }
   }
}
switchButtons();

