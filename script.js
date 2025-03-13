const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");
const slides = document.querySelectorAll(".home .slides-container .slide");
const header = document.querySelector(".header");

let index = 0;


document.addEventListener("DOMContentLoaded",
    function () {
        const hamburger = document.getElementById("hamburger");
        const navbar = document.querySelector(".navbar");

        hamburger.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });
    });

window.addEventListener("scroll", () => {
    navbar.classList.remove("active");
});

// Auto slideshow timer
setInterval(autoSlide, 5000); // change slide every 5 seconds

function showSlide(nextIndex) {
    slides[index].classList.remove("active");
    index = (nextIndex + slides.length) % slides.length;
    slides[index].classList.add("active");
}

function next() {
    showSlide(index + 1);
}

function prev() {
    showSlide(index - 1);
}

// Add event listeners to the slide buttons
document.getElementById('next-slide').addEventListener('click', next);
document.getElementById('prev-slide').addEventListener('click', prev);

function autoSlide() {
    next();
}

// Add CSS transitions to the slides
slides.forEach(slide => {
    slide.style.transition = 'opacity 0.5s';
});