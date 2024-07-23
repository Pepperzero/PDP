/////////// MENU ANIMATION
window.addEventListener("DOMContentLoaded", (event) => {
  let navButton = $(".navbar_btn_lines");
  let menuWrap = $(".menu_wrap");
  let menuBackground = $(".menu_panel");
  let menuLinks = $(".menu_link");
  let menuLines = $(".navbar_separation-line");

  let showMainMenu = gsap.timeline({
    paused: true,
    defaults: {
      duration: 1,
      ease: "power2.inOut",
    },
    onReverseComplete: () => {
      navButton.attr("aria-label", "Open Main Menu");
    },
    onComplete: () => {
      menuWrap.find("button").first().focus();
      navButton.attr("aria-label", "Close Main Menu");
    },
  });
  showMainMenu.set(menuWrap, { display: "block" });
  //showMainMenu.set(menuBackground, { display: "flex" }, "<");
  showMainMenu.from(menuWrap, { autoAlpha: 0, opacity: 0 }, "<");
  showMainMenu.from(menuBackground, { opacity: 0 }, "<");
  showMainMenu.from(menuLinks, { y: "100%", stagger: 0.1, opacity: 0 }, "<");
  showMainMenu.to(
    "html",
    {
      ["--navbar-menu--text"]: "#ffffff",
      ["--navbar-menu--button-txt"]: "#ffffff",
      ["--navbar-menu--button-outline"]: "#ffffff",
      ["--navbar-menu--button-bg-hover"]: "#ffffff",
      ["--navbar-menu--button-txt-hover"]: "#59514d",
    },
    "<"
  );
});

/////// MENU SCROLL TRIGGER
gsap.registerPlugin(ScrollTrigger);

let logo = $(".nav_logo_wrap");
let page = $(".page_wrapper");
let navbar = $(".nav_wrap");
let menuLines = $(".navbar_separation-line");

let scrollTl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power2.inOut",
  },
  scrollTrigger: {
    trigger: page,
    start: "320px 100px", // [trigger] [scroller] positions
    //end: "320px 100px", // [trigger] [scroller] positions
    //scrub: true,
    toggleActions: "play none none reverse",
    //markers: true,
  },
});

scrollTl.to(logo, { width: "5rem" });
scrollTl.to($(".nav_wrap"), { backgroundColor: "#e0d7d0" }, "<");
scrollTl.to(
  "html",
  {
    ["--navbar-menu--text"]: "#59514d",
    ["--navbar-menu--button-txt"]: "#59514d",
    ["--navbar-menu--button-outline"]: "#59514d",
    ["--navbar-menu--button-bg-hover"]: "#59514d",
    ["--navbar-menu--button-txt-hover"]: "#ffffff",
  },
  "<"
);
