const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      // when window width is >= 320px
      640: {
        slidesPerView: 1,
        spaceBetween: 18
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 18
      },
      // when window width is >= 640px
      1188: {
        slidesPerView: 3,
        spaceBetween: 28
      }
    },

    autoplay: {
      delay: 1000,
    },

  
});