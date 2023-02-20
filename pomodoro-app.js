/* eslint-disable import/prefer-default-export */
/* eslint-disable require-jsdoc */
export function setupCounter(element) {
  const startButton = element.querySelector('#start');
  startButton.classList.add('button');
  startButton.innerText = 'Start';

  // Counter starter
  const startCounter = (el) => {
    const minutesDisplay = el.querySelector('#minutes');
    const secondsDisplay = el.querySelector('#seconds');
    const pauseButton = el.querySelector('#pause');
    let minutes = 24;
    let seconds = 12;
    let isPaused = false;

    // Timer function - setup
    const timerOn = setInterval(() => {
      if (seconds === 0) {
        minutes -= 1;
        seconds = 60;
      }
      seconds -= 1;
      if (minutes === 0 && seconds === 0) {
        clearInterval(timerOn);
      }
      minutesDisplay.innerText = `${minutes < 10 ? '0' : ''}${minutes}`;
      secondsDisplay.innerText = `${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);

    // Timer launcher
    let timer = timerOn;

    // Pause Button - setup
    pauseButton.classList.add('button');
    pauseButton.innerText = 'Pause';

    // Pause Button - trigger
    pauseButton.addEventListener('click', () => {
      isPaused = !isPaused;
      if (isPaused) {
        pauseButton.innerText = 'Resume';
        clearInterval(timer);
      } else {
        pauseButton.innerText = 'Pause';
        timer = setInterval(() => {
          if (seconds === 0) {
            minutes -= 1;
            seconds = 60;
          }
          seconds -= 1;
          if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
          }
          minutesDisplay.innerText = `${minutes < 10 ? '0' : ''}${minutes}`;
          secondsDisplay.innerText = `${seconds < 10 ? '0' : ''}${seconds}`;
        }, 1000);
      }
    });

    // Reset Button
    const resetButton = element.querySelector('#reset');
    resetButton.addEventListener('click', () => {
      clearInterval(timer);
      minutes = 25;
      seconds = 0;
      minutesDisplay.innerText = `${minutes < 10 ? '0' : ''}${minutes}`;
      secondsDisplay.innerText = `${seconds < 10 ? '0' : ''}${seconds}`;
      pauseButton.classList.remove('button');
      pauseButton.innerText = '';
      startButton.classList.add('button');
      startButton.innerText = 'Start';
    });
  };

  // Counter initializer
  startButton.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('button');
    // eslint-disable-next-line no-param-reassign
    event.currentTarget.innerText = '';
    startCounter(element);
  });
}
