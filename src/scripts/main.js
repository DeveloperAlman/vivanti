"use strict";
// Success banner on form
const handleFormSubmission = (event) => {
  event.preventDefault();

  const successBanner = document.getElementById("successBanner");
  successBanner.style.display = "block";

  setTimeout(() => {
    successBanner.style.display = "none";
    document.getElementById("contactForm").reset();
  }, 3000);
};

document
  .getElementById("contactForm")
  .addEventListener("submit", handleFormSubmission);
