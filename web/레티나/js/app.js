$(function () {
  const img = $(".gallery img");
  const menuItem = $(".qna li a, .faq li a");
  const firstItem = $(".qna li:first-child a, .faq li:first-child a");

  firstItem.addClass("act").next().css("display", "block");
  menuItem.on("click", function (e) {
    $(this).toggleClass("act").next().slideToggle(400);
    e.preventDefault();
  });
  img.on("mouseenter", function () {
    const oldtxt = $(this).attr("src");
    const newtxt = oldtxt.replace("-off", "-on");
    $(this).attr("src", newtxt);
  });
  img.on("mouseleave", function () {
    const oldtxt = $(this).attr("src");
    const newtxt = oldtxt.replace("-on", "-off");
    $(this).attr("src", newtxt);
  });
  //   *******************************************
  $(window).load(function () {
    grid.isotope({
      itemSelector: ".grid_item",
      layoutMode: "fitRows",
    });
  });
  $(".grid_item a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  const grid = $(".grid");
  const all = $("#all");
  const g1 = $("#g1");
  const g2 = $("#g2");
  const g3 = $("#g3");
  all.on("click", function (e) {
    grid.isotope({
      filter: "*",
    });
    $(".grid_item a").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
    e.preventDefault();
  });
  g1.on("click", function (e) {
    grid.isotope({
      filter: ".g1",
    });
    $(".g1 a").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
    e.preventDefault();
  });
  g2.on("click", function (e) {
    grid.isotope({
      filter: ".g2",
    });
    $(".g2 a").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
    e.preventDefault();
  });
  g3.on("click", function (e) {
    grid.isotope({
      filter: ".g3",
    });
    $(".g3 a").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
    e.preventDefault();
  });
});
