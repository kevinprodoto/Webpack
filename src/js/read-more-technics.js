let readMoreTechnics = document.querySelector(".main-technics__read-more");
let slidesTechnics = document.querySelectorAll(".main-technics__button");
let iconTechnics = document.querySelector(".main-technics__icon");
readMoreTechnics.addEventListener("click", function() {
    if (readMoreTechnics.textContent === "Показать всё") {
        for (let i = 0; i < slidesTechnics.length; i++) {
            slidesTechnics[i].classList.remove("hidden-technics");
            readMoreTechnics.textContent = "Скрыть";
        }
    } else {
        for (let i = 3; i < slidesTechnics.length; i++) {
            slidesTechnics[i].classList.add("hidden-technics");
            readMoreTechnics.textContent = "Показать всё";
        }
      }
    iconTechnics.classList.toggle("rotate");
});