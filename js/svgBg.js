const svgBg = document.querySelectorAll(".svg-bg .svg");
gsap.registerPlugin(ScrollTrigger);
gsap.to(svgBg, {
  duration: 50,
  rotation: 360,
  ease: Linear.easeNone,
  repeat: -1,
  paused: false,
});
