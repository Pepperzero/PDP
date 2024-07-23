//alert("it works");

//////// Swipers

$(".slider_component").each(function (index) {
  const swiper = new Swiper($(this).find(".swiper")[0], {
    effect: "fade",
    crossFade: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    centerInsufficientSlides: true,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is-disabled",
    },
  });
});

$(".cards_component").each(function (index) {
  const swiper = new Swiper($(this).find(".swiper")[0], {
    //effect: "fade",
    //crossFade: true,
    slidesPerView: 1.2,
    initialSlide: 1,
    centeredSlides: true,
    centerInsufficientSlides: true,
    slideActiveClass: "is-active",
    spaceBetween: 12,
    speed: 800,
    //loop: true,
    breakpoints: {
      // when it gets bigger than 478px
      478: {
        enabled: false,
        centeredSlides: true,
        slidesPerView: 3,
        initialSlide: 1,
        //slidesPerGroup: 3,
        spaceBetween: 24,
      },
    },
  });
});

$(".history_slider_component").each(function (index) {
  const swiper = new Swiper($(this).find(".swiper")[0], {
    //effect: "fade",
    //crossFade: true,
    slidesPerView: 1.2,
    //initialSlide: 1,
    //centeredSlides: true,
    //centerInsufficientSlides: true,
    //slideActiveClass: "is-active",
    spaceBetween: 16,
    slideToClickedSlide: true,
    speed: 800,
    //loop: true,
    breakpoints: {
      // when it gets bigger than 478px
      478: {
        centeredSlides: true,
        slidesPerView: 1.2,
        //initialSlide: 1,
        //slidesPerGroup: 3,
        spaceBetween: 16,
      },
    },
  });
});

////////// Text animation on scroll

// Split text into spans
let typeSplit = new SplitType("[text-split]", {
  //types: "words, chars",
  types: "words",
  tagName: "span",
});

// Link timelines to scroll position
function createScrollTrigger(triggerElement, timeline) {
  // Reset tl when scroll out of view past bottom of screen
  ScrollTrigger.create({
    trigger: triggerElement,
    start: "top bottom",
    onLeaveBack: () => {
      timeline.progress(0);
      timeline.pause();
    },
  });
  // Play tl when scrolled into view (95% from top of screen)
  ScrollTrigger.create({
    trigger: triggerElement,
    start: "top 95%",
    onEnter: () => timeline.play(),
  });
}

function animateWords() {
  $("[txt-animation]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.fromTo(
      $(this).find(".word"),
      {
        opacity: 0,
        y: "1em",
      },
      {
        opacity: 1,
        y: "0em",
        duration: 0.6,
        ease: "power1.out",
        delay: 0.2, // slight delay to start the animation
        stagger: { amount: 0.4 },
      }
    );
    createScrollTrigger($(this), tl);
  });
}

animateWords();

//////// Dropdown functionality

// const items = document.querySelectorAll(".accordion button");

// function toggleAccordion() {
//   const itemToggle = this.getAttribute("aria-expanded");

//   for (i = 0; i < items.length; i++) {
//     items[i].setAttribute("aria-expanded", "false");
//   }

//   if (itemToggle == "false") {
//     this.setAttribute("aria-expanded", "true");
//   }
// }

// items.forEach((item) => item.addEventListener("click", toggleAccordion));

// const items = $(".accordion button");

// function toggleAccordion() {
//   //const $this = $(this);
//   const itemToggle = this.attr("aria-expanded");

//   items.attr("aria-expanded", "false");

//   if (itemToggle == "false") {
//     this.attr("aria-expanded", "true");
//   }
// }

// items.on("click", toggleAccordion);

//////// DROPDOWN BEING
$("[dropdown]").on("click", function () {
  // Find the parent .being_item
  var parentItem = $(this).closest(".being_item");

  // Find the .dropdown_component within this parent
  var dropdownComponent = parentItem.find(".dropdown_component");

  console.log("clicked");
  // Toggle the height
  // if (dropdownComponent.height() === 0) {
  //   dropdownComponent.css("height", "auto");
  // } else {
  //   dropdownComponent.css("height", "0");
  // }
  if (dropdownComponent.height() === 0) {
    dropdownComponent.css("height", "auto");
    var autoHeight = dropdownComponent.height();
    dropdownComponent.css("height", "0");
    dropdownComponent.animate({ height: autoHeight }, 300);
  } else {
    dropdownComponent.animate({ height: 0 }, 300);
  }
});

//////// DROPDOWN TIME
// $("[dropdown-time]").on("click", function () {
//   // Find the parent .being_item
//   var parentItem = $(this).closest(".time_distance-wrap");

//   // Find the .dropdown_component within this parent
//   var dropdownComponent = parentItem.find(".time_distance-cards");

//   console.log("clicked");
//   if (dropdownComponent.height() === 0) {
//     dropdownComponent.css("height", "auto");
//     var autoHeight = dropdownComponent.height();
//     dropdownComponent.css("height", "0");
//     dropdownComponent.animate({ height: autoHeight }, 300);
//   } else {
//     dropdownComponent.animate({ height: 0 }, 300);
//   }
// });

