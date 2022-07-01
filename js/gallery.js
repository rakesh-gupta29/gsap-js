const bg = document.querySelectorAll(".gallery img ");
gsap.registerPlugin(ScrollTrigger);
gsap.to(bg, {
  duration: 0.8,
  stagger: 0.05,
  opacity: 1,
  ease: false,
  scale: 1,
  scrollTrigger: {
    trigger: ".gallery",
    toggleActions: "restart pause resume reset",
    start: "top 60%",
  },
});
gsap.to(bg, {
  duration: 0.8,
  stagger: 0.05,
  opacity: 1,
  ease: false,
  scale: 1,
  delay: 14,
});
