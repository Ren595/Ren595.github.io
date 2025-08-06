/* jshint esversion: 6 */

//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}
}
function show(pgno){ //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage=document.querySelector("#page"+pgno);
    onepage.style.display="block"; //show the page
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});
page4btn.addEventListener("click", function () {
    show(4);
});
hideall();
show(2);

/*JS for hamMenu */
const hamBtn=document.querySelector("#hamIcon");
const menuItemsList=document.querySelector("nav ul");
hamBtn.addEventListener("click",toggleMenus);

function toggleMenus(){ /*open and close menu*/
    //if menuItemsList dont have the class "menuShow", add it, else remove it
    menuItemsList.classList.toggle("menuShow");
    //if menu is showing (has the class “menuShow”)
    if(menuItemsList.classList.contains("menuShow")) {
        hamBtn.className='closeMenu'; //change button text to chose menu
    }   else { //if menu NOT showing
        hamBtn.className='openMenu'; //change button text open menu
    }
}

const wotageiTerms = ["Uchishi (打ち師)", "Waza (技)", "Sabi Waza (サビ技)", "O-Eight (〇エイト)", "Wazaren (技連)", "Torch (トーチ)", "Chinese Waza (中国技)", "Ori-waza (オリ技)"];
const wotageiTermsExplanation = ["Refers to someone who practices and performs wotagei.",
                                "Literally translating to 'skill/technique,' it denotes one whole action in wotagei.",
                                "This type of waza is performed during the chorus",
                                "In wotagei, every sabi waza is structured around 32 counts, comprising 8 counts repeated four times. Each set of 8 counts is known as an 'O-Eight'.",
                                "This term refers to a video format showcasing multiple wotagei waza consecutively.",
                                "Torch is a subset of wotagei waza that includes Torch theories. These theories, loosely based on torch twirling, represent advanced techniques for creating circles in wotagei.",
                                "Chinese waza typically align with the wotagei style popularized by Yoruru, a well-known Chinese uchishi.",
                                "This term means 'original skill' in wotagei, it represents an uchishi's unique waza."];


const dynamicArea = document.querySelector("#dynamicArea");
for (let i = 0; i < 8; i++) {
    var newDiv = document.createElement('div');
    newDiv.className = "flexItemDF boxBackground";
    dynamicArea.appendChild(newDiv);
    var header = document.createElement('h4');
    header.textContent = wotageiTerms[i];
    header.id = i;
    newDiv.appendChild(header);
}

dynamicArea.addEventListener("click",switchContent);

function switchContent(evt){
    var sender = evt.target;
    var mainSender = sender.closest(".flexItemDF");
    if (sender.tagName == "P") {
        mainSender.innerHTML = `<h4 id="${sender.id}">${wotageiTerms[parseInt(sender.id)]}</h4>`;
    }   else {
        mainSender.innerHTML = `<p id="${sender.id}">${wotageiTermsExplanation[parseInt(sender.id)]}</p>`;
    }
}

var startButton = document.querySelector('#startButton');
var endButton = document.querySelector('#endQuiz');
var quizSection = document.querySelector('#quizSection');

startButton.addEventListener("click", startQuiz);
endButton.addEventListener("click", removeAudio);

const audio = new Audio("audios/Idol-YOASOBI.mp3");
function startQuiz() {
    quizSection.style.display = "block";
    audio.play();
}

const btnSubmit=document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click",CheckAns);
const scorebox=document.querySelector("#scorebox");
var q1,q2,score=0;

function CheckAns(){
    score=0; //reset score to 0, check ans and give score if correct
    //read the value of the selected radio button for q1
    q1=document.querySelector("input[name='q1']:checked").value;
    if(q1=="Chorus")score++;
    //read the value of the selected radio button for q2
    q2=document.querySelector("input[name='q2']:checked").value;
    if(q2=="166")score++;
    scorebox.innerHTML="Score:"+score;
}

function removeAudio() {
    quizSection.style.display = "none";
    audio.pause();
}
