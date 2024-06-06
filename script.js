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
