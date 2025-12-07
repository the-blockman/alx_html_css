const hamburger = document.getElementById("hamburger");

const navlinks = document.getElementById("nav-links");

const hamburgerBars = document.querySelectorAll(".hamburger span");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("active");

  hamburgerBars.forEach((bar) => {
    bar.classList.toggle("active");
  });
});
