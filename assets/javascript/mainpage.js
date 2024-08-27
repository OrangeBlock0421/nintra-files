let connecting = 1
let connected = 0
let connectfailed = 0
let loadvalue = 0
let definingloadvalue = 0
const inverTal = setInterval(IncreLoad, 1);
const serverNum = Math.floor(Math.random() * 30) + 1;

function animSwap() {
	if (connecting == 1) { 
		document.getElementById("connanim").src = "assets/animations/nintra_connectfailed.gif";
		if (serverNum <= 10) {
			document.getElementById("conntext").innerHTML = "<span>Connection to SV00" + serverNum + " Failed<br><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504'>HTTP 504: Gateway Timeout</a></span>";
		}
		if (serverNum >= 10) {
			document.getElementById("conntext").innerHTML = "<span>Connection to SV0" + serverNum + " Failed<br><a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504'>HTTP 504: Gateway Timeout</a></span>";
		}
		connecting -= 1;
		connectfailed += 1;
		document.getElementById("connerror").style.display = "inherit";
	}
}

function IncreLoad() {
	if (definingloadvalue <= 1) {
		definingloadvalue += 0.01;
		document.getElementById("progressbdiv").style.display = "none";
	}
	if (loadvalue <= 25 && definingloadvalue >= 1) {
		loadvalue += 0.1;
		if (serverNum <= 10) {
			document.getElementById("conntext").innerHTML = "<span>Connecting to SV00" + serverNum + "...";
		}
		if (serverNum >=10) {
			document.getElementById("conntext").innerHTML = "<span>Connecting to SV0" + serverNum + "...";
		}
		document.getElementById("progressbdiv").style.display = "block";
		document.getElementById("loadfill").style.width = loadvalue + "%";
	}
	if (loadvalue <= 45 && loadvalue >= 25) {
		loadvalue += 0.05;
		document.getElementById("loadfill").style.width = loadvalue + "%";
	}
	if (loadvalue <= 60 && loadvalue >= 45) {
		loadvalue += 0.01;
		document.getElementById("loadfill").style.width = loadvalue + "%";
	}
	if (definingloadvalue <= 25 && definingloadvalue >= 1) {
		definingloadvalue += 0.1;
	}
	if (definingloadvalue <= 45 && definingloadvalue >= 25) {
		definingloadvalue += 0.05;
	}
	if (definingloadvalue <= 60 && definingloadvalue >= 45) {
		definingloadvalue += 0.01;
	}
	if (definingloadvalue <= 101 && definingloadvalue >= 60) {
		definingloadvalue += 0.1;
	}
	if (definingloadvalue >= 101) {
		definingloadvalue = 101;
	}
	if (definingloadvalue == 101) {
		animSwap();
		clearInterval(inverTal)
	}
	if (definingloadvalue == 101 && serverNum >= 10) {
		console.error("Error connecting to SV0" + serverNum + "\: HTTP Status 504")
	}
	if (definingloadvalue == 101 && serverNum <= 10) {
		console.error("Error connecting to SV00" + serverNum + "\: HTTP Status 504")
	}
}

