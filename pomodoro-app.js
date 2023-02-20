export function setupCounter(element) {
  // write a function that takes a counter html element and starts a pomodoro timer
  let startButton = element.querySelector("#start");
  // when the counter is clicked
  startButton.addEventListener("click", (event) => {
    event.currentTarget.remove();
    startCounter(element);
  });
  // the timer should count down from 25 minutes
  // when the timer reaches 0, the counter should be reset to 25 minutes
  // the counter should display the time in minutes and seconds
}

const startCounter = (element) => {
  let minutesDisplay = element.querySelector("#minutes");
  let secondsDisplay = element.querySelector("#seconds");
  let pauseButton = element.querySelector("#pause");
  let minutes = 25;
  let seconds = 0;
  let isPaused = false;

  let timer = setInterval(() => {
    if (seconds === 0) {
      minutes -= 1;
      seconds = 60;
    }
    seconds -= 1;
    if (minutes === 0 && seconds === 0) {
      clearInterval(timer);
    }
    (minutesDisplay.innerText = minutes) &&
      (secondsDisplay.innerText = seconds);
  }, 1000);

  pauseButton.classList.add("button");
  pauseButton.innerText = "Pause";

  pauseButton.addEventListener("click", () => {
    isPaused = !isPaused;
    if (isPaused) {
      pauseButton.innerText = "Resume";
      clearInterval(timer);
    } else {
      pauseButton.innerText = "Pause";
      timer = setInterval(() => {
        if (seconds === 0) {
          minutes -= 1;
          seconds = 60;
        }
        seconds -= 1;
        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
        }
        (minutesDisplay.innerText = minutes) &&
          (secondsDisplay.innerText = seconds);
      }, 1000);
    }
  });
};

const timerOn = (minutes, seconds, minutesDisplay, secondsDisplay) => {};
