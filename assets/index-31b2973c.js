(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&u(t)}).observe(document,{childList:!0,subtree:!0});function i(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerpolicy&&(e.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?e.credentials="include":n.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function u(n){if(n.ep)return;n.ep=!0;const e=i(n);fetch(n.href,e)}})();function T(o){const r=document.querySelector("#title"),i=o.querySelector("#start");i.classList.add("button"),i.innerText="Start";const u=o.querySelector("#minutes");u.innerText=document.querySelector("#set-focus").innerText;const n=o.querySelector("#seconds"),e=o.querySelector("#pause");e.setAttribute("style","display: none;");let t=parseInt(u.innerText,10),s=parseInt(n.innerText,10);const f=()=>{t=parseInt(u.innerText,10),s=parseInt(n.innerText,10);let c=!1;const a=o.querySelector("#reset"),y=p=>{document.querySelector("#counter-box").removeAttribute("style"),e.removeAttribute("style"),a.innerText="Reset",p&&clearInterval(p),r.innerText="Welcome to Pomodoro!",t=document.querySelector("#set-focus").innerText,s=0,u.innerText=`${t<10?"0":""}${t}`,n.innerText=`${s<10?"0":""}${s}`,e.classList.remove("button"),e.setAttribute("style","display: none;"),e.innerText="",i.removeAttribute("style"),i.classList.add("button"),i.innerText="Start"},b=()=>{r.innerText="Break!",new Audio("sound.mp3").play(),document.querySelector("#counter-box").setAttribute("style","color: green;"),t=parseInt(document.querySelector("#set-break").innerText,10),s=0;const m=setInterval(()=>{s===0&&(t-=1,s=60),s-=1,t===0&&s===0&&(clearInterval(m),r.innerText="Pause over. New session?",a.innerText="Focus again"),u.innerText=`${t<10?"0":""}${t}`,n.innerText=`${s<10?"0":""}${s}`},1e3)},l=setInterval(()=>{r.innerText="Focus time",s===0&&(t-=1,s=60),s-=1,t===0&&s===0&&(clearInterval(l),e.setAttribute("style","display: none;"),b()),u.innerText=`${t<10?"0":""}${t}`,n.innerText=`${s<10?"0":""}${s}`},1e3);let d=l;e.classList.add("button"),e.innerText="Pause",e.addEventListener("click",()=>{c=!c,c?(r.innerText="Paused",e.innerText="Resume",clearInterval(d)):(e.innerText="Pause",d=setInterval(()=>{r.innerText="Focus time",s===0&&(t-=1,s=60),s-=1,t===0&&s===0&&(clearInterval(l),b()),u.innerText=`${t<10?"0":""}${t}`,n.innerText=`${s<10?"0":""}${s}`},1e3))}),a.addEventListener("click",()=>{y(d)})};i.addEventListener("click",c=>{c.currentTarget.classList.toggle("button"),c.currentTarget.setAttribute("style","display: none;"),c.currentTarget.innerText="",c.currentTarget.nextElementSibling.removeAttribute("style"),f()})}function x(o){const r=document.querySelector("#minutes"),i=o.querySelector("#plus-focus"),u=o.querySelector("#minus-focus"),n=e=>{const t=o.querySelector("#set-focus");e===i&&parseInt(t.innerText,10)<60&&(t.innerText=parseInt(t.innerText,10)+1,r.innerText=t.innerText),e===u&&parseInt(t.innerText,10)>1&&(t.innerText=parseInt(t.innerText,10)-1,r.innerText=t.innerText)};i.addEventListener("click",()=>n(i)),u.addEventListener("click",()=>n(u))}function v(o){const r=o.querySelector("#plus-break"),i=o.querySelector("#minus-break"),u=n=>{const e=o.querySelector("#set-break");n===r&&parseInt(e.innerText,10)<30&&(e.innerText=parseInt(e.innerText,10)+1),n===i&&parseInt(e.innerText,10)>1&&(e.innerText=parseInt(e.innerText,10)-1)};r.addEventListener("click",()=>u(r)),i.addEventListener("click",()=>u(i))}function g(){const o=document.querySelector("body"),r=document.createElement("input");r.setAttribute("type","color"),r.setAttribute("id","color-picker"),r.setAttribute("value","#EBD6CB"),o.style.backgroundColor=r.value,document.querySelector("#bg-settings").insertAdjacentElement("beforeend",r),r.addEventListener("change",i=>{o.style.backgroundColor=i.currentTarget.value})}document.querySelector("#app").innerHTML=`
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
`;T(document.querySelector("#counter"));x(document.querySelector("#focus"));v(document.querySelector("#break"));g();
