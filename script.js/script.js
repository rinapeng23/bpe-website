// SPA
document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById("home-link");
    const coursesLink = document.getElementById("courses-link");
    const bpeSection = document.getElementById("bpe");

    homeLink.addEventListener("click", () => {
        bpeSection.classList.add("hidden");
        alert("Welcome to the Home Page!");
    });

    coursesLink.addEventListener("click", () => {
        bpeSection.classList.remove("hidden");
    });
});

let currentIndex = 0;

function moveSlide(direction) {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
