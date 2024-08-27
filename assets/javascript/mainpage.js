let connecting = 1
let connected = 0
let connectfailed = 0
let loadvalue = 0
let definingloadvalue = 0
const inverTal = setInterval(IncreLoad, 1);
const serverNum = Math.floor(Math.random() * 30) + 1;

function animSwap() {
	if (connecting == 1) { 
		document.getElementById("connanim").src = "assets/animations/nintra_connectfailed.gif"; document.getElementById("conntext").innerHTML = "<span>Could not find an available server.<br>Please try again later.</span>"; connecting -= 1; connectfailed += 1
	}
}

function IncreLoad() {
	if (definingloadvalue <= 100) {
		definingloadvalue += 0.1;
	}
	if (definingloadvalue >= 100) {
		definingloadvalue = 100
	}
	if (definingloadvalue == 100) {
		animSwap();
		clearInterval(inverTal)
	}
}

