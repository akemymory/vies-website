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

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from actually submitting

    // Collect form data
    const coupleName = document.getElementById("coupleName").value;
    const email = document.getElementById("email").value;
    const lookingFor = document.querySelector(
      'input[name="lookingFor"]:checked'
    ).value;
    const venueLocation = document.getElementById("venueLocation").value;
    const guests = document.getElementById("guests").value;
    const reason = document.getElementById("reason").value;

    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.textContent =
      "Thank you for your submission. We will get back to you as soon as possible.";
    confirmationMessage.style.display = "block"; // Display the message
  });
