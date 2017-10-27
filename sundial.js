function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showTimes);
    } else {
        document.getElementById("hours").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function pad2(number) {
   
     return (number < 10 ? '0' : '') + number
   
}

function showTimes(position) {
$(document).ready(function(){
	$.ajax({
		url: "https://api.sunrise-sunset.org/json?lat=" + position.coords.latitude + "&lng=" + position.coords.longitude + "&date=today&formatted=0",
		dataType: "json",
		complete: function(data){
			var response = data.responseJSON;
			var results = response.results;
			var sunrise = results.sunrise;
			var sunset = results.sunset;
			var ortus = new Date(sunrise);
			var occisus = new Date(sunset);
			var surgit = ortus.getTime();
			var cadit = occisus.getTime();
			var primahora = ortus.getHours();
			var primaminuta = ortus.getMinutes();
			var sethour = occisus.getHours();
			var setminute = occisus.getMinutes();
			var length = (cadit - surgit) / 720000;
			var lengthminutes = Math.floor(length);
			var lengthrawseconds = (length - lengthminutes) * 60;
			var lengthseconds = Math.round(lengthrawseconds);
			var hora = (cadit - surgit) / 12;
			var secondtime = surgit + hora;
			var hourtwo = new Date(secondtime);
			var secundahora = hourtwo.getHours();
			var secundaminuta = hourtwo.getMinutes();
			var thirdtime = secondtime + hora;
			var hourthree = new Date(thirdtime);
			var tertiahora = hourthree.getHours();
			var tertiaminuta = hourthree.getMinutes();
			var fourthtime = thirdtime + hora;
			var hourfour = new Date(fourthtime);
			var quartahora = hourfour.getHours();
			var quartaminuta = hourfour.getMinutes();
			var fifthtime = fourthtime + hora;
			var hourfive = new Date(fifthtime);
			var quintahora = hourfive.getHours();
			var quintaminuta = hourfive.getMinutes();
			var sixthtime = fifthtime + hora;
			var hoursix = new Date(sixthtime);
			var sextahora = hoursix.getHours();
			var sextaminuta = hoursix.getMinutes();
			var seventhtime = sixthtime + hora;
			var hourseven = new Date(seventhtime);
			var septimahora = hourseven.getHours();
			var septimaminuta = hourseven.getMinutes();
			var eighthtime = seventhtime + hora;
			var houreight = new Date(eighthtime);
			var octavahora = houreight.getHours();
			var octavaminuta = houreight.getMinutes();
			var ninthtime = eighthtime + hora;
			var hournine = new Date(ninthtime);
			var nonahora = hournine.getHours();
			var nonaminuta = hournine.getMinutes();
			var tenthtime = ninthtime + hora;
			var hourten = new Date(tenthtime);
			var decimahora = hourten.getHours();
			var decimaminuta = hourten.getMinutes();
			var eleventhtime = tenthtime + hora;
			var houreleven = new Date(eleventhtime);
			var undecimahora = houreleven.getHours();
			var undecimaminuta = houreleven.getMinutes();
			var twelfthtime = eleventhtime + hora;
			var hourtwelve = new Date(twelfthtime);
			var duodecimahora = hourtwelve.getHours();
			var duodecimaminuta = hourtwelve.getMinutes();
			document.getElementById("hours").innerHTML = pad2(lengthminutes) + ":" + pad2(lengthseconds);
			document.getElementById("prima").innerHTML = pad2(primahora) + ":" + pad2(primaminuta);
			document.getElementById("secunda").innerHTML = pad2(secundahora) + ":" + pad2(secundaminuta);
			document.getElementById("tertia").innerHTML = pad2(tertiahora) + ":" + pad2(tertiaminuta);
			document.getElementById("quarta").innerHTML = pad2(quartahora) + ":" + pad2(quartaminuta);
			document.getElementById("quinta").innerHTML = pad2(quintahora) + ":" + pad2(quintaminuta);
			document.getElementById("sexta").innerHTML = pad2(sextahora) + ":" + pad2(sextaminuta);
			document.getElementById("septima").innerHTML = pad2(septimahora) + ":" + pad2(septimaminuta);
			document.getElementById("octava").innerHTML = pad2(octavahora) + ":" + pad2(octavaminuta);
			document.getElementById("nona").innerHTML = pad2(nonahora) + ":" + pad2(nonaminuta);
			document.getElementById("decima").innerHTML = pad2(decimahora) + ":" + pad2(decimaminuta);
			document.getElementById("undecima").innerHTML = pad2(undecimahora) + ":" + pad2(undecimaminuta);
			document.getElementById("duodecima").innerHTML = pad2(duodecimahora) + ":" + pad2(duodecimaminuta);
			document.getElementById("sunset").innerHTML = pad2(sethour) + ":" + pad2(setminute);
		}
		
	});
});

}