let america1 = `https://images.unsplash.com/photo-1551560426-a07129a7612a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=852&q=80`
let australia2 = `https://images.unsplash.com/photo-1563698876759-5388be71113b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" width="200`
let brazil3 = `https://images.unsplash.com/photo-1554068741-2456f561031a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`
let canada4 = `https://images.unsplash.com/photo-1570640717412-bac2dc91ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80`
let china5 = `https://images.unsplash.com/photo-1568044941821-bf7e9075c4e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80`
let denmark6 = `https://images.unsplash.com/photo-1513492562735-a5ba626fa7b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`
let germany7 = `https://images.unsplash.com/photo-1585290031261-74338d371081?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60`
let greece8 = `https://images.unsplash.com/photo-1506877339221-ede41280a7a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80`
let haiti9 = `https://images.unsplash.com/photo-1527091736853-64ca6a9b64d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" width="200" hgreece8="200`
let india10 = `https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80`
let israel11 = `https://images.unsplash.com/photo-1599340695274-f8a2f344174d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`
let italy12 = `https://images.unsplash.com/photo-1584552503554-99bf6ce4de43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80`
let japan13 = `https://images.unsplash.com/photo-1469996933743-a1f6a78f1082?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`
let mexico14 = `https://images.unsplash.com/photo-1550188334-2f6203799b50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80`
let norway15 = `https://images.unsplash.com/photo-1541360389723-5f230196b9e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`
let russia16 = `https://images.unsplash.com/photo-1591221007237-3e26614782d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`
let southAfrica17 = `https://images.unsplash.com/photo-1589453181211-c5187a472f8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`
let southKorea18 = `https://images.unsplash.com/photo-1528291781122-cd7443caef8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80`
let spain19 = `https://images.unsplash.com/photo-1566232392379-afd9298e6a46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80`
let sweden20 = `https://images.unsplash.com/photo-1572225303717-a96db5e8d8b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`

let picLinkArray = new Array(america1, australia2, brazil3, canada4, china5, denmark6, germany7, greece8, haiti9, india10, israel11, italy12, japan13, mexico14, norway15, russia16, southAfrica17, southKorea18, spain19, sweden20)

// CREATES THE ELEMENTS INSTEssAD OF HAVING TO DO SO MANUALLY, THE HTML PAGE WAS GETTING TOO LONG
function forChal(x){
   
    let getChalDiv = document.getElementById(`challenge${x}`)
    
    let img = document.createElement("IMG")
    let h3 = document.createElement("H3")
    let button1 = document.createElement("INPUT")
    let button2 = document.createElement("INPUT")
    let button3 = document.createElement("INPUT")
    let button4 = document.createElement("INPUT");
    let showNextDiv = document.createElement("DIV");
    let showAnswerButton =  document.createElement("INPUT");
    let nextButton = document.createElement("INPUT");
    let picAlt;
    let buttonId;
          
                                                      // inserting them into the appropriate places 
   getChalDiv.appendChild(img)
   getChalDiv.appendChild(h3)
   getChalDiv.appendChild(button1)
   getChalDiv.appendChild(button2)
   getChalDiv.appendChild(button3)
   getChalDiv.appendChild(button4)
   getChalDiv.appendChild(showNextDiv)
   showNextDiv.appendChild(showAnswerButton)
   showNextDiv.appendChild(nextButton)
      
                                                      //IMAGES ELEMENTS
   // SETS THE ALT
   if(x === 1){
         picAlt = "America"
   }else if(x === 2){
         picAlt = "Australia"
   }else if(x === 3){
         picAlt = "Brazil"
   }else if(x === 4){
         picAlt = "Canada"
   }else if(x === 5){
         picAlt = "China"
   }else if(x === 6){
         picAlt = "Denmark"
   }else if(x === 7){
         picAlt = "Germany"
   }else if(x === 8){
         picAlt = "Greece"
   }else if(x === 9){
         picAlt = "Haiti"
   }else if(x === 10){
         picAlt = "India"
   }else if(x === 11){
         picAlt = "Israel"
   }else if(x === 12){
         picAlt = "Italy"
   }else if(x === 13){
         picAlt = "Japan"
   }else if(x === 14){
         picAlt = "Mexico"
   }else if(x === 15){
         picAlt = "Norway"
   }else if(x === 16){
         picAlt = "Russia"
   }else if(x === 17){
         picAlt = "South Africa"
   }else if(x === 18){
         picAlt = "South Korea"
   }else if(x === 19){
         picAlt = "Spain"
   }else if(x === 20){
         picAlt = "Sweden"
   }

   Object.assign(img, {
         src: picLinkArray[x-1],
         width: "200",
         height: "200",
         alt: picAlt
   })

                                                            // H3 HEADING ELEMENTS

   Object.assign(h3, {

         className: "statement",
         id: `head${x}`
   })

   // 1ST FOUR BUTTONS ELEMENTS

   Object.assign(button1, {
      type: "button",
      className: "buttons",
      id: `button1`

   });
   Object.assign(button2, {
      type: "button",
      className: "buttons",
      id: `button2`

   });
   Object.assign(button3, {
      type: "button",
      className: "buttons",
      id: `button3`

   });
   Object.assign(button4, {
      type: "button",
      className: "buttons",
      id: `button4`

   });

   // I HAVE TO SET THE FUNCTIONS LIKE THIS
   button1.setAttribute("onclick", "chooseCorrect(this)")
   button2.setAttribute("onclick", "chooseCorrect(this)")
   button3.setAttribute("onclick", "chooseCorrect(this)")
   button4.setAttribute("onclick", "chooseCorrect(this)")

   // LAST TWO BUTTONS
   Object.assign(showAnswerButton, {
      type: "button",
      className: "showAnswer",
      value: "Show Answer"

   });
   showAnswerButton.setAttribute("onclick", "showAnswer(this)")

   Object.assign(nextButton, {
      type: "button",
      className: "next",
      value: "Next"

   });

   nextButton.setAttribute("onclick", "next(this)")

}

