let answer = Math.floor(Math.random()*100);
const res = document.getElementById("resultText");
let guesess = 0;

document.getElementById("submitBtn").onclick = function(){

    let guess = document.getElementById("guessField").value;
    
    guesess += 1;

    if (guess > 100){
        res.textContent = "You're over the range";
    } else if (guess < 0){
        res.textContent = "You're under the range";
    } else if(guess == ""){
        res.textContent = "Please enter number bewteen 0 - 100!";  
    } else if(guess == answer) {
        res.textContent = `The answer is ${answer}. It took you ${guesess} guesess`;
    } else if (guess < answer) {
        res.textContent = "Too small!"
        document.getElementById("guessField").value = ""; 
    } else
    res.textContent = "Too large!";
    document.getElementById("guessField").value = ""; 

}

document.getElementById("resetBtn").onclick = function(){
    answer = Math.floor(Math.random()*100 + 1);
    document.getElementById("guessField").value = "";
    res.textContent = "";
    guesess = 0;
}

document.getElementById("giveAnswerBtn").onclick = function (){
    res.textContent = `The answer is ${answer}`;
}