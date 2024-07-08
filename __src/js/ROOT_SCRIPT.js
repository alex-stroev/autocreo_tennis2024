import { _toConsumableArray, _objectSpread } from "./APIhelpers";
import { framesHandler } from "./framesHandler";

///////////////////////////////////////////////////////
// Флаги
///////////////////////////////////////////////////////
const DEVMODE = 1; // флаг переключает вывод веселых разноцветных консолек (1 - есть инфа в консоли, 0 - нет инфы в консоли)
const FROM_STATIC_OBJECT = 0; // флаг переключает вывод инфы из статического объекта (1 - из предварительно спертого объекта, т.е. для чемпионата, 0 -  из API). Не забываем для чемпионата ставить нужный класс в Body и убирать подключение autobet.js
const AUTOEVENT = 1; // флаг переключает анимацию двух кадров (1 - два кадра, 0 - один кадр)

///////////////////////////////////////////////////////
// чисто для отладки
///////////////////////////////////////////////////////
const CHECKSTATIC = {
    STATIC_OGJ: true,
};
const BODY = document.body || document.getElementsByTagName("body")[0];
window.addEventListener("DOMContentLoaded", function () {
    // Если инфа из статики, то запускам просто runautobet();

    if (FROM_STATIC_OBJECT) {
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
        ID: 16394763,
        CH: 4105,
        SP: 2,
        SPORT: "Теннис",
        CHAMP: "Уимблдон. ",
        EVENT: "Дэниел Эванс - Алехандро Табило",
        TEAM1: "Дэниел Эванс",
        VS: "Ничья",
        TEAM2: "Алехандро Табило",
        LOGO1: "https://fcdn.betcity.ru/autobet/images/flag_2/GB.png",
        LOGO2: "https://fcdn.betcity.ru/autobet/images/flag_2/CL.png",
        START: 1720008000,
        STARTTIME: "15:00",
        STARTDATE: "03.07",
        STARTDAY: 3,
        STARTMONTH: "Июля",
        STARTWEEKDAY: "Среда",
        STARTHUMDAY: "Сегодня",
        LIVE: false,
        QUOTE1: "4.51",
        QUOTEX: "",
        QUOTE2: "1.20",
        LINK: "https://betcity.ru/ru/line/tennis/4105/16394763",
        AMOUNT: "5 000 ",
        DISCLAIMER: "Бонус зачисляется в виде фрибета** и равен сумме первой ставки, но не более 2 000 ₽ **Фрибет – предоставляемый компанией бонус, которым клиент компании может воспользоваться для заключения пари с ООО «Фортуна». Сроки проведения акции: с  (00:00:00 МСК) по 31.12.2024 (23:59:59 МСК). Полные правила акции, информацию об организаторе основанных на риске игр, пари, о правилах их проведения, о призовом фонде таких игр, пари, о количестве призов или выигрышей, о сроках, месте и порядке получения призов или выигрышей можно узнать на сайте www.betcity.ru. ",
        PROMOCODE: "5000BET",
    };

    if (FROM_STATIC_OBJECT) {
        //ставим статический объект
        data = { ...CHECKSTATIC, ...preCapturedDATA };
    } else {
        // парсим данные, полученные с API
        data = _objectSpread(_objectSpread({}, ev), autobet.fields);
    }

    framesHandler(data, AUTOEVENT);

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
            BODY.classList.add("has-no-promocode");
            return;
        }

        BODY.classList.add("has-promocode");
    }

    function hasEvent() {
        // console.log("data.EVENT:" + Boolean(data.EVENT));

        if (!data.EVENT) {
            // console.log("!data.EVENT");
            return;
        }

        BODY.classList.add("has-event");

        if (!data.QUOTEX) {
            BODY.classList.add("only-2-quotes");
        }

        if (!data.LIVE) {
            BODY.classList.add("live-not-avaliable");
        } else {
            // console.log("Live");
            BODY.classList.add("live-is-avaliable");
        }
    }
}
