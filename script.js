document.addEventListener("DOMContentLoaded", function () {
    const quoteButton = document.querySelector(".qoute button");
    const form = document.querySelector(".form");

    form.style.display = "none";

    quoteButton.addEventListener("click", function () {
      if (form.style.display === "none") {
        form.style.display = "block";
      } else {
        form.style.display = "none";
      }
    });
  });
 
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true
  });

