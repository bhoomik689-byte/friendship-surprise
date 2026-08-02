const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("main");

openBtn.addEventListener("click", () => {
    intro.style.display = "none";
    main.style.display = "block";
});

const slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}, 3000);
