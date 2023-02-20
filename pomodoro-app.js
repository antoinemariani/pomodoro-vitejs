export function setupCounter(element) {
  // write a function that takes a counter html element and starts a pomodoro timer
  let minutesDisplay = element.querySelector("#minutes");
  let secondsDisplay = element.querySelector("#seconds");
  let button = element.querySelector(".button");
  // when the counter is clicked
  button.addEventListener("click", () => {
    startCounter(minutesDisplay, secondsDisplay);
  });
  // the timer should count down from 25 minutes
  // when the timer reaches 0, the counter should be reset to 25 minutes
  // the counter should display the time in minutes and seconds
}

const startCounter = (minutesDisplay, secondsDisplay) => {
  let minutes = 25;
  let seconds = 0;

  const timer = setInterval(() => {
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
};
