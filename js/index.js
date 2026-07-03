(function () {
  if (typeof Swiper === "undefined") return;

  new Swiper(".hero-swiper", {
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    a11y: {
      enabled: true,
      prevSlideMessage: "Ver vehículo anterior",
      nextSlideMessage: "Ver siguiente vehículo",
      paginationBulletMessage: "Ir al vehículo destacado {{index}}"
    }
  });
})();
