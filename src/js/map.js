$("#js-map-history").click(function() {
  $(".actu-img").removeClass("map-active");
  $(".history-img").addClass("map-active");
});

$("#js-map-actu").click(function() {
  $('.history-img').removeClass("map-active");
  $('.actu-img').addClass("map-active");
});
