(() => {
  "use strict";
  $(function () {
    if (null !== document.querySelector(".slider")) {
      const e = document.querySelectorAll(".background-trigger");
      window.addEventListener("scroll", () => {
        e.forEach((e) => {
          var t = e.getBoundingClientRect();
          t.top + t.height / 2.5 <=
            document.body.scrollTop + window.innerHeight / 2 &&
            (document.body.style.backgroundColor = e.dataset.color);
        });
      });
    }
    if (null !== document.querySelector(".slider")) {
      new Swiper(".slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        effect: "slide",
        observer: !0,
        observeParents: !0,
        autoHeight: !0,
        speed: 800,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: { simulateTouch: !0, slidesPerView: 1.2 },
          480: { simulateTouch: !0, slidesPerView: 1.6 },
          768: { simulateTouch: !0, slidesPerView: 2 },
          992: { simulateTouch: !0, slidesPerView: 3 },
          1268: { simulateTouch: !1, slidesPerView: 4 },
        },
      });
    }
    if (null !== document.querySelector(".openPopup")) {
      document.querySelectorAll(".openPopup").forEach((e) => {
        e.addEventListener("click", () => {
          const t = e.getAttribute("data-popup"),
            o = document.getElementById(t);
          (o.style.opacity = "1"),
            (o.style.visibility = "visible"),
            document.body.classList.add("popup-open");
        });
      });
      document.querySelectorAll(".close1").forEach((e) => {
        e.addEventListener("click", () => {
          const t = e.getAttribute("data-close"),
            o = document.getElementById(t);
          (o.style.opacity = "0"),
            (o.style.visibility = "hidden"),
            document.body.classList.remove("popup-open");
        });
      }),
        window.addEventListener("click", (e) => {
          e.target.classList.contains("popup") &&
            ((e.target.style.opacity = "0"),
            (e.target.style.visibility = "hidden"),
            document.body.classList.remove("popup-open"));
        });
    }
    if (
      (null !== document.querySelector(".spoiler-trigger") &&
        $(document).on("click", ".spoiler-trigger", function (e) {
          e.preventDefault(),
            $(".spoiler-trigger").not(this).removeClass("active"),
            $(".spoiler-block")
              .not($(this).parent().find(".spoiler-block").first())
              .slideUp(300),
            $(this).toggleClass("active"),
            $(this).parent().find(".spoiler-block").first().slideToggle(300);
        }),
      null !== document.querySelector(".faq-imgs"))
    ) {
      const e = document.querySelectorAll(".faq-btn"),
        t = document.querySelectorAll(".faq-imgs img");
      e.forEach((e, o) => {
        e.addEventListener("click", () => {
          return (
            (e = o),
            void t.forEach((t, o) => {
              t.classList.toggle("active", o === e);
            })
          );
          var e;
        });
      });
    }
    null !== document.querySelector(".count") &&
      setTimeout(() => {
        $(".count").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              { Counter: $(this).text() },
              {
                duration: 2e3,
                easing: "swing",
                step: function (e) {
                  $(this).text(Math.ceil(e));
                },
              },
            );
        });
      }, 1e3),
      setTimeout(() => {
        let e = new IntersectionObserver(
            function (e) {
              e.forEach((e) => {
                e.isIntersecting && e.target.classList.add("active");
              });
            },
            { threshold: [0.5] },
          ),
          t = document.querySelectorAll(".element-animation");
        for (let o of t) e.observe(o);
      }, 2e3);
  });
})();
