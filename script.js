const iconToggle = document.querySelector(".menu-outline");
const navbarMenu = document.querySelector(".menu");
const menuLinks = document.querySelector(".menu_link");
const iconClose = document.querySelector(".close_icon");

// toggle menu
iconToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});
iconClose.addEventListener("click", () => {
  navbarMenu.classList.remove("active");
});

Array.from(menuLinks).forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
  });
});

//NAVBAR ACTIVE CLASS
document.querySelectorAll(".menu_link").forEach((ele) =>
  ele.addEventListener("click", function (event) {
    event.preventDefault();
    document
      .querySelectorAll(".nav-item")
      .forEach((ele) => ele.classList.remove("active"));
    this.classList.add("active")
  })
);

// landing page type effect .

const typed = document.querySelector(".typed");

if (typed) {
  let typed_strings = typed.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed(".typed", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}

// About me filter section


// TESTIMONIAL SWIPER 

 