/////// DROPDOWN TIME
window.addEventListener("DOMContentLoaded", (event) => {
  let drop = $(".time_distance-wrap");

  drop.each(function (index) {
    let dropTrigger = $(this).find(".time_distance-trigger");
    let dropContent = $(this).find(".time_distance-cards");
    let dropImage = $(this).find(".time_distance_img-wrap");
    let dropInfo = $(this).find(".timer_distance_txt_inner-wrap");

    let mm = gsap.matchMedia();

    let openDropdown = gsap.timeline({
      paused: true,
      defaults: {
        duration: 1,
        ease: "power2.inOut",
      },
      onReverseComplete: () => {
        dropTrigger.attr("aria-label", "Open Main Menu");
      },
      onComplete: () => {
        //dropContent.find("button").first().focus();
        dropTrigger.attr("aria-label", "Close Main Menu");
      },
    });

    mm.add("(min-width: 480px)", () => {
      // desktop setup code here...
      openDropdown.to(dropImage, {
        height: 0,
        autoAlpha: 0,
        display: "none",
      });
      openDropdown.to(
        dropInfo,
        {
          height: 0,
          autoAlpha: 0,
          display: "none",
        },
        "<"
      );
      openDropdown.to(
        dropTrigger,
        {
          //duration: 0.2,
          height: "6.6rem",
        },
        "<"
      );
      openDropdown.to(
        dropContent,
        {
          height: "auto",
          autoAlpha: 1,
          display: "block",
        }
        //"<"
      );
    });

    mm.add("(max-width: 479px)", () => {
      // mobile setup code here...
      // openDropdown.to(dropImage, {
      //   height: 0,
      //   autoAlpha: 0,
      //   display: "none",
      // });
      openDropdown.to(
        dropInfo,
        {
          height: 0,
          autoAlpha: 0,
          display: "none",
        },
        "<"
      );
      openDropdown.to(
        dropTrigger,
        {
          //duration: 0.2,
          height: "15.4rem",
        },
        "<"
      );
      openDropdown.to(
        dropContent,
        {
          height: "auto",
          autoAlpha: 1,
          display: "block",
        }
        //"<"
      );
    });

    // openDropdown.from(dropContent, { y: "-100%" }, '-=50%');
    // openDropdown.from(menuBackground, { opacity: 0 }, "<");
    // openDropdown.to(lines.eq(0), { y: 4, rotate: 45 }, "<");
    // openDropdown.to(lines.eq(1), { y: -4, rotate: -45 }, "<");

    dropTrigger.on("click", function () {
      if (openDropdown.progress() === 0) {
        openDropdown.play();
      } else {
        openDropdown.reverse();
        dropTrigger.attr("aria-label", "Open Main Menu");
      }
    });
    // menuBackground.on("click", function () {
    //   openDropdown.reverse();
    // });
    // $(document).on("keydown", function (e) {
    //   if (e.key === "Escape") openDropdown.reverse();
    // });
  });
});

/////////// MENU ANIMATION
window.addEventListener("DOMContentLoaded", (event) => {
  let navButton = $(".navbar_btn_lines");
  let menuWrap = $(".menu_wrap");
  let menuBackground = $(".menu_panel");
  let menuLinks = $(".menu_link");

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
  // showMainMenu.to(
  //   "[navbar-color='dark']",
  //   { attr: { "navbar-color": "light" } },
  //   "<"
  // );

  navButton.on("click", function () {
    if (showMainMenu.progress() === 0) {
      showMainMenu.play();
    } else {
      showMainMenu.reverse();
      navButton.attr("aria-label", "Open Main Menu");
    }
  });

  menuBackground.on("click", function () {
    showMainMenu.reverse();
  });
  $(document).on("keydown", function (e) {
    if (e.key === "Escape") showMainMenu.reverse();
  });
});

//////// MENU SCROLL TRIGGER
gsap.registerPlugin(ScrollTrigger);

let logo = $(".nav_logo_wrap");
let page = $(".page_wrapper");
let navbar = $(".nav_wrap");
let menuLines = $(".navbar_separation-line");
let payoff = $(".navbar_payoff-txt");

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
scrollTl.to(navbar, { backgroundColor: "#e0d7d0", height: "4.5rem" }, "<");
scrollTl.to(menuLines, { autoAlpha: 0, opacity: 0 }, "<");
scrollTl.to(payoff, { autoAlpha: 0, opacity: 0 }, "<");
scrollTl.to($(".navbar_btn_wrap"), { marginBottom: "0rem", y: "-1rem" }, "<");
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

// --navbar-menu--button-outline: var(--base-color-neutral--brown-dark);
//   --navbar-menu--button-txt: var(--base-color-neutral--brown-dark);
//   --navbar-menu--button-bg-hover: var(--base-color-neutral--brown-dark);
// 	--navbar-menu--button-txt-hover: var(--base-color-neutral--white);
