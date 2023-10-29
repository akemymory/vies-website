// JavaScript for a basic image slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.opacity = 1;
}

// Call the showSlide function with an interval to create a slideshow
setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000); // Adjust the interval duration as needed
