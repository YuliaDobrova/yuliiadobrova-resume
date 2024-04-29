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
  const images = document.querySelectorAll(".certificates-content img");
  let imgSrc;
  images.forEach((img) => {
    img.addEventListener("click", (e) => {
      imgSrc = e.target.src;
      console.log(imgSrc);
      imgModal(imgSrc);
    });
  });

  function imgModal(imgSrc) {
    const main = document.querySelector(".main");
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    main.append(modal);

    const newImage = document.createElement("img");
    newImage.setAttribute("src", imgSrc);
    newImage.setAttribute("id", "imgId");
    modal.append(newImage);

    const closeBtn = document.createElement("span");
    closeBtn.setAttribute("class", "close-btn");
    modal.append(newImage, closeBtn);

    function onModalClose() {
      newImage.removeAttribute("src", imgSrc);
      modal.removeChild(newImage);
      modal.removeChild(closeBtn);
      modal.remove();
    }

    closeBtn.addEventListener("click", function () {
      onModalClose();
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        onModalClose();
      }
    });

    window.addEventListener("keydown", function (event) {
      if (event.code === "Escape") {
        onModalClose();
      }
    });
  }

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
    const response = await fetch("https://fabform.io/f/A9mhFz7", {
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
