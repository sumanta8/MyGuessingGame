'use strict';

let goldenNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

function decreaseScore(){
    score--;
}

function updateScore(){
    document.querySelector('.score').textContent = score;
}

const startAction = function()
{
    const guess = Number(document.querySelector('.guess').value);
    if(guess === goldenNumber){
        document.querySelector('.message').textContent = '🎉 Congratulations!!!';
        document.querySelector('.number').innerHTML = goldenNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
    }
    else if(guess){
        if(score > 1){
            if(guess < goldenNumber){
                document.querySelector('.message').textContent = '📉 Too low!!!';
            }
            else{
                document.querySelector('.message').textContent = '📈 Too high!!!';
            }
            decreaseScore();
            updateScore();
        }
        else{
            document.querySelector('.message').textContent = '💥 You lost the game!!!';
            document.querySelector('body').style.backgroundColor = '#ff0000';
        }
    }
    else{
        document.querySelector('.message').textContent = '⛔ No Number!!!';
    }
}

const resetGame = function()
{
    goldenNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    updateScore();
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value='';
    document.querySelector('.number').innerHTML = '?';
    document.querySelector('body').style.backgroundColor = '#222';
}

document.querySelector('.check').addEventListener('click', startAction);
document.querySelector('.again').addEventListener('click', resetGame);