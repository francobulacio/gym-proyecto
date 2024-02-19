const navBar = document.querySelector(".nav-bar");
const menuBtn = document.querySelectorAll(".toggle");

let lastScroll = 0;
function handleScroll() {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    navBar.classList.remove("scroll-up");
  }

  if (currentScroll > lastScroll && !navBar.classList.contains("scroll-down")) {
    navBar.classList.remove("scroll-up");
    navBar.classList.add("scroll-down");
  }

  if (currentScroll < lastScroll && navBar.classList.contains("scroll-down")) {
    navBar.classList.remove("scroll-down");
    navBar.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
}

const handleMenu = () => {
  if (navBar.style.display === "flex") {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "flex";
  }
};

const checkSize = () => {
  var w =
    document.documentElement.clientWidth ||
    document.body.clientWidth ||
    window.innerWidth;
  /* var h = window.innerHeight; */
  var targetWidth = 740;
  /* var targetHeight = 600; */

  if (/* (h > targetHeight) && */ w > targetWidth) {
    navBar.style.display = "flex";
    for (element of menuBtn) {
      element.removeEventListener("click", handleMenu);
    }
    window.addEventListener("scroll", handleScroll);
  } else {
    for (element of menuBtn) {
      navBar.style.display = "none";
      element.addEventListener("click", handleMenu);
    }
    window.removeEventListener("scroll", handleScroll);
  }
};

/* window.addEventListener('load', checkSize) */
window.addEventListener("resize", checkSize);
