/* eslint-disable object-curly-spacing */
import './style.css';
// import javascriptLogo from './javascript.svg';
// import { setupCounter } from './counter.js';
import { breakSettings, focusSettings, setupCounter } from './pomodoro-app.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href='https://github.com/antoinemariani' target='_blank'>
      <i class="fa-solid fa-pizza-slice fa-2xl" style="color:red;"></i>
    </a>

    <h1 id='title'>Welcome to Pomodoro!</h1>
    <div id='counter'>
      <div id='counter-box'>
        <span id='minutes'>25</span>
        <span id='colon'>:</span>
        <span id='seconds'>00</span>
      </div>
      <div id='btn-box'>
        <div id='start'></div>
        <div id='pause'></div>
        <button class='button' id='reset'>Reset</button>
      </div>
      <div id='settings'>
        <div id='focus'>
          <p class='label'>Focus</p>
          <button class='button' id='plus-focus'>+</button>
          <span id='set-focus'>25</span>
          <p class='label'>min.</p>
          <button class='button' id='minus-focus'>-</button>
        </div>
        <div id='break'>
          <p class='label'>Break</p>
          <button class='button' id='plus-break'>+</button>
          <span id='set-break'>5</span>
          <p class='label'>min.</p>
          <button class='button' id='minus-break'>-</button>
        </div>
      </div>
    </div>
  </div>
`;

setupCounter(document.querySelector('#counter'));
focusSettings(document.querySelector('#focus'));
breakSettings(document.querySelector('#break'));
