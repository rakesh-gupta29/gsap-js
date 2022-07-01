gsap.registerPlugin(ScrollTrigger);
const select = (q) => document.querySelector(q);
const selectAll = (q) => document.querySelectorAll(q);
const imgNode = select(".svg");

// gsap.from(imgNode, {
//   duration: 10,
//   left: -100,
//   scrollTrigger: {
//     trigger: imgNode,
//     toggleActions: "restart pause resume reset",
//     start: "top bottom",
//   },
//   ease: false,
//   repeat: -1,
//   paused: false,
// });
