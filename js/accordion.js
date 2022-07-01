gsap.registerPlugin(ScrollTrigger);

let groups = gsap.utils.toArray(".accordion-group");
let menus = gsap.utils.toArray(".accordion-menu");
let menuToggles = groups.map(createAnimation);

menus.forEach((menu) => {
  menu.addEventListener("click", () => toggleMenu(menu));
});

function toggleMenu(clickedMenu) {
  menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
}

function createAnimation(element) {
  let menu = element.querySelector(".accordion-menu");
  let box = element.querySelector(".accordion-content");

  gsap.set(box, { height: "auto" });

  let animation = gsap
    .from(box, {
      height: 0,
      duration: 0.5,
      ease: "power1.inOut",
    })
    .reverse();

  return function (clickedMenu) {
    if (clickedMenu === menu) {
      animation.reversed(!animation.reversed());
    } else {
      animation.reverse();
    }
  };
}
