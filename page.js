console.log("connected");
var playerScore = 0;
var compScore = 0;
var r = document.getElementById('rock');
var p = document.getElementById('paper');
var s = document.getElementById('scissors');
const compScoreSpan = document.getElementById('computer-score');
const playerScoreSpan = document.getElementById('player-score');
var win = document.getElementById('win');
var lose = document.getElementById('lose');
var draw = document.getElementById('draw');



function compChoice(){
    var choice = ["r", "p", "s"];
    var get = Math.floor(Math.random()*3);
    return(choice[get]);

}
compChoice();

function drawf(){
        draw.style.display="block";
        lose.style.display="none";
        win.style.display="none";
}
function losef(){
        compScore++;
        console.log('comp '+compScore);
        compScoreSpan.innerHTML = compScore;
        lose.style.display="block";
        lose.style.color="red";
        win.style.display="none";
        draw.style.display="none";

}
function winf(){
        playerScore++;
        playerScoreSpan.innerHTML = playerScore;
        win.style.display="block";
        win.style.color="lightgreen";
        draw.style.display="none";
        lose.style.display="none";
}

 function game(userchoice){
    var choosen = compChoice();
    switch (choosen + userchoice) {
        case 'ss':
        case 'pp':
        case 'rr':
        drawf();
        break;
        case 'sp':
        case 'rs':
        case 'pr':
        losef();
        break;
        case 'ps':
        case 'sr':
        case 'rp':
        winf();
    }
}

game();


function main(){
r.addEventListener('click', function(){
   game('r');
});
p.addEventListener('click', function(){
    game('p');
});
s.addEventListener('click', function(){
    game('s');
});

}
main();



