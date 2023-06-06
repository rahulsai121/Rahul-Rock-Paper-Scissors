let score=JSON.parse
(localStorage.getItem('score'))||{
        wins:0,
        loses:0,
        ties:0
    };


updateScoreElement();

console.log();
function playGame(playerMove){
    const counterMove= pickComputerMove();
    let result='';

    if(playerMove==='rock'){

        if(counterMove==='rock'){result='Tie';}
        else if(counterMove==='paper'){result='You lose';}
        else if(counterMove==='scissors'){result='You win';}


    }


    if (playerMove==='scissors'){
        
        if(counterMove==='rock'){result='You lose';}
        else if(counterMove==='paper'){result='You win';}
        else if(counterMove==='scissors'){result='Tie';}
    }

    if(playerMove==='paper'){
        if(counterMove==='rock'){result='You win';}
        else if(counterMove==='paper'){result='Tie';}
        else if(counterMove==='scissors'){result='You lose';}

    }

    if(result==='You win'){
        score.wins++;
    }
    else if(result==='You lose'){
        score.loses++;
    }
    else{
        score.ties++;
    }

    localStorage.setItem('score',JSON.stringify( score));


    updateScoreElement();

    document.querySelector('.js-result').innerHTML=
    result;

    document.querySelector('.js-moves').innerHTML=
    `You 
    <img src="image/${playerMove}-emoji.png"
    class="move-icon">
     
    <img src="image/${counterMove}-emoji.png"
    class="move-icon"> computer
    `;

   
}

function updateScoreElement() {
        document.querySelector('.js-score').innerHTML
        =`Wins:${score.wins}, Loses:${score.loses},
         Tie:${score.ties}`;
     }

function pickComputerMove(){
    const randomNum=Math.random();
    let counterMove='';
    if(randomNum>=0 && randomNum<(1/3)){counterMove='rock'}
    else if(randomNum>=(1/3) && randomNum<(2/3)){ counterMove='paper'}
    else if(randomNum>=(2/3) && randomNum<=(1)){ counterMove='scissors'};
    return counterMove;
}