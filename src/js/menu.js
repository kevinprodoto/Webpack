let burgerMobile = document.querySelector(".burger-mobile");
let burgerLaptop = document.querySelector(".burger-laptop");
let close = document.querySelector(".close");
let modalMenu = document.querySelector(".modal-menu");
let callback = document.querySelector(".callback");
let feedback = document.querySelector(".feedback");
let callbackButton = document.querySelector(".callback-button");
let feedbackButton = document.querySelector(".feedback-button");
let callbackHeaderButton = document.querySelector(".header__callback");
let feedbackHeaderButton = document.querySelector(".header__feedback");
let callbackClose = document.querySelector(".callback__close");
let feedbackClose = document.querySelector(".feedback__close");
let mainInactive = document.querySelector(".main");
let fader = document.querySelector(".fader");
burgerMobile.addEventListener("click", function () {
    fader.classList.remove("fader--disabled");
    fader.classList.add("fader--active");
    modalMenu.classList.add("modal-active");
});
burgerLaptop.addEventListener("click", function () {
    fader.classList.remove("fader--disabled");
    fader.classList.add("fader--active");
    modalMenu.classList.add("modal-active");
});
close.addEventListener("click", function () {
    fader.classList.add("fader--disabled");
    fader.classList.remove("fader--active");
    modalMenu.classList.remove("modal-active");
    feedback.classList.remove("feedback--active");
    callback.classList.remove("callback--active");
});
callbackButton.addEventListener("click", function () {
    fader.classList.remove("fader--disabled");
    fader.classList.add("fader--active");
    modalMenu.classList.remove("modal-active");
    callback.classList.add("callback--active");
    feedback.classList.remove("feedback--active");
});
feedbackButton.addEventListener("click", function () {
    fader.classList.remove("fader--disabled");
    fader.classList.add("fader--active");
    modalMenu.classList.remove("modal-active");
    feedback.classList.add("feedback--active");
    callback.classList.remove("callback--active");
});
callbackHeaderButton.addEventListener("click", function () {
    fader.classList.remove("fader--disabled");
    fader.classList.add("fader--active");
    modalMenu.classList.remove("modal-active");
    callback.classList.add("callback--active");
    feedback.classList.remove("feedback--active");
});
feedbackHeaderButton.addEventListener("click", function () {
    fader.classList.remove("fader--disabled");
    fader.classList.add("fader--active");
    modalMenu.classList.remove("modal-active");
    feedback.classList.add("feedback--active");
    callback.classList.remove("callback--active");
});
callbackClose.addEventListener("click", function () {
    fader.classList.add("fader--disabled");
    fader.classList.remove("fader--active");
    callback.classList.remove("callback--active");
    feedback.classList.remove("feedback--active");
});
feedbackClose.addEventListener("click", function () {
    fader.classList.add("fader--disabled");
    fader.classList.remove("fader--active");
    feedback.classList.remove("feedback--active");
    callback.classList.remove("callback--active");
});
fader.addEventListener("click", function () {
    feedback.classList.remove("feedback--active");
    callback.classList.remove("callback--active");
    fader.classList.add("fader--disabled");
    fader.classList.remove("fader--active");
    modalMenu.classList.remove("modal-active");
});
