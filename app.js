let gameSeq = [];
let userSeq = [];

let boxColor = ["red", "yellow", "green", "orange"];

let isStart = false;
let level = 0;
let Score = 0;

let Highest_Score = document.createElement("h2");
document.body.appendChild(Highest_Score);


document.addEventListener("keydown", function(){
    if(isStart == false){
        isStart = true;    
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },350);
}

function levelUp(){
    userSeq=[];
    let h3 = document.querySelector("h3");
    h3.style.color = "blue";
    h3.innerText = `Level ${++level}`;

        let random = Math.floor(Math.random()*3);
        let ranColor = boxColor[random];
        let ranBtn = document.querySelector(`.${ranColor}`);
        btnFlash(ranBtn);
        gameSeq.push(ranBtn);
}

function isBtnSame(idx){

    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        }
        // setTimeout(levelUp(),1000);
    }else{
        let h3 = document.querySelector("h3");
        // h3.style.color = "red";
        // if(Score < level){
        //     Score = level;
        // }
        Score = Math.max(Score, level);
        h3.innerHTML = `Game Over! <b>Your Score Was "${level}"</b> </br>Press any key to Start Again`;
        Highest_Score.innerHTML = `<h2>Highest Score : <b>${Score}</b></h2>`;

        reset();
        
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    userSeq.push(btn);

    isBtnSame(userSeq.length-1);

}

let btns = document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    isStart = false;
    gameSeq= [];
    userSeq =[];
    level =0;
}

