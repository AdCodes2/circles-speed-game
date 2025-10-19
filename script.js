const circles = document.querySelectorAll(".circle");
const labelBegin = document.querySelector(".label-begin")
const labelFinish = document.querySelector(".label-finish")
const start = document.querySelector(".start");
const progress = document.querySelector(".progress")
const scoreDisplay = document.querySelector(".ScoreDisplay")

let count = 0;
let startTime;

const audio = new Audio('success.mp3');

function selectRandCircle() {
	progress.style.width = count * 10 + "%"
	const circlesNotSelected = document.querySelectorAll(".circle:not(.selected)");
	
	if (count > 0) {
		document.querySelector(".selected").classList.remove("selected");
	}

	if (count < 10) {
		const rand = Math.floor(Math.random() * circlesNotSelected.length);
		circlesNotSelected[rand].classList.add("selected");
		count = count + 1;
	} else {
		// game has finished
		labelFinish.classList.remove("hidden")
		count = 0
		const elapsed = (performance.now() - startTime) / 1000
		scoreDisplay.textContent = elapsed.toFixed(1) + "s"
		scoreDisplay.classList.remove("hidden")
        scoreDisplay.classList.add("zoomIn")
        audio.play();
	}
}

start.addEventListener("click", () => {	
	if (count == 0) {
		startTime = performance.now()
		selectRandCircle()
		labelBegin.classList.add("hidden")
		labelFinish.classList.add("hidden")

		scoreDisplay.classList.add("hidden")
        scoreDisplay.classList.remove("zoomIn")
	}	
})

circles.forEach(circle => {
			circle.addEventListener("click", () => {	
				if (circle.classList.contains("selected")) {
					selectRandCircle()
				}
			})
		}
)

// FINISHED!








































