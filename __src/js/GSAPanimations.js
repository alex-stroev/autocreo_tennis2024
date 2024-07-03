//////////////////////////////////////////////////////////////////////////////
//   Анимации для статического кадра
//////////////////////////////////////////////////////////////////////////////
const tlStaticHeaderOffer100 = gsap.timeline();
tlStaticHeaderOffer100.from(".gsap-top-1", { autoAlpha: 0, y: "-100%", duration: 0.3 });
tlStaticHeaderOffer100.from(".gsap-top-2", { autoAlpha: 0, y: "-200%" });

//////////////////////////////////////////////////////////////////////////////
//   Анимации для второго кадра
//////////////////////////////////////////////////////////////////////////////
const zzzqqq = gsap.timeline();
zzzqqq.from(".gsap-top-q3", { autoAlpha: 0, y: "-100%", duration: 0.3 });
// tlStaticHeaderOffer100.from(".gsap-top-2", { autoAlpha: 0, y: "-200%" });

export { tlStaticHeaderOffer100, zzzqqq };
