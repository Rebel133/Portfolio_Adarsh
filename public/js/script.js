var loader = document.querySelector(".loading");
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disapper");
}

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 0) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  // *******Slide Up Script******
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  // *******Slide Up Script Ends******

  // **********toogle menu/bar script************
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  // ***owl - carous script***
  $(".carousel").owlCarousel({
    margin: 40,
    loop: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// Typing Animation Script Starting
var typed = new Typed(".typing", {
  strings: [
    "Junior Web Developer",
    "Junior Blogger",
    "Junior Designer",
    "Junior Freelancer",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
var typed = new Typed(".typing-2", {
  strings: ["WebDeveloper", "Blogger", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
// Typing Animation Script Ending
