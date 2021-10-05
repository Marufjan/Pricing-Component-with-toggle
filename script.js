"use strict";

const toggle = document.querySelector("input");

toggle.addEventListener("click", function () {
  const numbers = document.querySelectorAll(".number-text");
  const prices = document.querySelectorAll(".number");

  numbers.forEach((number) => {
    const arr = Array.from(numbers);
    if (toggle.checked) {
      arr[0].textContent = "19.99";
      arr[1].textContent = "24.99";
      arr[2].textContent = "39.99";

      prices.forEach((price) => {
        price.style.transform = "rotateX(0deg)";
      });
    } else {
      arr[0].textContent = "199.99";
      arr[1].textContent = "249.99";
      arr[2].textContent = "399.99";
      prices.forEach((price) => {
        price.style.transform = "rotateX(360deg)";
      });
    }
  });
});