function setChallenges(){

   let x = 1
   while(x<=20){

      forChal(x);

      x+=1
   }

}setChallenges()


//_______START OF ACTUAL QUIZ_______________________________________________________


/* WHEN FINISHING, UPDATE

   1. chalnum's array
   2. add another challengenQuestion array
   3. pass challengenQuestion into shuffle()
   4. update the loops to accomodate
   5. update the while for h3's
   6. update the labels button section
   7. make it laod the next index for the next challenge and question less than part

*/
// MAKE SURE TO PUT JS INTO ITS OWN SEPARATE FILE
// ADD DENSE FONT FACE
//MAKE SURE TO ASSIGN DIFF VALEU TO EACH CHAL SET
// FIX WHERE WHEN YOU CLICK SHOW ANSWER, THEN CANCEL AND THEN CLICK NEXT, IT SHOULD SHOW THE PROMPT ABOUT GOING TO NEXT RATHER THAN TAKING YOU STRAIGHT TO THE NEXT PAGE

//  INSTEAD OF HAVING LIKE 5,6,7,8
// WE SHOULD  INSTEAD DO NEW ARRAY('AMERICA',RANDOMCHOICES[X], RANDOMCHOICES[X+1], RANDOMCHOICES[X+2]),
let chalNum = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
let randomChoices = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
shuffle(randomChoices);
let challenge1Answers = new Array("America",randomChoices[0],randomChoices[1],randomChoices[2])// GRABS FIRST 3 RANDOM VALUES AS OTHER OPTIONS
let challenge2Answers = new Array("Australia",randomChoices[3],randomChoices[4],randomChoices[5])
let challenge3Answers = new Array("Brazil",randomChoices[6],randomChoices[7],randomChoices[8])  
let challenge4Answers = new Array("Canada",randomChoices[9],randomChoices[10],randomChoices[11])   
let challenge5Answers = new Array("China",randomChoices[12],randomChoices[13],randomChoices[14])   
let challenge6Answers = new Array("Denmark",randomChoices[15],randomChoices[16],randomChoices[17]) 
let challenge7Answers = new Array("Germany",randomChoices[18],randomChoices[19],randomChoices[0])
let challenge8Answers = new Array("Greece",randomChoices[5],randomChoices[10],randomChoices[15])   
let challenge9Answers = new Array("Haiti",randomChoices[9],randomChoices[2],randomChoices[4])   
let challenge10Answers = new Array("India",randomChoices[6],randomChoices[8],randomChoices[10]) 
let challenge11Answers = new Array("Israel",randomChoices[12],randomChoices[14],randomChoices[16]) 
let challenge12Answers = new Array("Italy",randomChoices[18],randomChoices[9],randomChoices[1])
let challenge13Answers = new Array("Japan",randomChoices[3],randomChoices[5],randomChoices[7])  
let challenge14Answers = new Array("Mexico",randomChoices[9],randomChoices[11],randomChoices[13])  
let challenge15Answers = new Array("Norway",randomChoices[15],randomChoices[17],randomChoices[19]) 
let challenge16Answers = new Array("Russia",randomChoices[0],randomChoices[7],randomChoices[14])   
let challenge17Answers = new Array("South Africa",randomChoices[0],randomChoices[10],randomChoices[9])
let challenge18Answers = new Array("South Korea",randomChoices[4],randomChoices[8],randomChoices[12]) 
let challenge19Answers = new Array("Spain",randomChoices[11],randomChoices[14],randomChoices[17])  
let challenge20Answers = new Array("Sweden",randomChoices[2],randomChoices[5],randomChoices[8])
let nextCount = 0;
let valueOfButton;
let correct = 0;
let question = 1;
let wrong = 0;
let countClicks = 0;
let clicksBeforeShowAnswer = 0;
let total = document.getElementById("total");
shuffle(chalNum);
// document.write(randomChoices, " <br/>   THE CHOICES ARRAY" , "</br>");
// document.write(chalNum, " <br/>   THE CHALLENGE SETS ARRAY" , "</br>");
shuffle(challenge1Answers);
shuffle(challenge2Answers);
shuffle(challenge3Answers);
shuffle(challenge4Answers);
shuffle(challenge5Answers);
shuffle(challenge6Answers);
shuffle(challenge7Answers);
shuffle(challenge8Answers);
shuffle(challenge9Answers);
shuffle(challenge10Answers);
shuffle(challenge11Answers);
shuffle(challenge12Answers);
shuffle(challenge13Answers);
shuffle(challenge14Answers);
shuffle(challenge15Answers);
shuffle(challenge16Answers);
shuffle(challenge17Answers);
shuffle(challenge18Answers);
shuffle(challenge19Answers);
shuffle(challenge20Answers);
   
