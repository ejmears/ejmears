function dice()
{
	var x = Math.floor((Math.random()*6) + 1);
	var y = Math.floor((Math.random()*6) + 1);
	document.getElementById("answer1").src=x+".gif";
	document.getElementById("answer2").src=y+".gif";
}