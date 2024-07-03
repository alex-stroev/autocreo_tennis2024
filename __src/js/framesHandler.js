import { createElementFromHTML } from "./helpers";
import { tlStaticHeaderOffer100 } from "./gsapAnimations";
const framesHandler = (data, AUTOEVENT) => {
    const BODY = document.body || document.getElementsByTagName("body")[0];
    const HEADER_FRAME_1 = document.getElementById("header-frame1");
    const HEADER_FRAME_2 = document.getElementById("header-frame2");
    const LEFT_FRAME_1 = document.getElementById("left-frame1");
    const LEFT_FRAME_2 = document.getElementById("left-frame2");
    const RIGHT_FRAME_1 = document.getElementById("right-frame1");
    const RIGHT_FRAME_2 = document.getElementById("right-frame2");

    //////////////////////////////////////////////////////////////////////////////
    // Durations. Время указываем в секундах
    //////////////////////////////////////////////////////////////////////////////

    const ballAnimationDuration = 1.5;

    const frameFadeDuration = 0.3;
    const frameStageDuration = ballAnimationDuration * 2 + frameFadeDuration * 2;

    const animationDuration = 0.4; //0.4
    const frame2duration = ballAnimationDuration * 1.75;

    //
    const frameStatic = document.querySelectorAll(".i-gsap-frame--static");
    const frameApi = document.querySelectorAll(".i-gsap-frame--api"); // При APPEND не инициализируется
    const isData = Boolean(data.CHAMP);
    const repeatCase = isData && AUTOEVENT;

    // Паузим только если есть данные
    const paused = isData;
    // console.log("paused: " + paused);

    // Для запуска прописываем все таймлайны в массив
    const animationsStatic = [tlStaticHeaderOffer100];
    const animationsAPI = [];

    //////////////////////////////////////////////////////////////////////////////
    // запускаем анимацию статического кадра в любом случае
    startAnimations(animationsStatic);

    //////////////////////////////////////////////////////////////////////////////
    //  Убираем лишнюю точку в конце чемпионата
    //////////////////////////////////////////////////////////////////////////////

    if (data.CHAMP && data.CHAMP.split(".")[1] && data.CHAMP.split(".")[1].trim() === "") {
        data.CHAMP = data.CHAMP.split(".")[0];
    }

    //////////////////////////////////////////////////////////////////////////////
    //  HEADER
    //////////////////////////////////////////////////////////////////////////////

    const headerKEFS = Boolean(data.QUOTEX)
        ? `
                <div class="top-quotes-3">
                    <div class="top-quotes-3__item">${data.QUOTE1}</div>
                    <div class="top-quotes-3__item">${data.QUOTEX}</div>
                    <div class="top-quotes-3__item">${data.QUOTE2}</div>
                </div>
    `
        : `
            <div class="top-quotes-2">
                    <div class="top-quotes-2__item">${data.QUOTE1}</div>
                    <div class="top-quotes-2__item">${data.QUOTE2}</div>
                </div>
    
    `;

    const headerFRAME2 = createElementFromHTML(`
    <div class="top-banner">
        <div class="top-banner__team">${data.TEAM1}</div>
        <div class="top-banner__pic">
            <img src="${data.LOGO1}" alt="" />
        </div>
        <div class="top-banner__content">
            <div class="top-banner__champ">${data.CHAMP}</div>
            <div class="top-banner__time"><span>${data.STARTDATE}</span>/<span>${data.STARTTIME}</span></div>
            <div class="top-banner__live">
                <span>Live</span>
            </div>

            <div class="top-banner__lowwrapper">
                <div class="large-header">
                    <div class="large-header__top"><img src="img/lilball.png" alt="" width="36" height="36" /></div>
                    <div class="large-header__teams">
                        <div class="large-header__team">${data.TEAM1}</div>
                        <div class="large-header__team">${data.TEAM2}</div>
                    </div>
                </div>
                ${headerKEFS}
            </div>
        </div>
        <div class="top-banner__pic">
            <img src="${data.LOGO2}" alt="" />
        </div>
        <div class="top-banner__team">${data.TEAM2}</div>
        <div class="top-banner__teams-mob">
            <div>${data.TEAM1}</div>
            <div>${data.TEAM2}</div>
        </div>
    </div>

    `);

    //////////////////////////////////////////////////////////////////////////////
    //  ASIDES
    //////////////////////////////////////////////////////////////////////////////

    function createASIDEcontent(isLeft = true) {
        const teamPic = isLeft ? `${data.LOGO1}` : `${data.LOGO2}`;
        const teamName = isLeft ? `${data.TEAM1}` : `${data.TEAM2}`;
        const singleKEF = isLeft ? `${data.QUOTE1}` : `${data.QUOTE2}`;

        const KEFSoutput = Boolean(data.QUOTEX)
            ? `
            <div class="aside-quotes">
                <div class="aside-quotes__item"><span>${data.QUOTE1}</span></div>
                <div class="aside-quotes__item"><span>${data.QUOTEX}</span></div>
                <div class="aside-quotes__item"><span>${data.QUOTE2}</span></div>
            </div>  
        `
            : `
            <div class="aside-one-kef"><span>${singleKEF}</span></div>
`;

        const createdFrame = createElementFromHTML(`
    <div>
        <div class="aside__champ">${data.CHAMP}</div>
        <div class="aside__datetime">
            <span>${data.STARTDATE}</span>
            /
            <span>${data.STARTTIME}</span>
        </div>
        <div class="aside__teampic">
            <img src="${teamPic}" alt="" />
        </div>
         <div class="aside__teamname"><div class="aside__teamname">${teamName}</div></div>
        ${KEFSoutput}
    </div>     
    `);

        return createdFrame;
    }

    //////////////////////////////////////////////////////////////////////////////
    //   Переключение кадров (запускается только при наличии DATA) и при флаге AUTOEVENT
    //////////////////////////////////////////////////////////////////////////////

    if (isData && AUTOEVENT) {
        showFrame__static(); // начальный запуск
        HEADER_FRAME_2.appendChild(headerFRAME2);
        LEFT_FRAME_2.appendChild(createASIDEcontent(true));
        RIGHT_FRAME_2.appendChild(createASIDEcontent(false));

        let i = false;

        setInterval(function () {
            // срабатывает через frameStageDuration
            i ? showFrame__static() : showFrame__API();
            i = !i;
        }, frameStageDuration * 1000);
    } else {
        // если нет даннных, просто запускаем анимацию статического кадра
        // startAnimations(animationsStatic);
    }

    ///// end if

    function showFrame__static() {
        frameApi.forEach((item) => {
            hideStage(item);
        });

        frameStatic.forEach((item) => {
            showStage(item);
        });

        setTimeout(() => {
            startAnimations(animationsStatic);
        }, frameFadeDuration * 1000);

        setTimeout(() => {
            stopAnimations(animationsAPI);
        }, frameFadeDuration * 1000);
    }

    function showFrame__API() {
        frameStatic.forEach((item) => {
            hideStage(item);
        });

        setTimeout(() => {
            startAnimations(animationsAPI);
        }, frameFadeDuration * 1000);

        frameApi.forEach((item) => {
            showStage(item);
        });

        setTimeout(() => {
            stopAnimations(animationsStatic);
        }, frameFadeDuration * 1000);
    }

    //////////////////////////////////////////////////////////////////////////////
    //   Появление/скрытие кадров - хелперы
    //////////////////////////////////////////////////////////////////////////////

    function showStage(x) {
        x.style.display = "inherit";
        gsap.to(x, {
            duration: frameFadeDuration,
            opacity: 1,
            delay: frameFadeDuration,

            // onComplete() {
            //     x.style.position = "relative";
            // },
        });
    }

    function hideStage(x) {
        x.style.position = "absolute";
        gsap.to(x, {
            duration: frameFadeDuration,
            opacity: 0,
            onComplete() {
                x.style.display = "none";
            },
        });
    }

    //////////////////////////////////////////////////////////////////////////////
    //   Хелперы для запуска/остановки связанных анимаций
    //////////////////////////////////////////////////////////////////////////////

    function startAnimations(x) {
        x.forEach((item) => {
            item.play();
        });
    }

    function stopAnimations(x) {
        x.forEach((item) => {
            item.pause(0);
        });
    }

    //////////////////////////////////////////////////////////// end module
};

export { framesHandler };
