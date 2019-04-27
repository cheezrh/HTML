function pressed()
{
	alert("You clicked the button!");
}

function pressed2()
{
	alert("You've clicked the other button!");
}

document.getElementById("pressed").onclick = function() {
	pressed();
}

document.getElementById("pressed2").onclick = function() {
	pressed2();
}