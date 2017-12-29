	var globalScore = 0;
	var displayScore = function(){
		score.innerHTML = globalScore;
	}

	var close_bomb = function(bomb){
		var container = document.getElementsByClassName('global-container');
		globalScore += 75;
		// bomb.remove();
		bomb.style.border = "1px solid #9eecd8";
		bomb.style.backgroundColor = "transparent";
		// bomb.style.animationName = "none";
		var scorePlus = document.createElement('div');
		container[0].appendChild(scorePlus);
		scorePlus.className = "scorePlus";
		var pScorePlus = document.createElement('div');
		scorePlus.appendChild(pScorePlus);
		pScorePlus.className = "pScorePlus";
		pScorePlus.innerHTML = "+75"
		var top = Math.floor(Math.random()*100);
		var left = Math.floor(Math.random()*100);
		pScorePlus.style.marginLeft = left + "px";
		pScorePlus.style.marginTop = top + "px";

		setTimeout(function(){
			pScorePlus.remove();
			scorePlus.remove();
		}, 590);
	}

	var bombsAppear = function(){
		// var bombCouner = 0;
		// var globalBomb = document.getElementsByClassName('bomb');
		// for(var i = 0; i < globalBomb.length; i++){
		// 	bombCouner++;
		// }
			var container = document.getElementsByClassName('global-container');
			var bomb = document.createElement('div');
			container[0].appendChild(bomb);
			bomb.className = "bomb";
			bomb.setAttribute("onclick", "close_bomb(this)");

			var top = Math.floor(Math.random()*90);
			var left = Math.floor(Math.random()*80);
			// bomb.style = "margin-top:" + top + ";" + "margin-left:" + left + ";";
			bomb.style.marginLeft = left + "%";
			bomb.style.marginTop = top + "vh";
			setTimeout(function(){
				bomb.remove();
			}, 1990);
	}

var close_startBomb = function(bomb){
	var startTitle = document.getElementsByClassName('start-button');
	var blackScreen = document.getElementsByClassName('blackScreen');
	setTimeout(function(){
		blackScreen[0].remove();
		bomb.remove();
		startTitle[0].remove();
	}, 1800);
	blackScreen[0].style.animationName = "startBomb-close-animation";
	bomb.style.animationName = "startBomb-close-animation";
	startTitle[0].style.animationName = "startBomb-close-animation";
	globalScore = 0;
}

	setInterval(bombsAppear, 500);
	setInterval(displayScore, 300);