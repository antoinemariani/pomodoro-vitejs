import "./style.css";
import javascriptLogo from "./javascript.svg";
// import { setupCounter } from "./counter.js";
import { setupCounter } from "./pomodoro-app.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <h1>Hello Pomodoro!</h1>
    <div id="counter">
      <span id="minutes">25</span>
      <span id="colon">:</span>
      <span id="seconds">00</span>
      <div class="button" id="start">Start</div>
      <div id="pause"></div>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
