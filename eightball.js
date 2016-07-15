var answers = new Array();
	answers[0] = "My reply is no.";
	answers[1] = "Don\u2019t count on it.";
	answers[2] = "Probably not.";
	answers[3] = "Reply hazy, try again later.";
	answers[4] = "Your outlook is good.";
	answers[5] = "My answer is yes."
	answers[6] = "Probably.";

function answer()
{
	var x = Math.floor(Math.random()*6);
	document.getElementById('answer').value=answers[x];
}

function clearBox()
{
        document.getElementById('question').value = "";
}