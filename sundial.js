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
			var primahora = ortus.getHours() > 12 ? ortus.getHours() - 12 : ortus.getHours();
			var ampm1 = ortus.getHours() >= 12 ? " pm" : " am";
			var primaminuta = ortus.getMinutes();
			var sethour = occisus.getHours() > 12 ? occisus.getHours() - 12 : occisus.getHours();
			var ampm13 = occisus.getHours() >= 12 ? " pm" : " am";
			var setminute = occisus.getMinutes();
			var length = (cadit - surgit) / 720000;
			var lengthminutes = Math.floor(length);
			var lengthrawseconds = (length - lengthminutes) * 60;
			var lengthseconds = Math.round(lengthrawseconds);
			var hora = (cadit - surgit) / 12;
			var secondtime = surgit + hora;
			var hourtwo = new Date(secondtime);
			var secundahora = hourtwo.getHours() > 12 ? hourtwo.getHours() - 12 : hourtwo.getHours();
			var ampm2 = hourtwo.getHours() >= 12 ? " pm" : " am";
			var secundaminuta = hourtwo.getMinutes();
			var thirdtime = secondtime + hora;
			var hourthree = new Date(thirdtime);
			var tertiahora = hourthree.getHours() > 12 ? hourthree.getHours() - 12 : hourthree.getHours();
			var ampm3 = hourthree.getHours() >= 12 ? " pm" : " am";
			var tertiaminuta = hourthree.getMinutes();
			var fourthtime = thirdtime + hora;
			var hourfour = new Date(fourthtime);
			var quartahora = hourfour.getHours() > 12 ? hourfour.getHours() - 12 : hourfour.getHours();
			var ampm4 = hourfour.getHours() >= 12 ? " pm" : " am";
			var quartaminuta = hourfour.getMinutes();
			var fifthtime = fourthtime + hora;
			var hourfive = new Date(fifthtime);
			var quintahora = hourfive.getHours() > 12 ? hourfive.getHours() - 12 : hourfive.getHours();
			var ampm5 = hourfive.getHours() >= 12 ? " pm" : " am";
			var quintaminuta = hourfive.getMinutes();
			var sixthtime = fifthtime + hora;
			var hoursix = new Date(sixthtime);
			var sextahora = hoursix.getHours() > 12 ? hoursix.getHours() - 12 : hoursix.getHours();
			var ampm6 = hoursix.getHours() >= 12 ? " pm" : " am";
			var sextaminuta = hoursix.getMinutes();
			var seventhtime = sixthtime + hora;
			var hourseven = new Date(seventhtime);
			var septimahora = hourseven.getHours() > 12 ? hourseven.getHours() - 12 : hourseven.getHours();
			var ampm7 = hourseven.getHours() >= 12 ? " pm" : " am";
			var septimaminuta = hourseven.getMinutes();
			var eighthtime = seventhtime + hora;
			var houreight = new Date(eighthtime);
			var octavahora = houreight.getHours() > 12 ? houreight.getHours() - 12 : houreight.getHours();
			var ampm8 = houreight.getHours() >= 12 ? " pm" : " pm";
			var octavaminuta = houreight.getMinutes();
			var ninthtime = eighthtime + hora;
			var hournine = new Date(ninthtime);
			var nonahora = hournine.getHours() > 12 ? hournine.getHours() - 12 : hournine.getHours();
			var ampm9 = hournine.getHours() >= 12 ? " pm" : " am";
			var nonaminuta = hournine.getMinutes();
			var tenthtime = ninthtime + hora;
			var hourten = new Date(tenthtime);
			var decimahora = hourten.getHours() > 12 ? hourten.getHours() - 12 : hourten.getHours();
			var ampm10 = hourten.getHours() >= 12 ? " pm" : " pm";
			var decimaminuta = hourten.getMinutes();
			var eleventhtime = tenthtime + hora;
			var houreleven = new Date(eleventhtime);
			var undecimahora = houreleven.getHours() > 12 ? houreleven.getHours() - 12 : houreleven.getHours();
			var ampm11 = houreleven.getHours() >= 12 ? " pm" : " pm";
			var undecimaminuta = houreleven.getMinutes();
			var twelfthtime = eleventhtime + hora;
			var hourtwelve = new Date(twelfthtime);
			var duodecimahora = hourtwelve.getHours() > 12 ? hourtwelve.getHours() - 12 : hourtwelve.getHours();
			var ampm12 = hourtwelve.getHours() >= 12 ? " pm" : " pm";
			var duodecimaminuta = hourtwelve.getMinutes();
			document.getElementById("hours").innerHTML = pad2(lengthminutes) + ":" + pad2(lengthseconds) + "&nbsp;&nbsp;&nbsp;";
			document.getElementById("prima").innerHTML = pad2(primahora) + ":" + pad2(primaminuta) + ampm1;
			document.getElementById("secunda").innerHTML = pad2(secundahora) + ":" + pad2(secundaminuta) + ampm2;
			document.getElementById("tertia").innerHTML = pad2(tertiahora) + ":" + pad2(tertiaminuta) + ampm3;
			document.getElementById("quarta").innerHTML = pad2(quartahora) + ":" + pad2(quartaminuta) + ampm4;
			document.getElementById("quinta").innerHTML = pad2(quintahora) + ":" + pad2(quintaminuta) + ampm5;
			document.getElementById("sexta").innerHTML = pad2(sextahora) + ":" + pad2(sextaminuta) + ampm6;
			document.getElementById("septima").innerHTML = pad2(septimahora) + ":" + pad2(septimaminuta) + ampm7;
			document.getElementById("octava").innerHTML = pad2(octavahora) + ":" + pad2(octavaminuta) + ampm8;
			document.getElementById("nona").innerHTML = pad2(nonahora) + ":" + pad2(nonaminuta) + ampm9;
			document.getElementById("decima").innerHTML = pad2(decimahora) + ":" + pad2(decimaminuta) + ampm10;
			document.getElementById("undecima").innerHTML = pad2(undecimahora) + ":" + pad2(undecimaminuta) + ampm11;
			document.getElementById("duodecima").innerHTML = pad2(duodecimahora) + ":" + pad2(duodecimaminuta) + ampm12;
			document.getElementById("sunset").innerHTML = pad2(sethour) + ":" + pad2(setminute) + ampm13;
		}
		
	});
});

}