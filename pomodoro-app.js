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
  pauseButton.setAttribute('style', 'display: none;');
  let minutes = parseInt(minutesDisplay.innerText, 10);
  let seconds = parseInt(secondsDisplay.innerText, 10);

  // Counter starter
  const startCounter = () => {
    minutes = parseInt(minutesDisplay.innerText, 10);
    seconds = parseInt(secondsDisplay.innerText, 10);
    let isPaused = false;

    // Reset Button - setup + trigger
    const resetButton = element.querySelector('#reset');
    const resetFunction = (timer) => {
      document.querySelector('#counter-box').removeAttribute('style');
      pauseButton.removeAttribute('style');
      resetButton.innerText = 'Reset';
      if (timer) {
        clearInterval(timer);
      }
      mainTitle.innerText = 'Welcome to Pomodoro!';
      minutes = document.querySelector('#set-focus').innerText;
      seconds = 0;
      minutesDisplay.innerText = `${minutes < 10 ? '0' : ''}${minutes}`;
      secondsDisplay.innerText = `${seconds < 10 ? '0' : ''}${seconds}`;
      pauseButton.classList.remove('button');
      pauseButton.setAttribute('style', 'display: none;');
      pauseButton.innerText = '';
      startButton.removeAttribute('style');
      startButton.classList.add('button');
      startButton.innerText = 'Start';
    };

    // Break (post-focus) timer
    const startBreak = () => {
      mainTitle.innerText = 'Break!';
      const audio = new Audio('sound.mp3');
      audio.play();
      document
        .querySelector('#counter-box')
        .setAttribute('style', 'color: green;');
      minutes = parseInt(document.querySelector('#set-break').innerText, 10);
      seconds = 0;
      const breakOn = setInterval(() => {
        if (seconds === 0) {
          minutes -= 1;
          seconds = 60;
        }
        seconds -= 1;
        if (minutes === 0 && seconds === 0) {
          clearInterval(breakOn);
          mainTitle.innerText = 'Pause over. New session?';
          resetButton.innerText = 'Focus again';
        }
        minutesDisplay.innerText = `${minutes < 10 ? '0' : ''}${minutes}`;
        secondsDisplay.innerText = `${seconds < 10 ? '0' : ''}${seconds}`;
      }, 1000);
    };

    // Timer function - setup
    const timerOn = setInterval(() => {
      mainTitle.innerText = 'Focus time';
      if (seconds === 0) {
        minutes -= 1;
        seconds = 60;
      }
      seconds -= 1;
      if (minutes === 0 && seconds === 0) {
        clearInterval(timerOn);
        pauseButton.setAttribute('style', 'display: none;');
        startBreak();
      }
      minutesDisplay.innerText = `${minutes < 10 ? '0' : ''}${minutes}`;
      secondsDisplay.innerText = `${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);

    // Timer launcher
    let timer = timerOn;

    // Pause Button - setup + trigger
    pauseButton.classList.add('button');
    pauseButton.innerText = 'Pause';
    pauseButton.addEventListener('click', () => {
      isPaused = !isPaused;
      if (isPaused) {
        mainTitle.innerText = 'Paused';
        pauseButton.innerText = 'Resume';
        clearInterval(timer);
      } else {
        pauseButton.innerText = 'Pause';
        timer = setInterval(() => {
          mainTitle.innerText = 'Focus time';
          if (seconds === 0) {
            minutes -= 1;
            seconds = 60;
          }
          seconds -= 1;
          if (minutes === 0 && seconds === 0) {
            clearInterval(timerOn);
            startBreak();
          }
          minutesDisplay.innerText = `${minutes < 10 ? '0' : ''}${minutes}`;
          secondsDisplay.innerText = `${seconds < 10 ? '0' : ''}${seconds}`;
        }, 1000);
      }
    });

    resetButton.addEventListener('click', () => {
      resetFunction(timer);
    });
  };

  // Counter initializer
  startButton.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('button');
    event.currentTarget.setAttribute('style', 'display: none;');
    // eslint-disable-next-line no-param-reassign
    event.currentTarget.innerText = '';
    event.currentTarget.nextElementSibling.removeAttribute('style');
    startCounter();
  });
}

// Focus time settings
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

// Break (post-focus) time settings
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

// Make a function to let the user choose the background color
export function backgroundSettings() {
  const background = document.querySelector('body');
  const colorPicker = document.createElement('input');
  colorPicker.setAttribute('type', 'color');
  colorPicker.setAttribute('id', 'color-picker');
  colorPicker.setAttribute('value', '#EBD6CB');
  background.style.backgroundColor = colorPicker.value;
  document
    .querySelector('#bg-settings')
    .insertAdjacentElement('beforeend', colorPicker);

  colorPicker.addEventListener('change', (event) => {
    background.style.backgroundColor = event.currentTarget.value;
  });
}
