!function(){"use strict";var t=[,function(t,e,o){function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function n(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){s(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o.r(e),o.d(e,{_objectSpread:function(){return i},_toConsumableArray:function(){return n}})},function(t,e,o){o.r(e),o.d(e,{framesHandler:function(){return a}});var r=o(3),n=o(4);const a=(t,e)=>{const o=1.5,a=.3,i=3+2*a,s=document.querySelectorAll(".i-gsap-frame--static"),u=document.querySelectorAll(".i-gsap-frame--api"),c=Boolean(t.CHAMP);c&&e&&[r.tlStaticHeaderOffer].forEach((t=>{t.repeat(1),t.yoyo(!0),t.repeatDelay(o)}));r.tlHeaderRightBonus;const l=[r.tlStaticHeaderOffer],f=[n.tlTOPquotes3,n.tlTOPquotes2,n.tlASIDEquotes3,n.tlASIDEquotes3r,n.tlASIDEquotes2r,n.tlASIDEquotes2];if(t.CHAMP&&t.CHAMP.split(".")[1]&&""===t.CHAMP.split(".")[1].trim()&&(t.CHAMP=t.CHAMP.split(".")[0]),c&&e){let t=!1;setInterval((function(){t?(u.forEach((t=>{p(t)})),s.forEach((t=>{d(t)})),setTimeout((()=>{y(l)}),1e3*a),setTimeout((()=>{g(f)}),1e3*a)):(s.forEach((t=>{p(t)})),u.forEach((t=>{d(t)})),setTimeout((()=>{y(f)}),1e3*a),setTimeout((()=>{g(l)}),1e3*a)),t=!t}),1e3*i)}function d(t){t.style.display="inherit",gsap.to(t,{duration:a,opacity:1,delay:a})}function p(t){t.style.position="absolute",gsap.to(t,{duration:a,opacity:0,onComplete(){t.style.display="none"}})}function y(t){t.forEach((t=>{t.play()}))}function g(t){t.forEach((t=>{t.pause(0)}))}}},function(t,e,o){o.r(e),o.d(e,{tlHeaderRightBonus:function(){return n},tlStaticHeaderOffer:function(){return r}});const r=gsap.timeline({yoyo:!0});r.from(".gsap-top-1",{autoAlpha:0,y:"-100%",duration:.3}),r.from(".gsap-top-2",{autoAlpha:0,y:"-100%",duration:.3}),r.from(".gsap-top-3",{autoAlpha:0,y:"-100%",duration:.3});const n=gsap.timeline({repeat:0});n.from(".gsap-top-3right",{autoAlpha:0,y:"-100%",duration:.3})},function(t,e,o){o.r(e),o.d(e,{tlASIDEquotes2:function(){return u},tlASIDEquotes2r:function(){return c},tlASIDEquotes3:function(){return i},tlASIDEquotes3r:function(){return s},tlTOPquotes2:function(){return n},tlTOPquotes3:function(){return r}});const r=gsap.timeline({paused:!0});r.from(".gsap-top-q3",{autoAlpha:0,y:"-100%",duration:.4,stagger:.2});const n=gsap.timeline({paused:!0});n.from(".gsap-top-q2",{autoAlpha:0,y:"-50%",duration:.4,stagger:.2});const a={autoAlpha:0,y:"-50%",duration:.4,stagger:.2},i=gsap.timeline({paused:!0});i.from(".gsap-aside-q3",a);const s=gsap.timeline({paused:!0});s.from(".gsap-aside-q3r",a);const u=gsap.timeline({paused:!0});u.from(".gsap-aside-q2",a);const c=gsap.timeline({paused:!0});c.from(".gsap-aside-q2r",a)}],e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,o),a.exports}o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};!function(){o.r(r);var t=o(1),e=o(2);const n={STATIC_OGJ:!0},a=document.body||document.getElementsByTagName("body")[0];function i(o){let r,i,s=document.querySelectorAll("[data-autobet]");i={ID:16394763,CH:4105,SP:2,SPORT:"Теннис",CHAMP:"Уимблдон. ",EVENT:"Дэниел Эванс - Алехандро Табило",TEAM1:"Дэниел Эванс",VS:"Ничья",TEAM2:"Алехандро Табило",LOGO1:"https://fcdn.betcity.ru/autobet/images/flag_2/GB.png",LOGO2:"https://fcdn.betcity.ru/autobet/images/flag_2/CL.png",START:1720008e3,STARTTIME:"15:00",STARTDATE:"03.07",STARTDAY:3,STARTMONTH:"Июля",STARTWEEKDAY:"Среда",STARTHUMDAY:"Сегодня",LIVE:!1,QUOTE1:"4.51",QUOTEX:"1.11",QUOTE2:"1.20",LINK:"https://betcity.ru/ru/line/tennis/4105/16394763",AMOUNT:"5 000 ",DISCLAIMER:"Бонус зачисляется в виде фрибета** и равен сумме первой ставки, но не более 2 000 ₽ **Фрибет – предоставляемый компанией бонус, которым клиент компании может воспользоваться для заключения пари с ООО «Фортуна». Сроки проведения акции: с  (00:00:00 МСК) по 31.12.2024 (23:59:59 МСК). Полные правила акции, информацию об организаторе основанных на риске игр, пари, о правилах их проведения, о призовом фонде таких игр, пари, о количестве призов или выигрышей, о сроках, месте и порядке получения призов или выигрышей можно узнать на сайте www.betcity.ru. ",PROMOCODE:"5000BET"},r={...n,...i},(0,e.framesHandler)(r,1),console.log(r),function(){r.STATIC_OGJ?console.log("%cДанные из статического объекта","color: gold; font-weight: bold;  font-size: 2em"):r.CHAMP?console.log("%cДанные из API получены","color: green; font-weight: bold;  font-size: 2em"):console.log("%cДанные из API НЕ получены","color: red; font-weight: bold; font-size: 2em");document.body.classList.add(r.CHAMP?"data-received":"data-not-received"),(0,t._toConsumableArray)(s).forEach((function(t){"SPAN"!=t.tagName&&"DIV"!=t.tagName||r[t.dataset.autobet]&&(t.innerText=r[t.dataset.autobet]),"IMG"==t.tagName&&r[t.dataset.autobet]&&(t.src=r[t.dataset.autobet])}))}(),function(){if(!r.PROMOCODE)return void a.classList.add("has-no-promocode");a.classList.add("has-promocode")}(),function(){if(!r.EVENT)return;a.classList.add("has-event"),r.QUOTEX||a.classList.add("only-2-quotes");r.LIVE?a.classList.add("live-is-avaliable"):a.classList.add("live-not-avaliable")}(),document.body.classList.add("loaded")}window.addEventListener("DOMContentLoaded",(function(){i()}))}()}();