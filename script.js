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
