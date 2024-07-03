import { createElementFromHTML } from "./helpers";
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

    const static100options = {
        yoyo: true,
        repeat: repeatCase ? 1 : 0,
        repeatDelay: ballAnimationDuration,
        duration: animationDuration,
    };

    // Паузим только если есть данные
    const paused = isData;
    // console.log("paused: " + paused);

    //////////////////////////////////////////////////////////////////////////////
    //   Анимации для статического кадра
    //////////////////////////////////////////////////////////////////////////////

    const tlStaticHeaderOffer100 = gsap.timeline({ paused: paused, ...static100options });
    const tlStaticAsideOffers2000 = gsap.timeline({ paused: paused, ...static100options });
    const tlStaticHeaderGETBONUS = gsap.timeline();

    // tlStaticHeader.from(".header .offer-100 span", { y: "-100%", autoAlpha: 0, duration: zzz });

    tlStaticHeaderOffer100.from(".gsap-top-1", { autoAlpha: 0, duration: 0.3 });
    tlStaticHeaderOffer100.from(".gsap-top-2", { autoAlpha: 0 });
    tlStaticHeaderGETBONUS.from(".header__getbonus", { autoAlpha: 0 }); // запускаеи ОДИН РАЗ, в цикл НЕ включаем

    // tlStaticAsideOffers2000.from(".aside__promo", { autoAlpha: 0 });
    tlStaticAsideOffers2000.from(".gsap-aside-1", { y: "-100%", autoAlpha: 0 });

    // Для запуска прописываем все таймлайны в массив
    const animationsStatic = [tlStaticHeaderOffer100, tlStaticAsideOffers2000];

    // //////////////////////////////////////////////////////////////////////////////
    // //   Анимации для  кадра с данными
    // //////////////////////////////////////////////////////////////////////////////
    // const tlAPIheaderCHAMP = gsap.timeline({ paused: paused });
    // // const tlAPIheaderGETBONUS = gsap.timeline({ paused: paused });
    // const tlAPIheaderQuotes = gsap.timeline({ paused: paused });
    // const topAPIball = gsap.timeline({ paused: paused });
    // const tlAPIasideQuotesLeft = gsap.timeline({ paused: paused });
    // const tlAPIasideQuotesRight = gsap.timeline({ paused: paused });
    // const tlAPIasideTshirtLeft = gsap.timeline({ paused: paused });
    // const tlAPIasideTshirtRight = gsap.timeline({ paused: paused });

    // tlAPIheaderCHAMP.from(".top-banner__champ", { y: "-100%", autoAlpha: 0, duration: 0.5, delay: frameFadeDuration });
    // tlAPIheaderQuotes.from(".top-quotes__item span", { y: "-100%", autoAlpha: 0, duration: 0.5, stagger: 0.2, delay: frameFadeDuration });

    // // topAPIball.from(".large-header__top img", { y: "-1500%", autoAlpha: 0, duration: 3, ease: "bounce.out"});
    // topAPIball.to(".large-header__top img", { y: "-30%", duration: frameStageDuration / 5, repeat: 4, yoyo: true });

    // tlAPIasideQuotesLeft.from(".i-aside-left .aside-quotes__item span", { y: "-100%", autoAlpha: 0, duration: 0.5, stagger: 0.2, delay: frameFadeDuration });
    // tlAPIasideQuotesRight.from(".i-aside-right .aside-quotes__item span", { y: "-100%", autoAlpha: 0, duration: 0.5, stagger: 0.2, delay: frameFadeDuration });

    // tlAPIasideTshirtLeft.from(".i-aside-left .aside__teampic img", { x: "120%", autoAlpha: 0, duration: 0.4, delay: frameFadeDuration, repeat: 1, yoyo: true, repeatDelay: frame2duration });
    // tlAPIasideTshirtRight.from(".i-aside-right .aside__teampic img", { x: "-120%", autoAlpha: 0, duration: 0.4, delay: frameFadeDuration, repeat: 1, yoyo: true, repeatDelay: frame2duration });

    // // Для запуска прописываем все таймлайны в массив
    // const animationsAPI = [tlAPIheaderCHAMP, tlAPIheaderQuotes, tlAPIasideQuotesLeft, tlAPIasideQuotesRight, tlAPIasideTshirtLeft, tlAPIasideTshirtRight, topAPIball];

    //////////////////////////////////////////////////////////////////////////////
    // запускаем анимацию статического кадра в любом случае
    startAnimations(animationsStatic);
    // BODY.classList.add("body-frame-1");

    ///////////////////////////////////
    // const headerFRAME1 = createElementFromHTML(HEADER_FRAME_1.innerHTML); // забираем при инициализации

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

        // startAnimations(animationsStatic);

        frameStatic.forEach((item) => {
            showStage(item);
        });
        // setTimeout(() => {
        //     stopAnimations(animationsAPI);
        // }, frameFadeDuration * 1000);
    }

    function showFrame__API() {
        frameStatic.forEach((item) => {
            hideStage(item);
        });

        // startAnimations(animationsAPI);

        frameApi.forEach((item) => {
            showStage(item);
        });

        // setTimeout(() => {
        //     stopAnimations(animationsStatic);
        // }, frameFadeDuration * 1000);
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
            // console.log(item);
            item.play();
        });
    }

    function stopAnimations(x) {
        x.forEach((item) => {
            // console.log(item);
            item.pause(0);
        });
    }

    //////////////////////////////////////////////////////////// end module
};

export { framesHandler };
