(function ($) {
  "use strict";

  var banu = {
    m: function (e) {
      banu.d();
      banu.methods();
    },

    d: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      banu.stickyHeader();
      banu.stickyAdjust();
      banu.slickActivation();
      banu.selectJs();
      banu.popupMobileMenu();
      banu.masonryActivation();
      banu.ibcounterUp();
      banu.searchClick();
      banu.tooltip();
      banu.sidebarFilter();
      banu.fancyBox();
      banu.preloaderActivation();
      // banu.preventContentEdit();
      banu.aosAnimationActivation();
      banu.darkToLight();
    },

    preventContentEdit: function () {
      window.addEventListener("contextmenu", (e) => e.preventDefault());
    },

    darkToLight: function () {
      $(window).on("load", function () {
        // localStorage.setItem("theme-color", "theme-light");
        // local storage theme variable presence check
        const currentThemeColor = localStorage.getItem("theme-color");
        //
        if (currentThemeColor) {
          // add class to body
          $("body").addClass(currentThemeColor);
          if (currentThemeColor === "theme-light") {
            $(".theme-switcher").prop("checked", true);
            $(".theme-switcher-label").addClass("active");
          } else {
            // continue with default theme
          }
        }
        // switch theme
        $(".theme-switcher-label").on("change", switchColorTheme);
      });

      function switchColorTheme(e) {
        $(this).toggleClass("active");
        //  remove previous classes
        removeThemeClass();
        if (e.target.checked) {
          // it's a dark theme
          $("body").addClass("theme-light");
          localStorage.setItem("theme-color", "theme-light");
          $(".theme-switcher").prop("checked", true);
        } else {
          $("body").addClass("theme-dark");
          localStorage.setItem("theme-color", "theme-dark");
          $(".theme-switcher").prop("checked", false);
        }
      }

      function removeThemeClass() {
        $("body").removeClass(function (index, cssName) {
          return (cssName.match(/\btheme-\S+/g) || []).join(" ");
        });
      }
    },

    preloaderActivation: function () {
      $(window).on("load", function () {
        $("#ctn-preloader").fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
        $("body").delay(350).css({ overflow: "visible" });
      });
    },

    aosAnimationActivation: function () {
      $(window).on("load", function () {
        if ($("[data-aos]").length) {
          AOS.init({
            duration: 1200,
            mirror: true,
          });
        }
      });
    },
    tooltip: function () {
      var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    },

    fancyBox: function () {
      var fancy = $(".fancybox");
      if (fancy.length) {
        fancy.fancybox({
          arrows: true,
          buttons: [
            "zoom",
            //"share",
            "slideShow",
            //"fullScreen",
            //"download",
            "thumbs",
            "close",
          ],
          animationEffect: "zoom-in-out",
          transitionEffect: "zoom-in-out",
        });
      }
    },

    sidebarFilter: function () {
      $(".single-filter > .title").on("click", function (e) {
        e.preventDefault();
        $(".sidebar-submenu").slideUp(200);

        if ($(this).parent().hasClass("active")) {
          $(".sidebar-dropdown").removeClass("active");
          $(this).parent().removeClass("active");
        } else {
          $(".sidebar-dropdown").removeClass("active");
          $(this).next(".sidebar-submenu").slideDown(200);
          $(this).parent().addClass("active");
        }
      });
    },

    stickyHeader: function (e) {
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 10) {
          $(".header--sticky").addClass("sticky");
        } else {
          $(".header--sticky").removeClass("sticky");
        }
      });
    },

    stickyAdjust: function (e) {
      // Sticky Top Adjust..,
      $(".rbt-sticky-top-adjust").css({
        top: 100,
      });

      $(".rbt-sticky-top-adjust-two").css({
        top: 200,
      });
      $(".rbt-sticky-top-adjust-three").css({
        top: 25,
      });
    },

    slickActivation: function () {
      $(".slick-activation-01").slick({
        // infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "150px",
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        cssEase: "linear",
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="ri-arrow-left-line"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="ri-arrow-right-line"></i></button>',
        responsive: [
          {
            breakpoint: 1919,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              centerPadding: "120px",
            },
          },
          {
            breakpoint: 1499,
            settings: {
              slidesToShow: 3,
              centerPadding: "60px",
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              centerPadding: "1px",
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "1px",
              dots: true,
              arrows: false,
            },
          },
        ],
      });

      $(".slick-activation-001").slick({
        // infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        cssEase: "linear",
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="ri-arrow-left-line"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="ri-arrow-right-line"></i></button>',
        responsive: [
          {
            breakpoint: 1919,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              centerPadding: "120px",
            },
          },
          {
            breakpoint: 1499,
            settings: {
              slidesToShow: 3,
              centerPadding: "60px",
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              centerPadding: "1px",
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "1px",
              dots: true,
              arrows: false,
            },
          },
        ],
      });

      $(".top-seller-activation-1").slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        cssEase: "linear",
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="ri-arrow-left-line"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="ri-arrow-right-line"></i></button>',
        responsive: [
          {
            breakpoint: 1499,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
              centerMode: true,
              centerPadding: "20px",
            },
          },
        ],
      });

      $(".popular-collection-active").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        cssEase: "linear",
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="ri-arrow-left-line"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="ri-arrow-right-line"></i></button>',
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
      });

      $(".wallet-activation, .related-blog-activation").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        cssEase: "linear",
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="ri-arrow-left-line"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="ri-arrow-right-line"></i></button>',
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
      });

      $(".slider-activation-banner-3").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: false,
        autoplay: true,
        fade: true,
        cssEase: "linear",
      });

      $(".slider-activation-banner-4").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: false,
        cssEase: "linear",
        adaptiveHeight: true,
        speed: 1000,
        // vertical: true,
        // autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1919,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1499,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

      $(".slider-hero-trend").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        cssEase: "linear",
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="ri-arrow-left-line"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="ri-arrow-right-line"></i></button>',
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ],
      });
      $(".nft-gallery-activation").slick({
        // infinite: true,
        slidesToShow: 7,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: "100px",
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        cssEase: "linear",
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1919,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 2,
              centerPadding: "120px",
            },
          },
          {
            breakpoint: 1499,
            settings: {
              slidesToShow: 3,
              centerPadding: "60px",
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
              centerPadding: "1px",
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              centerMode: false,
            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: false,
            },
          },
        ],
      });
    },

    selectJs: function (e) {
      $("select").niceSelect();
    },

    popupMobileMenu: function (e) {
      $(".hamberger-button").on("click", function (e) {
        $(".popup-mobile-menu").addClass("active");
      });

      $(".close-menu").on("click", function (e) {
        $(".popup-mobile-menu").removeClass("active");
        $(".popup-mobile-menu .mainmenu .has-dropdown > a")
          .siblings(".submenu")
          .removeClass("active")
          .slideUp("400");
        $(".popup-mobile-menu .mainmenu .has-dropdown > a").removeClass("open");
      });

      $(".popup-mobile-menu .mainmenu .has-dropdown > a").on(
        "click",
        function (e) {
          e.preventDefault();
          $(this).siblings(".submenu").toggleClass("active").slideToggle("400");
          $(this).toggleClass("open");
        }
      );

      $(".popup-mobile-menu").on("click", function (e) {
        e.target === this &&
          $(".popup-mobile-menu").removeClass("active") &&
          $(".popup-mobile-menu .mainmenu .has-droupdown > a")
            .siblings(".submenu")
            .removeClass("active")
            .slideUp("400") &&
          $(".popup-mobile-menu .mainmenu .has-droupdown > a").removeClass(
            "open"
          );
      });

      $(".one-page-vavigation-popup .mainmenu li > a").on(
        "click",
        function (e) {
          e.preventDefault();
          $(".popup-mobile-menu").removeClass("active");
          $(".popup-mobile-menu .mainmenu li > a")
            .siblings(".submenu")
            .removeClass("active");
        }
      );
    },

    masonryActivation: function name(params) {
      $(window).on("load", function () {
        $(".masonary-wrapper-activation").imagesLoaded(function () {
          // filter items on button click
          $(".isotop-filter").on("click", "button", function () {
            var filterValue = $(this).attr("data-filter");
            $(this).siblings(".is-checked").removeClass("is-checked");
            $(this).addClass("is-checked");
            $grid.isotope({
              filter: filterValue,
            });
          });

          // init Isotope
          var $grid = $(".mesonry-list").isotope({
            percentPosition: true,
            transitionDuration: "0.7s",
            layoutMode: "masonry",
            masonry: {
              columnWidth: ".resizer",
            },
          });
        });
      });
    },

    ibcounterUp: function () {
      $(".counter-item-active").counterUp({
        delay: 10,
        time: 2000,
      });
    },

    searchClick: function (e) {
      var screenWidth = banu._window.width();
      if (screenWidth < 992) {
        $(".search-mobile-icon").on("click", function (e) {
          e.preventDefault();
          $(this)
            .toggleClass("open")
            .siblings(".large-mobile-blog-search")
            .toggleClass("active");
        });
      }
    },
  };
  banu.m();
})(jQuery, window);
