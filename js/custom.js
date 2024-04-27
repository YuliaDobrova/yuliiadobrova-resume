$(document).ready(function () {
  "use strict";
  /*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. Progress-bar
4. Slick carousel
5. Welcome animation support
6. Modal
7. Counter
8. Form submition
======================================*/

  // 1. Scroll To Top
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 600) {
      $(".return-to-top").fadeIn();
    } else {
      $(".return-to-top").fadeOut();
    }
  });
  $(".return-to-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
    return false;
  });

  // 2. Smooth Scroll spy

  $(".header-area").sticky({
    topSpacing: 0,
  });

  //=============

  $("li.smooth-menu a").bind("click", function (event) {
    event.preventDefault();
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 0,
        },
        1200,
        "easeInOutExpo"
      );
  });

  $("body").scrollspy({
    target: ".navbar-collapse",
    offset: 0,
  });

  // 3. Progress-bar

  var dataToggleTooTip = $('[data-toggle="tooltip"]');
  var progressBar = $(".progress-bar");
  if (progressBar.length) {
    progressBar.appear(function () {
      dataToggleTooTip
        .tooltip({
          trigger: "manual",
        })
        .tooltip("show");
      progressBar.each(function () {
        var each_bar_width = $(this).attr("aria-valuenow");
        $(this).width(each_bar_width + "%");
      });
    });
  }

  // 4. slick carousel

  $(".testimonial-carousel").slick({
    infinite: true,
    centerMode: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplaySpeed: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // 5. welcome animation support

  $(window).load(function () {
    $(".header-text h2,.header-text p")
      .removeClass("animated fadeInUp")
      .css({ opacity: "0" });
    $(".header-text a")
      .removeClass("animated fadeInDown")
      .css({ opacity: "0" });
  });

  $(window).load(function () {
    $(".header-text h2,.header-text p")
      .addClass("animated fadeInUp")
      .css({ opacity: "0" });
    $(".header-text a").addClass("animated fadeInDown").css({ opacity: "0" });
  });

  // 6. Modal
  let openBtn = document.getElementById("open-btn");
  let modalBackground = document.getElementById("modal-background");
  let closeBtn = document.getElementById("close-btn");

  openBtn.addEventListener("click", function () {
    modalBackground.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modalBackground.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modalBackground) {
      modalBackground.style.display = "none";
    }
  });

  // 7. Counter
  $(window).on("load", function () {
    $(".counter").counterUp({
      delay: 10,
      time: 3000,
    });
  });

  // 8. Form submition

  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const response = await fetch(process.env.FABFORM_ENDPOINT, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      contactForm.reset();
    } else {
      alert("Error submitting the form. Please try again later.");
    }
  });
});
