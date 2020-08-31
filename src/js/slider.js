import Swiper from "./swiper.min.js";
const slider = document.querySelectorAll(".slider-container");
let mySwiper;
let state = false;
function mobileSlider() {
    let tablet = window.matchMedia('(min-width: 768px');
    if (!tablet.matches) {
        if (!state) {
            state = true;
            mySwiper = new Swiper(slider, {
                slidesPerView: 1,
                spaceBetween: 1,
                loop: true,
                slideClass: "swiper-slide",
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                },
            });
        }
    } else {
        if (mySwiper) {
            mySwiper.forEach(Lel=>Lel.destroy())
            state = false;
        }
    }
}
window.addEventListener('load', mobileSlider);
window.addEventListener("resize", mobileSlider);