function getPic(){
   let a = 1;

   loadChal(chalNum[0])
   
   // LOADS BOTH QUESTION TITLE AND LABEL BUTTONS
   // USING MULTIPLE LOOPS BECAUSE WE'RE LOOKING INTO EACH INDEXES AT from 0-3....COULD FIND A BETTER WAY TO PUT ALL INTO ONE ARRAY, BUT EACH SOME ISSUES ARISE WITH THAT
   
   // MAKES SURE WE REMOVE ANY DUPLICATE CHOICES THAT MAY COME FOR THE CHALLENGE SET
   while(a<=4){ 
      // AMERICA 1
      if(challenge1Answers[a-1] === 1){
         challenge1Answers[a-1] = randomChoices[3];
      }
      labelButtons(1,challenge1Answers[a-1],a+1);
      // AUSTRALIA 2
      if(challenge2Answers[a-1] === 2){
         challenge2Answers[a-1] = randomChoices[6];
      }
      labelButtons(2,challenge2Answers[a-1],a+1);
      // BRAZIL 3
      if(challenge3Answers[a-1] === 3){
         challenge3Answers[a-1] = randomChoices[9];
      }
      labelButtons(3,challenge3Answers[a-1],a+1);
      // CANADA 4
      if(challenge4Answers[a-1] === 4){
         challenge4Answers[a-1] = randomChoices[12];
      }
      labelButtons(4,challenge4Answers[a-1],a+1);
      // CHINA 5
      if(challenge5Answers[a-1] === 5){
         challenge5Answers[a-1] = randomChoices[15];
      }
      labelButtons(5,challenge5Answers[a-1],a+1);
      // DENMARK 6
      if(challenge6Answers[a-1] === 6){
         challenge6Answers[a-1] = randomChoices[18];
      }
      labelButtons(6,challenge6Answers[a-1],a+1);
      // GERMANY 7
      if(challenge7Answers[a-1] === 7){
         challenge7Answers[a-1] = randomChoices[5];
      }
      labelButtons(7,challenge7Answers[a-1],a+1);
      // GREECE 8
      if(challenge8Answers[a-1] === 8){
         challenge8Answers[a-1] = randomChoices[19];
      }
      labelButtons(8,challenge8Answers[a-1],a+1);
      // HAITI 9
      if(challenge9Answers[a-1] === 9){
         challenge9Answers[a-1] = randomChoices[13];
      }
      labelButtons(9,challenge9Answers[a-1],a+1);
      // INDIA 10
      if(challenge10Answers[a-1] === 10){
         challenge10Answers[a-1] = randomChoices[16];
      }
      labelButtons(10,challenge10Answers[a-1],a+1);
      // ISRAEL 11
      if(challenge11Answers[a-1] === 11){
         challenge11Answers[a-1] = randomChoices[3];
      }
      labelButtons(11,challenge11Answers[a-1],a+1);
      // ITALY 12
      if(challenge12Answers[a-1] === 12){
         challenge12Answers[a-1] = randomChoices[15];
      }
      labelButtons(12,challenge12Answers[a-1],a+1);
      // JAPAN 13
      if(challenge13Answers[a-1] === 13){
         challenge13Answers[a-1] = randomChoices[8];
      }
      labelButtons(13,challenge13Answers[a-1],a+1);
      // MEXICO 14
      if(challenge14Answers[a-1] === 14){
         challenge14Answers[a-1] = randomChoices[16];
      }
      labelButtons(14,challenge14Answers[a-1],a+1);
      // NORWAY 15
      if(challenge15Answers[a-1] === 15){
         challenge15Answers[a-1] = randomChoices[4];
      }
      labelButtons(15,challenge15Answers[a-1],a+1);
      // RUSSIA 16
      if(challenge16Answers[a-1] === 16){
         challenge16Answers[a-1] = randomChoices[19];
      }
      labelButtons(16,challenge16Answers[a-1],a+1);
      // SOUTH AFRICA 17
      if(challenge17Answers[a-1] === 17){
         challenge17Answers[a-1] = randomChoices[2];
      }
      labelButtons(17,challenge17Answers[a-1],a+1);
      // SOUTH KOREA 18
      if(challenge18Answers[a-1] === 18){
         challenge18Answers[a-1] = randomChoices[18];
      }
      labelButtons(18,challenge18Answers[a-1],a+1);
      // SPAIN 19
      if(challenge19Answers[a-1] === 19){
         challenge19Answers[a-1] = randomChoices[6];
      }
      labelButtons(19,challenge19Answers[a-1],a+1);
      // SWEDEN 20
      if(challenge20Answers[a-1] === 20){
         challenge20Answers[a-1] = randomChoices[14];
      }
      labelButtons(20,challenge20Answers[a-1],a+1);
      // comment to get it working
      a+=1
   }

   // SETS A QUESTION STATEMENT FOR EACH CHALLENGE THAT IS LOADED
   questionStatement()
   // DISPLAYS THE STARTING SCORE
   total.innerHTML = ` <br/> ${correct}/${question}`   
}

