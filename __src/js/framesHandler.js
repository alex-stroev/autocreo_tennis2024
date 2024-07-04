import { tlStaticHeaderOffer, tlTOPquotes3, tlTOPquotes2, tlASIDEquotes3, tlASIDEquotes3r } from "./gsapAnimations";
const framesHandler = (data, AUTOEVENT) => {
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
    const frameApi = document.querySelectorAll(".i-gsap-frame--api");
    const isData = Boolean(data.CHAMP);
    const repeatCase = isData && AUTOEVENT;

    //////////////////////////////////////////////////////////////////////////////
    //  Запускаем loop для выбранных анимаций
    //////////////////////////////////////////////////////////////////////////////
    if (repeatCase) {
        loopAnimations([tlStaticHeaderOffer]);
    }

    //////////////////////////////////////////////////////////////////////////////
    //  Для запуска/остановки прописываем все таймлайны в массивы
    //////////////////////////////////////////////////////////////////////////////
    //
    const animationsStatic = [tlStaticHeaderOffer];
    const animationsAPI = [tlTOPquotes3, tlTOPquotes2, tlASIDEquotes3, tlASIDEquotes3r];

    //////////////////////////////////////////////////////////////////////////////
    //  Убираем лишнюю точку в конце чемпионата
    //////////////////////////////////////////////////////////////////////////////

    if (data.CHAMP && data.CHAMP.split(".")[1] && data.CHAMP.split(".")[1].trim() === "") {
        data.CHAMP = data.CHAMP.split(".")[0];
    }

    //////////////////////////////////////////////////////////////////////////////
    //
    //////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////
    //  Переключение кадров (запускается только при наличии DATA) и при флаге AUTOEVENT
    //////////////////////////////////////////////////////////////////////////////

    if (isData && AUTOEVENT) {
        let i = false;

        // срабатывает через frameStageDuration

        setInterval(function () {
            i ? showFrame__static() : showFrame__API();
            i = !i;
        }, frameStageDuration * 1000);
    }

    ///// end if

    //////////////////////////////////////////////////////////////////////////////
    //  Кадр 1
    //////////////////////////////////////////////////////////////////////////////

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

    //////////////////////////////////////////////////////////////////////////////
    //  Кадр 2
    //////////////////////////////////////////////////////////////////////////////

    function showFrame__API() {
        frameStatic.forEach((item) => {
            hideStage(item);
        });

        frameApi.forEach((item) => {
            showStage(item);
        });

        setTimeout(() => {
            startAnimations(animationsAPI);
        }, frameFadeDuration * 1000);

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

    function loopAnimations(x) {
        x.forEach((item) => {
            item.repeat(1);
            item.yoyo(true);
            item.repeatDelay(ballAnimationDuration);
        });
    }

    //////////////////////////////////////////////////////////// end module
};

export { framesHandler };
