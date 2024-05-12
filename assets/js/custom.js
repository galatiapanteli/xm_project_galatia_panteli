var event_gallery_swiper = new Swiper('.event-gallery__swiper', {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 25,
    navigation: {
        nextEl: ".event-gallery__swiper-container .swiper-button-next",
        prevEl: ".event-gallery__swiper-container .swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 35,
        },
    },
});

/*AOS Initialize*/
AOS.init({
    disable: 'mobile'
});