function questionStatement(){

   let y = 1;

   let h3;  

   while(y<=20){

      h3 = document.getElementById(`head${y}`);
      h3.innerHTML= `Choose the country which the flag represents`
      y+=1
   }
}
/*
   1. GET CHALLENGE SET
   2. ACCESS THE 5 CHILDREN THAT HOLDS THE BUTTONS 2-5
   3. WHAT EVER WHY I, IT PUTS IT AS THAT

*/
let forButtons; // was let forButtons = 2;
   
function labelButtons(x,y,z){// RANDOMIZES THE ANSWER CHOICES

   let chal;

   // CHANGE THE ANSWER CHOICES SO THEY'RE NOT ALL THE SAME  
  if(y == 'America'){ // ANSWER FOR CHALLENGE SET 1
      valueOfButton = 'America'
   }else if(y == 'Australia'){ // ANSWER FOR CHALLENGE SET 2
      valueOfButton = 'Australia'
   }else if(y == 'Brazil'){ // ANSWER FOR CHALLENGE SET 3
      valueOfButton = 'Brazil'
   }else if(y == 'Canada'){ // ANSWER FOR CHALLENGE SET 4
      valueOfButton = 'Canada'
   }else if(y === "China"){ // ANSWER FOR CHALLENGE SET 5
      valueOfButton = "China"
   }else if(y === "Denmark"){ // ANSWER FOR CHALLENGE SET 6
      valueOfButton = "Denmark"
   }else if(y === "Germany"){ // ANSWER FOR CHALLENGE SET 7
      valueOfButton = "Germany"
   }else if(y === "Greece"){ // ANSWER FOR CHALLENGE SET 8
      valueOfButton = "Greece"
   }else if(y === "Haiti"){ // ANSWER FOR CHALLENGE SET 9
      valueOfButton = "Haiti"
   }else if(y === "India"){ // ANSWER FOR CHALLENGE SET 10
      valueOfButton = "India"
   }else if(y === "Israel"){ // ANSWER FOR CHALLENGE SET 11
      valueOfButton = "Israel"
   }else if(y === "Italy"){ // ANSWER FOR CHALLENGE SET 12
      valueOfButton = "Italy"
   }else if(y === "Japan"){ // ANSWER FOR CHALLENGE SET 13
      valueOfButton = "Japan"
   }else if(y === "Mexico"){ // ANSWER FOR CHALLENGE SET 14
      valueOfButton = "Mexico"
   }else if(y === "Norway"){ // ANSWER FOR CHALLENGE SET 15
      valueOfButton = "Norway"
   }else if(y === "Russia"){ // ANSWER FOR CHALLENGE SET 16
      valueOfButton = "Russia"
   }else if(y === "South Africa"){ // ANSWER FOR CHALLENGE SET 17
      valueOfButton = "South Africa"
   }else if(y === "South Korea"){ // ANSWER FOR CHALLENGE SET 18
      valueOfButton = "South Korea"
   }else if(y === "Spain"){ // ANSWER FOR CHALLENGE SET 19
      valueOfButton = "Spain"
   }else if(y === "Sweden"){ // ANSWER FOR CHALLENGE SET 20
      valueOfButton = "Sweden"
   }else if( y === 1){
      valueOfButton = 'America'
   }else if(y === 2){
      valueOfButton = "Australia" 
   }else if(y === 3){
      valueOfButton = "Brazil"
   }else if(y === 4){
      valueOfButton = "Canada"
   }else if(y === 5){
      valueOfButton = "China"
   }else if(y === 6 ){
      valueOfButton = "Denmark"
   }else if(y === 7 ){
      valueOfButton = "Germany"
   }else if(y === 8 ){
      valueOfButton = "Greece"
   }else if(y === 9 ){
      valueOfButton = "Haiti"
   }else if(y === 10 ){
      valueOfButton = "India"
   }else if(y === 11 ){
      valueOfButton = "Israel"
   }else if(y === 12 ){
      valueOfButton = "Italy"
   }else if(y === 13 ){
      valueOfButton = "Japan"
   }else if(y === 14 ){
      valueOfButton = "Mexico"
   }else if(y === 15 ){
      valueOfButton = "Norway"
   }else if(y === 16 ){
      valueOfButton = "Russia"
   }else if(y === 17 ){
      valueOfButton = "South Africa"
   }else if(y === 18 ){
      valueOfButton = "South Korea"
   }else if(y === 19 ){
      valueOfButton = "Spain"
   }else if(y === 20 ){
      valueOfButton = "Sweden"
   }
   
   chal = document.getElementById(`challenge${x}`);
   // forButtons = 2;
   chal.children[z].setAttribute(`value`, `${valueOfButton}`);
   // forButtons+=1;
   // if(forButtons===6){
   //    forButtons=2;
   // }
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
      chal.children[6].children[1].remove(); // REMOVES THE 20th "NEXT" BUTTON
      
      // chal.children[6].insertAdjacentHTML("beforeend", submitButton)
      chal.children[6].appendChild(submitButton);

      Object.assign(submitButton,{
         type:"submit",
         value: "Submit Quiz",
         id: "submitQuiz",
         className: 'submit disabled'
      });

      // DISABLES THE SUBMIT BUTTON AT FIRST UNTIL THE LAST QUESTION IS ANSWERED
      submitButton.disabled = true;
      submitButton.className = "disabled"
   }  
}

