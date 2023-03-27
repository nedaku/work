$(function(){

  var openBtn = $("#open-btn");
  var closeBtn = $("#close-btn");
  var popupContent = $("#popup");

  openBtn.click(function(){
    popupContent.fadeIn(800);
  });

  closeBtn.click(function(){
    popupContent.fadeOut(800);
  });

});