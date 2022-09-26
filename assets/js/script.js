/*--------------------------------------------------------------
// JQuery Version
--------------------------------------------------------------*/
// $(document).ready(function () {
//     $(window).on("load",function(){
//       $("#loader-wrapper").fadeOut("slow");
//     });

//     $(".bi-arrow-up-short").click(function(){
//        $("html, body").animate({ scrollTop: 0 }, 600);
//     });
// });

/*--------------------------------------------------------------
// Vanilla JS Version
--------------------------------------------------------------*/

// Loader fadeOut
window.addEventListener(
  "load",
  function () {
    let loader = document.getElementById("loader-wrapper");
    loader.classList.add("fadeOut");
  },
  false
);

// Scroll Top
const scrollTopBtn = document.querySelector(".bi-arrow-up-short");
scrollTopBtn.addEventListener(
  "onclick",
  () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  false
);
