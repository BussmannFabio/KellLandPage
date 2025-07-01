document.addEventListener("DOMContentLoaded", () => {
  if (typeof Swiper === "undefined") {
    console.error("Swiper não foi carregado!");
    return;
  }
  new Swiper(".mySwiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1, // <-- Preview dos lados
    spaceBetween: 20,
    grabCursor: true,
    initialSlide: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
});