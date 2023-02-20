/* eslint-disable operator-linebreak */
/* eslint-disable import/prefer-default-export */
/* eslint-disable require-jsdoc */
export function setupCounter(element) {
  const startButton = element.querySelector('#start');
  startButton.classList.add('button');
  startButton.innerText = 'Start';

  // Counter starter
  const startCounter = (el) => {
    const minutesDisplay = el.querySelector('#minutes');
    minutesDisplay.innerText = document.querySelector('#set-focus').innerText;
    const secondsDisplay = el.querySelector('#seconds');
    const pauseButton = el.querySelector('#pause');
    let minutes = parseInt(minutesDisplay.innerText, 10);
    let seconds = parseInt(secondsDisplay.innerText, 10);
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

export function focusSettings(focusSection) {
  const minutesDisplay = document.querySelector('#minutes');
  const focusMinutes = focusSection.querySelector('#set-focus');
  const plus = focusSection.querySelector('#plus-focus');
  const minus = focusSection.querySelector('#minus-focus');

  if (
    parseInt(focusMinutes.innerText, 10) > 1 &&
    parseInt(focusMinutes.innerText, 10) < 60
  ) {
    plus.addEventListener('click', () => {
      if (plus.getAttribute('disabled')) {
        plus.removeAttribute('disabled');
      }
      focusMinutes.innerText = parseInt(focusMinutes.innerText, 10) + 1;
      minutesDisplay.innerText = focusMinutes.innerText;
    });

    minus.addEventListener('click', () => {
      if (minus.getAttribute('disabled')) {
        minus.removeAttribute('disabled');
      }
      focusMinutes.innerText = parseInt(focusMinutes.innerText, 10) - 1;
      minutesDisplay.innerText = focusMinutes.innerText;
    });
  }
  if (parseInt(focusMinutes.innerText, 10) === 1) {
    minus.setAttribute('disabled', 'true');
  }
  if (parseInt(focusMinutes.innerText, 10) === 60) {
    plus.setAttribute('disabled', 'true');
  }
}

export function breakSettings(breakSection) {
  const breakMinutes = breakSection.querySelector('#set-break');
  const plus = breakSection.querySelector('#plus-break');
  const minus = breakSection.querySelector('#minus-break');

  if (
    parseInt(breakMinutes.innerText, 10) > 1 &&
    parseInt(breakMinutes.innerText, 10) < 30
  ) {
    plus.addEventListener('click', () => {
      breakMinutes.innerText = parseInt(breakMinutes.innerText, 10) + 1;
    });

    minus.addEventListener('click', () => {
      breakMinutes.innerText = parseInt(breakMinutes.innerText, 10) - 1;
    });
  }
  if (parseInt(breakMinutes.innerText, 10) === 1) {
    minus.removeEventListener('click');
  }
  if (parseInt(breakMinutes.innerText, 10) === 30) {
    plus.removeEventListener('click');
  }
}
