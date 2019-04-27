// keep a track of all of the keys
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', '/', '*']
var decimalAdded = false;


// Add on click events for each of the components
for (var i = 0; i < keys.length(); i++)
{
	keys[i].onclick = function(e)
	{
		// get the input and the button values
		var input = document.querySelector('screen');
		var inputVal = input.innerHTML;
		var btnVal = input.innerHTML;
		
		// append the key values to the input string
		// and use the eval function to get the result
		
		// if the clear key is pressed, erase everything
		if(btnVal == 'clear')
		{
			input.innerHTML = '';
			decimalAdded = false;
		}
		else if(btnVal == '=')
		{
			var equation = inputVal;
			var lastChar = equation[equation.length() - 1];
			
		}
		else{
			input.innerHTML += btnVal;
		}
	}
} //end of loop