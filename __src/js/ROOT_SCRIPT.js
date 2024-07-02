import { _toConsumableArray, _objectSpread } from "./APIhelpers";
import { gsapAnimations } from "./gsapAnimations";

///////////////////////////////////////////////////////
// Флаги
///////////////////////////////////////////////////////
const DEVMODE = 1; // флаг переключает вывод веселых разноцветных консолек (1 - есть инфа в консоли, 0 - нет инфы в консоли)
const CHAMPIONAT_STATIC = 0; // флаг переключает вывод инфы из статического объекта (1 - из предварительно спертого объекта, т.е. для чемпионата, 0 -  из API). Не забываем для чемпионата ставить нужный класс в Body и убирать подключение autobet.js
const AUTOEVENT = 1; // флаг переключает анимацию двух кадров (1 - два кадра, 0 - один кадр)

///////////////////////////////////////////////////////
// чисто для отладки
///////////////////////////////////////////////////////
const CHECKSTATIC = {
    STATIC_OGJ: true,
};

window.addEventListener("DOMContentLoaded", function () {
    // autobet.promise.then(function (data) {
    //     runautobet(data);
    // });

    // Если чемпионат, то запускам просто runautobet();

    if (CHAMPIONAT_STATIC) {
        runautobet();
    } else {
        autobet.promise.then(function (data) {
            runautobet(data);
        });
    }
});

function runautobet(event) {
    let ev = event;
    // for prod
    let elements = document.querySelectorAll("[data-autobet]");

    let data;

    ///////////////////////////////////////////
    // Пошли данные
    // preCapturedDATA - предварительно спертые с АПИхи данные
    ///////////////////////////////////////////
    let preCapturedDATA;
    //
    preCapturedDATA = {
        ID: 14728241,
        CH: 296218,
        SP: 1,
        SPORT: "Футбол",
        CHAMP: " Евро 2024. Германия.",
        EVENT: "Бельгия - Словакия",
        TEAM1: "Бельгия",
        VS: "Ничья",
        TEAM2: "Словакия",
        LOGO1: "https://fcdn.betcity.ru/autobet/images/universal/2456.png",
        LOGO2: "https://fcdn.betcity.ru/autobet/images/universal/2812.png",
        START: 1718640000,
        STARTTIME: "19:00",
        STARTDATE: "17.06",
        STARTDAY: 17,
        STARTMONTH: "Июня",
        STARTWEEKDAY: "Понедельник",
        STARTHUMDAY: "Сегодня",
        LIVE: false,
        QUOTE1: "1.50",
        QUOTEX: "4.60",
        QUOTE2: "7.30",
        LINK: "https://betcity.ru/ru/line/soccer/296218/14728241",
        AMOUNT: "100 000 ₽",
        DISCLAIMER: "*До 100 000 рублей в виде фрибетов**.** Фрибет – предоставляемый компанией бонус, которым клиент компании может воспользоваться для заключения пари с ООО «Фортуна». Сроки проведения акции: с 14.11.2022 (00:00:00 МСК) по 31.12.2024 (23:59:59 МСК). Для участия в акции участнику необходимо зарегистрироваться и сделать ставку  от 500 рублей на любое событие с кф. от 1.8 на сайте www.betcity.ru или в мобильном приложении Бетсити. Полные правила акции, информацию об организаторе, призовом фонде, количестве призов или выигрышей, сроках, месте и порядке получения призов или выигрышей можно узнать на сайте www.betcity.ru. Розыгрыш происходит в момент совершения события. Источник информации об организаторе основанных на риске игр, пари, о правилах их проведения, о призовом фонде таких игр, пари, о количестве призов или выигрышей, о сроках, месте и порядке получения призов или выигрышей можно узнать на сайте www.betcity.ru.",
    };

    if (CHAMPIONAT_STATIC) {
        //ставим статический объект
        data = { ...CHECKSTATIC, ...preCapturedDATA };
    } else {
        // парсим данные, полученные с API
        data = _objectSpread(_objectSpread({}, ev), autobet.fields);
    }

    gsapAnimations(data, AUTOEVENT);

    DEVMODE && console.log(data);
    init();
    hasPromocode();
    hasEvent();

    document.body.classList.add("loaded");

    function init() {
        if (DEVMODE) {
            if (!AUTOEVENT) {
                console.log("%cСобытие отключено", "color: #ccc; font-weight: bold;  font-size: 2em");
            } else if (data.STATIC_OGJ) {
                console.log("%cДанные из статического объекта", "color: gold; font-weight: bold;  font-size: 2em");
            } else {
                data.CHAMP ? console.log("%cДанные из API получены", "color: green; font-weight: bold;  font-size: 2em") : console.log("%cДанные из API НЕ получены", "color: red; font-weight: bold; font-size: 2em");
            }
        }

        document.body.classList.add(data.CHAMP ? "data-received" : "data-not-received");

        _toConsumableArray(elements).forEach(function (el) {
            if (el.tagName == "SPAN" || el.tagName == "DIV") {
                data[el.dataset.autobet] ? (el.innerText = data[el.dataset.autobet]) : null;
            }

            if (el.tagName == "IMG") {
                data[el.dataset.autobet] ? (el.src = data[el.dataset.autobet]) : null;
            }
        });
    }

    function hasPromocode() {
        // console.log("data.PROMOCODE:" + Boolean(data.PROMOCODE));

        if (!data.PROMOCODE) {
            document.body.classList.add("has-no-promocode");
            return;
        }

        document.body.classList.add("has-promocode");
    }

    function hasEvent() {
        // console.log("data.EVENT:" + Boolean(data.EVENT));

        if (!data.EVENT) {
            // console.log("!data.EVENT");
            return;
        }

        if (data.QUOTEX === "") {
            document.body.classList.add("two-teams");
        }

        document.body.classList.add("has-event");

        if (!data.LIVE) {
            document.body.classList.add("live-not-avaliable");
        } else {
            // console.log("Live");
            document.body.classList.add("live-is-avaliable");
        }
    }

    ///////////////////////////////////
}
