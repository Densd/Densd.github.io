var close_charter = function(){
	var window = document.getElementById("charter-wrapper");
	window.style.opacity = 0;
	window.style.zIndex = -1;
	var close_button = document.getElementById("close_button");
	close_button.style.opacity = 0;
}

var open_charter = function(){
	var window = document.getElementById("charter-wrapper");
	window.style.opacity = 1;
	window.style.zIndex = 0;
	var close_button = document.getElementById("close_button");
	close_button.style.opacity = 1;
	close_button.style.top = "10px";
}

var close_candidats = function(){
	var window = document.getElementById("candidats-wrapper");
	window.style.opacity = 0;
	window.style.zIndex = -1;
	var close_button = document.getElementById("close_button");
	close_button.style.opacity = 0;
}

var open_candidats = function(){
	var window = document.getElementById("candidats-wrapper");
	window.style.opacity = 1;
	window.style.zIndex = 0;
	var close_button = document.getElementById("close_button");
	close_button.style.opacity = 1;
	close_button.style.top = "136px";
}

var open_consist = function(){
	window.open('http://www.uo.net.ua/status/guild/19.html');
}



var info_about = function(){
	var window = document.getElementById("form");
	var container = document.getElementById("form-container");
	// container.style.paddingTop = "172px";
	window.style.border = "3px solid rgba(204, 58, 58, 1)";
	setTimeout(function(){
		// container.style.paddingTop = "175px";
		window.style.border = "3px solid rgba(204, 58, 58, 0)";
	}, 2000);
}