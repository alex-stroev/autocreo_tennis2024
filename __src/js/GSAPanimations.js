//////////////////////////////////////////////////////////////////////////////
//   Анимации для статического кадра
//////////////////////////////////////////////////////////////////////////////
const tlStaticHeaderOffer = gsap.timeline({
    yoyo: true,
});
tlStaticHeaderOffer.from(".gsap-top-1", {
    autoAlpha: 0,
    y: "-100%",
    duration: 0.3,
});
tlStaticHeaderOffer.from(".gsap-top-2", {
    autoAlpha: 0,
    y: "-100%",
    duration: 0.3,
});
tlStaticHeaderOffer.from(".gsap-top-3", {
    autoAlpha: 0,
    y: "-100%",
    duration: 0.3,
});

//////////////////////////////////////////////////////////////////////////////
//   Анимации для второго кадра (по умолчанию PAUSED)
//////////////////////////////////////////////////////////////////////////////
const tlTOPquotes3 = gsap.timeline({ paused: true });
tlTOPquotes3.from(".gsap-top-q3", {
    autoAlpha: 0,
    y: "-100%",
    duration: 0.4,
    stagger: 0.2,
});

const tlTOPquotes2 = gsap.timeline({ paused: true });
tlTOPquotes2.from(".gsap-top-q2", {
    autoAlpha: 0,
    y: "-50%",
    duration: 0.4,
    stagger: 0.2,
});

const aq3options = {
    autoAlpha: 0,
    y: "-50%",
    duration: 0.4,
    stagger: 0.2,
};
const tlASIDEquotes3 = gsap.timeline({ paused: true });
tlASIDEquotes3.from(".gsap-aside-q3", aq3options);

const tlASIDEquotes3r = gsap.timeline({ paused: true });
tlASIDEquotes3r.from(".gsap-aside-q3r", aq3options);
export { tlStaticHeaderOffer, tlTOPquotes3, tlTOPquotes2, tlASIDEquotes3, tlASIDEquotes3r };
