// Iteration 2: Generate 2 random number and display it on the screen
let score=0;
let n1;
let n2;

let generateRandomNumber=()=>{
    let randomNumber=Math.floor(Math.random()*100);
    return randomNumber;
}

// Iteration 3: Make the options button functional

let lesserThanFunction=()=>{
    if(n1<n2){
        score+=1;
    }
    clearInterval(timer1);
    displayRandomNumbers();
}

let greaterThanFunction=()=>{
    if(n1>n2){
        score+=1;
    }
    clearInterval(timer1);
    displayRandomNumbers();
}

let equalToFunction=()=>{
    if(n1>n2){
        score+=1;
    }
    clearInterval(timer1);
    displayRandomNumbers();
}

// console.log(flag,a);

document.getElementById("lesser-than").addEventListener("click",lesserThanFunction);

document.getElementById("greater-than").addEventListener("click",greaterThanFunction);

document.getElementById("equal-to").addEventListener("click",equalToFunction);

// Iteration 4: Build a timer for the game

let timer1,timer2;
let a=5;b=20;
let startTimer=()=>{

    // console.log(flag,a,score,b,n1,n2);

 timer1=setInterval(()=>{

    console.log(a,score,b,n1,n2);

    if(a==0){

        clearInterval(timer1);

        gameOver();
    }

    document.getElementById("timer").innerText=a;

    a--;

},1000);
}


let displayRandomNumbers=()=>{

    document.getElementById("number1").innerText=null;
    document.getElementById("number2").innerText=null;

    n1=generateRandomNumber();
    n2=generateRandomNumber();

    document.getElementById("number1").innerText=n1;
    document.getElementById("number2").innerText=n2;

    a=5;
   
    startTimer();

}

displayRandomNumbers();

let gameOver=()=>{
    score=sessionStorage.setItem("score",score);
    window.location.href="gameover.html";
    
}
