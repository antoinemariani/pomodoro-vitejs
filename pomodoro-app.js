/* eslint-disable operator-linebreak */
/* eslint-disable import/prefer-default-export */
/* eslint-disable require-jsdoc */
export function setupCounter(element) {
  const mainTitle = document.querySelector('#title');
  const startButton = element.querySelector('#start');
  startButton.classList.add('button');
  startButton.innerText = 'Start';
  const minutesDisplay = element.querySelector('#minutes');
  minutesDisplay.innerText = document.querySelector('#set-focus').innerText;
  const secondsDisplay = element.querySelector('#seconds');
  const pauseButton = element.querySelector('#pause');
  let minutes = parseInt(minutesDisplay.innerText, 10);
  let seconds = parseInt(secondsDisplay.innerText, 10);

  // Counter starter
  const startCounter = () => {
    minutes = parseInt(minutesDisplay.innerText, 10);
    seconds = parseInt(secondsDisplay.innerText, 10);
    let isPaused = false;

    // Timer function - setup
    const timerOn = setInterval(() => {
      mainTitle.innerText = 'Focus!';
      if (seconds === 0) {
        minutes -= 1;
        seconds = 60;
      }
      seconds -= 1;
      if (minutes === 0 && seconds === 0) {
        mainTitle.innerText = 'Break!';
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
        mainTitle.innerText = 'Paused';
        pauseButton.innerText = 'Resume';
        clearInterval(timer);
      } else {
        pauseButton.innerText = 'Pause';
        timer = timerOn;
      }
    });

    // Reset Button
    const resetButton = element.querySelector('#reset');
    resetButton.addEventListener('click', () => {
      clearInterval(timer);
      mainTitle.innerText = 'Welcome to Pomodoro!';
      minutes = document.querySelector('#set-focus').innerText;
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
    startCounter();
  });
}

export function focusSettings(focusSection) {
  const minutesDisplay = document.querySelector('#minutes');
  const plus = focusSection.querySelector('#plus-focus');
  const minus = focusSection.querySelector('#minus-focus');

  const activeButton = (btn) => {
    const focusMinutes = focusSection.querySelector('#set-focus');
    if (btn === plus && parseInt(focusMinutes.innerText, 10) < 60) {
      focusMinutes.innerText = parseInt(focusMinutes.innerText, 10) + 1;
      minutesDisplay.innerText = focusMinutes.innerText;
    }
    if (btn === minus && parseInt(focusMinutes.innerText, 10) > 1) {
      focusMinutes.innerText = parseInt(focusMinutes.innerText, 10) - 1;
      minutesDisplay.innerText = focusMinutes.innerText;
    }
  };

  plus.addEventListener('click', () => activeButton(plus));
  minus.addEventListener('click', () => activeButton(minus));
}

export function breakSettings(breakSection) {
  const plus = breakSection.querySelector('#plus-break');
  const minus = breakSection.querySelector('#minus-break');

  const activeButton = (btn) => {
    const breakMinutes = breakSection.querySelector('#set-break');
    if (btn === plus && parseInt(breakMinutes.innerText, 10) < 30) {
      breakMinutes.innerText = parseInt(breakMinutes.innerText, 10) + 1;
    }
    if (btn === minus && parseInt(breakMinutes.innerText, 10) > 1) {
      breakMinutes.innerText = parseInt(breakMinutes.innerText, 10) - 1;
    }
  };

  plus.addEventListener('click', () => activeButton(plus));
  minus.addEventListener('click', () => activeButton(minus));
}
