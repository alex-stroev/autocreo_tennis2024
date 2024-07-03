//////////////////////////////////////////////////////////////////////////////
//   Анимации для статического кадра
//////////////////////////////////////////////////////////////////////////////
const tlStaticHeaderOffer = gsap.timeline();
tlStaticHeaderOffer.from(".gsap-top-1", {
  autoAlpha: 0,
  y: "-100%",
  duration: 0.3,
});
tlStaticHeaderOffer.from(".gsap-top-2", { autoAlpha: 0, y: "-200%" });

//////////////////////////////////////////////////////////////////////////////
//   Анимации для второго кадра (по умолчанию PAUSED)
//////////////////////////////////////////////////////////////////////////////
const zzzqqq = gsap.timeline({ paused: true });
zzzqqq.from(".gsap-top-q3", { autoAlpha: 0, y: "-100%", duration: 0.6 });
// tlStaticHeaderOffer100.from(".gsap-top-2", { autoAlpha: 0, y: "-200%" });

export { tlStaticHeaderOffer, zzzqqq };
