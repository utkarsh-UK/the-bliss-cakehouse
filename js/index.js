const navbar = document.querySelector(".navbar");

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      navbar.classList.add("custom-navbar-scrolled");
    } else {
      navbar.classList.remove("custom-navbar-scrolled");
    }
  });
});
