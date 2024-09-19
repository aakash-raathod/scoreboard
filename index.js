let timeleft=3600;
let countdown;


function startGame(){
    timeleft=3600;
    let homescore = document.getElementById("home-score");
    let guestscore = document.getElementById("guest-score");
    guestscore.innerHTML=0;
    homescore.innerHTML = 0;
    console.log("button clicked");
    if(countdown){
    clearInterval(countdown);
    }
    countdown= setInterval(function(){
    let minutes = Math.floor(timeleft/60);
    let seconds = timeleft%60;
    seconds =seconds<10?"0"+seconds:seconds;
    document.getElementById("timer-el").innerHTML = minutes+":"+seconds;
    if(timeleft<=0){
        clearInterval(countdown);
        document.getElementById("timer-el").innerHTML = "Timeout"
    }
    timeleft--;
}, 1000);
}


function updateScore(team,points){
    console.log("button")
    let scoreEl = document.getElementById(team+"-score")
    let currentScore = parseInt(scoreEl.innerHTML);
    let newScore = currentScore+ points;
    console.log(newScore);
    console.log(currentScore);
    console.log(scoreEl);
    scoreEl.innerHTML = newScore;
    

}

function newGame()
{
    if(countdown){
        clearInterval(countdown)
    }
    let homeScore = document.getElementById('home-score');
    homeScore.innerHTML = 0;
    let guestScore = document.getElementById('guest-score');
    guestScore.innerHTML = 0;
    let timeleft = document.getElementById('timer-el');
    timeleft.innerHTML = "60:00";
}