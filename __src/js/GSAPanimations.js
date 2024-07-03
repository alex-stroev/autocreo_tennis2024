//////////////////////////////////////////////////////////////////////////////
//   Анимации для статического кадра
//////////////////////////////////////////////////////////////////////////////
const tlStaticHeaderOffer100 = gsap.timeline({ yoyo: true, repeat: 1 });
tlStaticHeaderOffer100.from(".gsap-top-1", { autoAlpha: 0, y: "-100%", duration: 0.3 });
tlStaticHeaderOffer100.from(".gsap-top-2", { autoAlpha: 0, y: "-200%" });

export { tlStaticHeaderOffer100 };
