!function(){"use strict";var e=[,function(e,t,n){function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{_objectSpread:function(){return i},_toConsumableArray:function(){return o}})},function(e,t,n){n.r(t),n.d(t,{framesHandler:function(){return o}});var a=n(3);const o=(e,t)=>{document.body||document.getElementsByTagName("body")[0],document.getElementById("header-frame1");const n=document.getElementById("header-frame2"),o=(document.getElementById("left-frame1"),document.getElementById("left-frame2")),r=(document.getElementById("right-frame1"),document.getElementById("right-frame2")),i=.3,s=3+2*i,d=document.querySelectorAll(".i-gsap-frame--static"),c=document.querySelectorAll(".i-gsap-frame--api"),l=Boolean(e.CHAMP),u={yoyo:!0,repeat:l&&t?1:0,repeatDelay:1.5,duration:.4},p=l,m=gsap.timeline({paused:p,...u}),v=gsap.timeline({paused:p,...u}),f=gsap.timeline();m.from(".gsap-top-1",{autoAlpha:0,duration:.3}),m.from(".gsap-top-2",{autoAlpha:0}),f.from(".header__getbonus",{autoAlpha:0}),v.from(".gsap-aside-1",{y:"-100%",autoAlpha:0});[m,v].forEach((e=>{e.play()})),e.CHAMP&&e.CHAMP.split(".")[1]&&""===e.CHAMP.split(".")[1].trim()&&(e.CHAMP=e.CHAMP.split(".")[0]);const b=Boolean(e.QUOTEX)?`\n                <div class="top-quotes-3">\n                    <div class="top-quotes-3__item">${e.QUOTE1}</div>\n                    <div class="top-quotes-3__item">${e.QUOTEX}</div>\n                    <div class="top-quotes-3__item">${e.QUOTE2}</div>\n                </div>\n    `:`\n            <div class="top-quotes-2">\n                    <div class="top-quotes-2__item">${e.QUOTE1}</div>\n                    <div class="top-quotes-2__item">${e.QUOTE2}</div>\n                </div>\n    \n    `,y=(0,a.createElementFromHTML)(`\n    <div class="top-banner">\n        <div class="top-banner__team">${e.TEAM1}</div>\n        <div class="top-banner__pic">\n            <img src="${e.LOGO1}" alt="" />\n        </div>\n        <div class="top-banner__content">\n            <div class="top-banner__champ">${e.CHAMP}</div>\n            <div class="top-banner__time"><span>${e.STARTDATE}</span>/<span>${e.STARTTIME}</span></div>\n            <div class="top-banner__live">\n                <span>Live</span>\n            </div>\n\n            <div class="top-banner__lowwrapper">\n                <div class="large-header">\n                    <div class="large-header__top"><img src="img/lilball.png" alt="" width="36" height="36" /></div>\n                    <div class="large-header__teams">\n                        <div class="large-header__team">${e.TEAM1}</div>\n                        <div class="large-header__team">${e.TEAM2}</div>\n                    </div>\n                </div>\n                ${b}\n            </div>\n        </div>\n        <div class="top-banner__pic">\n            <img src="${e.LOGO2}" alt="" />\n        </div>\n        <div class="top-banner__team">${e.TEAM2}</div>\n        <div class="top-banner__teams-mob">\n            <div>${e.TEAM1}</div>\n            <div>${e.TEAM2}</div>\n        </div>\n    </div>\n\n    `);function T(t=!0){const n=t?`${e.LOGO1}`:`${e.LOGO2}`,o=t?`${e.TEAM1}`:`${e.TEAM2}`,r=t?`${e.QUOTE1}`:`${e.QUOTE2}`,i=Boolean(e.QUOTEX)?`\n            <div class="aside-quotes">\n                <div class="aside-quotes__item"><span>${e.QUOTE1}</span></div>\n                <div class="aside-quotes__item"><span>${e.QUOTEX}</span></div>\n                <div class="aside-quotes__item"><span>${e.QUOTE2}</span></div>\n            </div>  \n        `:`\n            <div class="aside-one-kef"><span>${r}</span></div>\n`;return(0,a.createElementFromHTML)(`\n    <div>\n        <div class="aside__champ">${e.CHAMP}</div>\n        <div class="aside__datetime">\n            <span>${e.STARTDATE}</span>\n            /\n            <span>${e.STARTTIME}</span>\n        </div>\n        <div class="aside__teampic">\n            <img src="${n}" alt="" />\n        </div>\n         <div class="aside__teamname"><div class="aside__teamname">${o}</div></div>\n        ${i}\n    </div>     \n    `)}if(l&&t){g(),n.appendChild(y),o.appendChild(T(!0)),r.appendChild(T(!1));let e=!1;setInterval((function(){e?g():(d.forEach((e=>{E(e)})),c.forEach((e=>{_(e)}))),e=!e}),1e3*s)}function g(){c.forEach((e=>{E(e)})),d.forEach((e=>{_(e)}))}function _(e){e.style.display="inherit",gsap.to(e,{duration:i,opacity:1,delay:i})}function E(e){e.style.position="absolute",gsap.to(e,{duration:i,opacity:0,onComplete(){e.style.display="none"}})}}},function(e,t,n){function a(e){let t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild}n.r(t),n.d(t,{createElementFromHTML:function(){return a}})}],t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};!function(){n.r(a);var e=n(1),t=n(2);const o={STATIC_OGJ:!0};function r(n){let a,r,i=document.querySelectorAll("[data-autobet]");r={ID:16394763,CH:4105,SP:2,SPORT:"Теннис",CHAMP:"Уимблдон. ",EVENT:"Дэниел Эванс - Алехандро Табило",TEAM1:"Дэниел Эванс",VS:"Ничья",TEAM2:"Алехандро Табило",LOGO1:"https://fcdn.betcity.ru/autobet/images/flag_2/GB.png",LOGO2:"https://fcdn.betcity.ru/autobet/images/flag_2/CL.png",START:1720008e3,STARTTIME:"15:00",STARTDATE:"03.07",STARTDAY:3,STARTMONTH:"Июля",STARTWEEKDAY:"Среда",STARTHUMDAY:"Сегодня",LIVE:!0,QUOTE1:"4.51",QUOTEX:"333",QUOTE2:"1.20",LINK:"https://betcity.ru/ru/line/tennis/4105/16394763",AMOUNT:"2 000 ",DISCLAIMER:"Бонус зачисляется в виде фрибета** и равен сумме первой ставки, но не более 2 000 ₽ **Фрибет – предоставляемый компанией бонус, которым клиент компании может воспользоваться для заключения пари с ООО «Фортуна». Сроки проведения акции: с  (00:00:00 МСК) по 31.12.2024 (23:59:59 МСК). Полные правила акции, информацию об организаторе основанных на риске игр, пари, о правилах их проведения, о призовом фонде таких игр, пари, о количестве призов или выигрышей, о сроках, месте и порядке получения призов или выигрышей можно узнать на сайте www.betcity.ru. ",PROMOCODE:"2000BET"},a={...o,...r},(0,t.framesHandler)(a,1),console.log(a),function(){a.STATIC_OGJ?console.log("%cДанные из статического объекта","color: gold; font-weight: bold;  font-size: 2em"):a.CHAMP?console.log("%cДанные из API получены","color: green; font-weight: bold;  font-size: 2em"):console.log("%cДанные из API НЕ получены","color: red; font-weight: bold; font-size: 2em");document.body.classList.add(a.CHAMP?"data-received":"data-not-received"),(0,e._toConsumableArray)(i).forEach((function(e){"SPAN"!=e.tagName&&"DIV"!=e.tagName||a[e.dataset.autobet]&&(e.innerText=a[e.dataset.autobet]),"IMG"==e.tagName&&a[e.dataset.autobet]&&(e.src=a[e.dataset.autobet])}))}(),function(){if(!a.PROMOCODE)return void document.body.classList.add("has-no-promocode");document.body.classList.add("has-promocode")}(),function(){if(!a.EVENT)return;document.body.classList.add("has-event"),a.LIVE?document.body.classList.add("live-is-avaliable"):document.body.classList.add("live-not-avaliable")}(),document.body.classList.add("loaded")}window.addEventListener("DOMContentLoaded",(function(){r()}))}()}();