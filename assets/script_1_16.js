!function(){"use strict";var e=[,function(e,t,n){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{_objectSpread:function(){return i},_toConsumableArray:function(){return o}})},function(e,t,n){n.r(t),n.d(t,{framesHandler:function(){return o}});var r=n(3);const o=(e,t)=>{document.body||document.getElementsByTagName("body")[0],document.getElementById("header-frame1");const n=document.getElementById("header-frame2"),o=.3,a=3+2*o,i=document.querySelectorAll(".i-gsap-frame--static"),s=document.querySelectorAll(".i-gsap-frame--api"),c=Boolean(e.CHAMP),d={yoyo:!0,repeat:c&&t?1:0,repeatDelay:1.5,duration:.4},l=c,u=gsap.timeline({paused:l,...d}),p=gsap.timeline({paused:l,...d}),f=gsap.timeline();u.from(".gsap-top-1",{autoAlpha:0,duration:.3}),u.from(".gsap-top-2",{autoAlpha:0}),f.from(".header__getbonus",{autoAlpha:0}),p.from(".gsap-aside-1",{y:"-100%",autoAlpha:0});[u,p].forEach((e=>{e.play()}));const m=(0,r.createElementFromHTML)(`\n    <div class="top-banner">\n        <div class="top-banner__team">${e.TEAM1}</div>\n        <div class="top-banner__pic">\n            <img src="${e.LOGO1}" alt="" />\n        </div>\n        <div class="top-banner__content">\n            <div class="top-banner__champ">${e.CHAMP}</div>\n            <div class="top-banner__time"><span>${e.STARTDATE}</span>/<span>${e.STARTTIME}</span></div>\n            <div class="top-banner__live">\n                <span>Live</span>\n            </div>\n\n            <div class="top-banner__lowwrapper">\n                <div class="large-header">\n                    <div class="large-header__top"><img src="img/lilball.png" alt="" width="36" height="36" /></div>\n                    <div class="large-header__teams">\n                        <div class="large-header__team">${e.TEAM1}</div>\n                        <div class="large-header__team">${e.TEAM2}</div>\n                    </div>\n                </div>\n                <div class="top-quotes">\n                    <div class="top-quotes__item">${e.QUOTE1}</div>\n                    <div class="top-quotes__item">${e.QUOTEX}</div>\n                    <div class="top-quotes__item">${e.QUOTE2}</div>\n                </div>\n            </div>\n        </div>\n        <div class="top-banner__pic">\n            <img src="${e.LOGO2}" alt="" />\n        </div>\n        <div class="top-banner__team">${e.TEAM2}</div>\n        <div class="top-banner__teams-mob">\n            <div>${e.TEAM1}</div>\n            <div>${e.TEAM2}</div>\n        </div>\n    </div>\n\n    `);if(c&&t){b(),n.appendChild(m);let e=!1;setInterval((function(){e?b():(i.forEach((e=>{y(e)})),s.forEach((e=>{v(e)}))),e=!e}),1e3*a)}function b(){s.forEach((e=>{y(e)})),i.forEach((e=>{v(e)}))}function v(e){e.style.display="inherit",gsap.to(e,{duration:o,opacity:1,delay:o,onComplete(){e.style.position="relative"}})}function y(e){e.style.position="absolute",gsap.to(e,{duration:o,opacity:0,onComplete(){e.style.display="none"}})}}},function(e,t,n){function r(e){let t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild}n.r(t),n.d(t,{createElementFromHTML:function(){return r}})}],t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};!function(){n.r(r);var e=n(1),t=n(2);const o={STATIC_OGJ:!0};function a(n){let r,a,i=document.querySelectorAll("[data-autobet]");a={ID:16394763,CH:4105,SP:2,SPORT:"Теннис",CHAMP:"Уимблдон.",EVENT:"Дэниел Эванс - Алехандро Табило",TEAM1:"Дэниел Эванс",VS:"Ничья",TEAM2:"Алехандро Табило",LOGO1:"https://fcdn.betcity.ru/autobet/images/flag_2/GB.png",LOGO2:"https://fcdn.betcity.ru/autobet/images/flag_2/CL.png",START:1720008e3,STARTTIME:"15:00",STARTDATE:"03.07",STARTDAY:3,STARTMONTH:"Июля",STARTWEEKDAY:"Среда",STARTHUMDAY:"Сегодня",LIVE:!1,QUOTE1:"4.51",QUOTEX:"333",QUOTE2:"1.20",LINK:"https://betcity.ru/ru/line/tennis/4105/16394763",AMOUNT:"2 000 ",DISCLAIMER:"Бонус зачисляется в виде фрибета** и равен сумме первой ставки, но не более 2 000 ₽ **Фрибет – предоставляемый компанией бонус, которым клиент компании может воспользоваться для заключения пари с ООО «Фортуна». Сроки проведения акции: с  (00:00:00 МСК) по 31.12.2024 (23:59:59 МСК). Полные правила акции, информацию об организаторе основанных на риске игр, пари, о правилах их проведения, о призовом фонде таких игр, пари, о количестве призов или выигрышей, о сроках, месте и порядке получения призов или выигрышей можно узнать на сайте www.betcity.ru. ",PROMOCODE:"2000BET"},r={...o,...a},(0,t.framesHandler)(r,0),console.log(r),function(){console.log("%cСобытие отключено","color: #ccc; font-weight: bold;  font-size: 2em");document.body.classList.add(r.CHAMP?"data-received":"data-not-received"),(0,e._toConsumableArray)(i).forEach((function(e){"SPAN"!=e.tagName&&"DIV"!=e.tagName||r[e.dataset.autobet]&&(e.innerText=r[e.dataset.autobet]),"IMG"==e.tagName&&r[e.dataset.autobet]&&(e.src=r[e.dataset.autobet])}))}(),function(){if(!r.PROMOCODE)return void document.body.classList.add("has-no-promocode");document.body.classList.add("has-promocode")}(),function(){if(!r.EVENT)return;""===r.QUOTEX&&document.body.classList.add("two-teams");document.body.classList.add("has-event"),r.LIVE?document.body.classList.add("live-is-avaliable"):document.body.classList.add("live-not-avaliable")}(),document.body.classList.add("loaded")}window.addEventListener("DOMContentLoaded",(function(){a()}))}()}();