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
  //
  const tlHeaderRightBonus = gsap.timeline({
    repeat: 0,
  });
  
  tlHeaderRightBonus.from(".gsap-top-3right", {
    autoAlpha: 0,
    y: "-100%",
    duration: 0.3,
  });
  
  export { tlStaticHeaderOffer, tlHeaderRightBonus };
  