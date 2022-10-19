const startButton = document.querySelector("#start")
const pauseButton = document.querySelector("#pause")
const durationInput = document.querySelector("#duration")

const circle = document.querySelector("circle")

const perimeter = 2 * Math.PI * circle.getAttribute("r")
circle.setAttribute("stroke-dasharray", perimeter)

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        let offset =  perimeter * timeRemaining / duration - perimeter
        circle.setAttribute("stroke-dashoffset", offset)
    },
    onComplete() {
        console.log("DONE")
    }
})
