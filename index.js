const timeDisplay = document.getElementById("timeDisplay");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startButton.addEventListener("click", () => {
	if(paused){
		paused = false;
		startTime = Date.now() - elapsedTime;
		intervalId = setInterval(updateTime, 1000);
	}
});
pauseButton.addEventListener("click", () => {});
resetButton.addEventListener("click", () => {});

function updateTime(){
	elapsedTime = Date.now() - startTime;

	secs = Math.floor((elapsedTime / 1000) % 60);
	mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
	hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

	secs = padding(secs);
	mins = padding(mins);
	hrs = padding(hrs);

	timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

	function padding(unit){
		return (("0") + unit).length > 2 ? unit : "0" + unit;
	}
}