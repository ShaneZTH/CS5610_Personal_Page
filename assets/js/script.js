$(document).ready(function () {
    $(window).on("load",function(){
      $("#loader-wrapper").fadeOut("slow");
    });


    $(".bi-arrow-up-short").click(function(){
       $("html, body").animate({ scrollTop: 0 }, 600);
    });

});


