// -- HAMBURGER MENU -- //

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

/////////////////////////////

// -- STICKY NAV -- //

// the navbar class

const navbar = document.getElementsByClassName("navbar")[0];

// navbar scrolled y-axis

let scrolled = navbar.offsetTop;

let scrollPos = window.scrollY;

console.log("offset:", scrolled);

// implement sticky class/un-do sticky class

window.addEventListener("scroll", function () {
  navbar.classList.toggle("sticky", window.scrollY > 10);
});

///////////////////////////

// -- OWL CAROUSEL -- //

// Owlcarousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