function chooseCorrect(x){// ALLOWS THE USER TO SELECT AN OPTION BASED ON THE OPTIONS PROVIDED, HIGHLIGHT IT RED OR GREEN  
   let x1Parent1Child = x.parentElement.children
   if(countClicks < 1){

      if(x1Parent1Child[0].getAttribute("alt") == x.value){

         x.className = "correct"
         correct +=1
         total.innerHTML = ` <br/> ${correct}/${question} <br/> ${percent(correct/question)}%`
      }else{

         x.className = "wrong"
         wrong+=1
         total.innerHTML = ` <br/> ${correct}/${question} <br/> ${percent(correct/question)}%`
      }
   }

   countClicks = 1;
   //REVEALS SUBMIT BUTTON AND ENABLES IT
   enableSubmit()
}

function showAnswer(x){

   let x2Parent1Child = x.parentElement.parentElement.children
   if(countClicks <= 0){

      if(confirm("If you click 'ok' the question will be marked wrong :/")){

         for(y=2; y<8; y+=1){

            if(x2Parent1Child[0].getAttribute("alt") == x2Parent1Child[y].value){

               x2Parent1Child[y].className = "correct"

               total.innerHTML = ` <br/> ${correct}/${question} <br/> ${percent(correct/question)}%`
               wrong+=1;
               countClicks = 1;
               //REVEALS SUBMIT BUTTON AND ENABLES IT
               enableSubmit() 
            }
         }
      }
   }else{

      for(y=2; y<8; y+=1){

         if(x2Parent1Child[0].getAttribute("alt") == x2Parent1Child[y].value){

            if(x2Parent1Child[y].classList.contains("correct") && countClicks >=1){

               alert("Answer already selected")

            }else{

               x2Parent1Child[y].className = "correct"   
            }
         }
      }
      countClicks = 1 
   }  
}  
   
