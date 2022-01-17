// Start Scrolling Top
let btn = document.querySelector(".scrolling-button");

window.onscroll = () => {
  if (window.scrollY >= 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
// End Scrolling Top
