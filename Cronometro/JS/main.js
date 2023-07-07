const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

let startTime;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 10);

    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}

function stopTimer() {
    clearInterval(timerInterval);

    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "00:00:00";

    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    const milliseconds = Math.floor(elapsedTime % 1000 / 10);
    const seconds = Math.floor(elapsedTime / 1000 % 60);
    const minutes = Math.floor(elapsedTime / 1000 / 60 % 60);
    const hours = Math.floor(elapsedTime / 1000 / 60 / 60);

    const timerElement = document.getElementById("timer");
    timerElement.textContent = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + "." + pad(milliseconds);
}

function pad(number) {
    return number.toString().padStart(2, "0");
}