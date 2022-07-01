const imgWrapper = document.querySelector(".img-wrapper");
const imgNode = document.querySelector(".img-wrapper img ");
gsap.registerPlugin(ScrollTrigger);
gsap.from(imgNode, {
  duration: 1,
  width: 0,
  scale: 1.1,
  scrollTrigger: {
    trigger: imgNode,
    toggleActions: "restart pause resume reset",
    start: "top 75%",
  },
});
