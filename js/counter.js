const counter = document.querySelectorAll(".counter .card h1");
gsap.registerPlugin(ScrollTrigger);

gsap.from(counter, {
  textContent: 0,
  duration: 3,
  scrollTrigger: {
    trigger: ".counter",
    toggleActions: "restart pause resume reset",
    start: "top 70%",
  },
  ease: "power1.in",
  snap: { textContent: 1 },
  stagger: {
    each: 0.1,
    onUpdate: function () {
      this.targets()[0].innerHTML = numberWithCommas(
        Math.ceil(this.targets()[0].textContent)
      );
    },
  },
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
