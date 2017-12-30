	      // Змінні
	var globalScore = 0;
	var container = document.getElementsByClassName('global-container');
	var speedTime = 1000;     
	      // Функції
	var displayScore = function(){
		score.innerHTML = globalScore;
	}

	var missClick = function(){
		globalScore -= 150;
		var scoreMinus = document.createElement('div');
		container[0].appendChild(scoreMinus);
		scoreMinus.className = "scorePlus";
		var pScoreMinus = document.createElement('div');
		scoreMinus.appendChild(pScoreMinus);
		pScoreMinus.className = "pScoreMinus";
		pScoreMinus.innerHTML = "-150"
		var top = Math.floor(Math.random()*100);
		var left = Math.floor(Math.random()*100);
		pScoreMinus.style.marginLeft = left + "px";
		pScoreMinus.style.marginTop = top + "px";

		setTimeout(function(){
		pScoreMinus.remove();
		scoreMinus.remove();
	}, 590);
	}

	var close_bomb = function(bomb){
		globalScore += 150;
		bomb.style.border = "1px solid #9eecd8";
		bomb.style.backgroundColor = "transparent";
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


    	// After Start
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

		var bombsAppearTimer = setInterval(bombsAppear, 1000);

			// 1 Round
	setTimeout(function(){
		clearInterval(bombsAppearTimer);
		var bombsAppearTimer2 = setInterval(bombsAppear, 1000);
		setTimeout(function(){
			clearInterval(bombsAppearTimer2);
		}, 4999);
	},5000);
	setTimeout(function(){
		var bombsAppearTimer2 = setInterval(bombsAppear, 700);
		setTimeout(function(){
			clearInterval(bombsAppearTimer2);
		}, 4999);
	},10000);
	setTimeout(function(){
		var bombsAppearTimer2 = setInterval(bombsAppear, 600);
		setTimeout(function(){
			clearInterval(bombsAppearTimer2);
		}, 4999);
	},15000);
	setTimeout(function(){
		var bombsAppearTimer2 = setInterval(bombsAppear, 500);
		setTimeout(function(){
			clearInterval(bombsAppearTimer2);
		}, 4999);
	},20000);
	setTimeout(function(){
		var bombsAppearTimer2 = setInterval(bombsAppear, 400);
		setTimeout(function(){
			clearInterval(bombsAppearTimer2);
		}, 4999);
	},25000);
	setTimeout(function(){
		var bombsAppearTimer2 = setInterval(bombsAppear, 300);
		setTimeout(function(){
			clearInterval(bombsAppearTimer2);
		}, 4999);
	},30000);
	setTimeout(function(){
		var bombsAppearTimer2 = setInterval(bombsAppear, 100);
		setTimeout(function(){
			clearInterval(bombsAppearTimer2);
		}, 4999);
	},36000);

			// 2 Round

	setTimeout(function(){
		var roundTwo_p = document.createElement('div');
		roundTwo_p.innerHTML = "Round 2";
		container[0].appendChild(roundTwo_p);
		roundTwo_p.className = "roundTwo_p";

		// setTimeout(function(){
		// 	clearInterval(bombsAppearTimer2);
		// }, 4999);
	},42000);


}

	setInterval(displayScore, 300);