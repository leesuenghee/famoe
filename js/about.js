let fonts = $(window).scrollTop();
console.log(fonts);
let rowSlide = $("#rowSlide").scrollTop();

gsap.registerPlugin(ScrollTrigger);
gsap.to("#fonts > div .text_1", {
  scrollTrigger: {
    trigger: "#fonts > div",
    markers: false,
    start: "top center",
    scrub: 3,
  },
  x: -400,
  duration: 3,
});
gsap.to("#fonts > div .text_2", {
  scrollTrigger: {
    trigger: "#fonts > div",
    markers: false,
    start: "top center",
    scrub: 3,
  },
  x: 400,
  duration: 3,
});
gsap.to("#fonts > div .text_3", {
  scrollTrigger: {
    trigger: "#fonts > div",
    markers: false,
    start: "top center",
    scrub: 3,
  },
  x: -400,
  duration: 3,
});

// section_03
gsap.to("#rowSlide .box", {
  scrollTrigger: {
    trigger: "#rowSlide .box",
    start: "top 0%",
    endTrigger: "#rowSlide .box",
    scrub: 2,
    pin: true,
  },
  // y: 400,
});

//slide
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
