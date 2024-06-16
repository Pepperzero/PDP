//alert("it works");

// $(".slider_component").each(function (index) {
//   const swiper = new Swiper($(this).find(".swiper")[0], {
//     slidesPerView: 1,
//     spaceBetween: 0,
//     speed: 500,
//     centerInsufficientSlides: true,
//     loop: true,
//     autoplay: {
//       delay: 6000,
//       disableOnInteraction: false,
//     },
//     navigation: {
//       nextEl: $(this).find(".swiper-next")[0],
//       prevEl: $(this).find(".swiper-prev")[0],
//       disabledClass: "is-disabled",
//     },
//   });
// });

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
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 800,
    centerInsufficientSlides: true,
    //loop: true,
    breakpoints: {
      // when it gets bigger than 478px
      478: {
        slidesPerView: 3,
        spaceBetween: 24,
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
/*

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    //slideShadows: false,
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: -96,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },

// Initialize Galeria Swiper de paginas externas
function initializeTeachersSwiper() {
  $(".slider-galeria_component").each(function (index) {

    const swiper4 = new Swiper($(this).find(".swiper")[0], {

      slidesPerView: 1,
      spaceBetween: 0,
      speed: 500,
      centerInsufficientSlides: true,
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      breakpoints: {
        // when it gets bigger than 478px
        478: {
          slidesPerView: 3
        },
      },
      navigation: {
        nextEl: $(this).find(".swiper-next")[0],
        prevEl: $(this).find(".swiper-prev")[0],
        disabledClass: "is-disabled"
      },
    });
  })
}
setTimeout(initializeTeachersSwiper, 1000);
*/
