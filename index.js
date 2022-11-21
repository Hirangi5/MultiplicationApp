const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
// console.log(num1);
const questionEl = document.getElementById("question");
questionEl.innerHTML = `What is ${num1} multiplied by ${num2}?`

const correctAns = num1*num2;
const inputE1 = document.getElementById("input");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

const formE1 = document.getElementById("form");
formE1.addEventListener("submit", ()=>{
const userAns = +inputE1.value 
if(userAns ===correctAns){
 score++;
 updateLocalStorage()
}

else{
    score--;
    updateLocalStorage()
}
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}
// console.log(score)

const scoreE1 = document.getElementById("score");
scoreE1.innerText = `score:${score}`;