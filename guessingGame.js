var randomNumber = Math.floor(Math.random()*100)+1;
var guessCount = 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessField = document.querySelector('.guessField');
var guessSubmit = document.querySelector('.guessSubmit');

var resetButton;

function checkGuess()
{
	
	var userGuess = Number(guessField.value);
	
	if(userGuess < 1 || userGuess > 100)
	{
		alert("NUMBER NEEDS TO BE BETWEEN 1 AND 100!!");
	}
	else
	{
		if(guessCount === 1)
		{
			guesses.textContent = 'Previous Guesses: ' + userGuess + ' ';
		}
		else
		{
			guesses.textContent += userGuess + ' ';
		}
		
		if(userGuess === randomNumber)
		{
			lastResult.textContent = 'Congratulations! You guessed the right number! ';
			lastResult.textContent += 'It took you ' + guessCount + ' guesses.'; 
			setGameOver();
		}
		else if(guessCount === 10)
		{
			alert("GAME OVER! THE CORRECT NUMBER WAS: " + randomNumber);
			setGameOver();
		}
		else
		{
			lastResult.textContent = 'WRONG!';
			if(userGuess < randomNumber)
			{
				lowOrHi.textContent = userGuess + ' is too low';
			}
			else if(userGuess > randomNumber)
			{
				lowOrHi.textContent = userGuess + ' is too high';
			}
		}
			
		guessCount++;
	}

}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver()
{
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement('button');
	resetButton.textContent = 'Start a new game';
	document.body.appendChild(resetButton);
	resetButton.addEventListener('click', resetGame);
}

function resetGame()
{
	guessCount = 1;
	randomNumber = Math.floor(Math.random()*100)+1;
	var resetParas = document.querySelectorAll('.resultParas p');
	for(var i = 0; i < resetParas.length; i++)
	{
		resetParas[i].textContent = '';
	}
	guessField.disabled = false;
	guessSubmit.disabled = false;
	resetButton.parentNode.removeChild(resetButton);
}