// Scrolling Top
let btn = document.querySelector(".scrolling-button");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
btn.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

// Animation Skills
let skkilsSection = document.querySelector(".skills");
let spansProgress = document.querySelectorAll(".skills .prog span");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skkilsSection.offsetTop - 300) {
    spansProgress.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});

// Animation Pricing
let pricingSection = document.querySelector(".pricing");
let nums = document.querySelectorAll(".pricing .box .num");
let started = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= pricingSection.offsetTop) {
    if (!started) {
      nums.forEach((tt) => {
        countUp(tt);
      });
    }
    started = true;
  }
});

function countUp(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}