function next(x){

   if(countClicks === 0){
      // it should be marked wrong if they go to next without chosing
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

      if(question <= 20){ // RE UPDATE EVRYTIME A QUESTION IS ADDED, at 20

         question+=1
         total.innerHTML = ` <br/> ${correct}/${question} <br/> ${percent(correct/(question-1))}%`

         if( question === 2){             
            // show the next challenge
            loadChal(chalNum[1],false)
         }else if( question === 3){             
            // show the next challenge
            loadChal(chalNum[2], false);
         }else if(question === 4){
            // show the next challenge
            loadChal(chalNum[3], false);
         }else if(question === 5){
            // show the next challenge
            loadChal(chalNum[4], false);
         }else if(question === 6){
            // show the next challenge
            loadChal(chalNum[5], false);
         }else if(question === 7){
            // show the next challenge
            loadChal(chalNum[6], false);
         }else if(question === 8){
            // show the next challenge
            loadChal(chalNum[7], false);
         }else if(question === 9){
            // show the next challenge
            loadChal(chalNum[8], false);
         }else if(question === 10){
            // show the next challenge
            loadChal(chalNum[9], false);
         }else if(question === 11){
            // show the next challenge
            loadChal(chalNum[10], false);
         }else if(question === 12){
            // show the next challenge
            loadChal(chalNum[11], false);
         }else if(question === 13){
            // show the next challenge
            loadChal(chalNum[12], false);
         }else if(question === 14){
            // show the next challenge
            loadChal(chalNum[13], false);
         }else if(question === 15){
            // show the next challenge
            loadChal(chalNum[14], false);
         }else if(question === 16){
            // show the next challenge
            loadChal(chalNum[15], false);
         }else if(question === 17){
            // show the next challenge
            loadChal(chalNum[16], false);
         }else if(question === 18){
            // show the next challenge
            loadChal(chalNum[17], false);
         }else if(question === 19){
            // show the next challenge
            loadChal(chalNum[18], false);
         }else if(question === 20){
            // show the next challenge
            loadChal(chalNum[19], true);        
         }
      }        
   }           
}

function enableSubmit(){//REVEALS SUBMIT BUTTON AND ENABLES IT
   
   if(countClicks > 0){

      submitButton.className = "submit"
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

function darkMode(){ // DARK BACKGROUND

   let body = document.getElementById("body");
   let h3;
   let h1 = document.getElementById("title"); 
   let total = document.getElementById("total"); 
   let img = document.getElementsByTagName("IMG");
   let toggle = document.getElementById("toggle");

   body.classList.toggle("darkMode");
   body.classList.toggle("white")
   title.classList.toggle("white");
   total.classList.toggle("totalDark");
   toggle.setAttribute('title', "Light Mode")

   for(x=1; x<=20; x+=1){

      h3 = document.getElementById(`head${x}`);
      h3.classList.toggle("white")
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


