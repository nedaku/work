$(function(){ 


  // 상단 네비게이션 스크롤이동 설정
  var menuItem = $('#top');

  menuItem.click(function(){

    var el = $(this).attr('href');
    var elWrap = $(el);
    var navHeight = 0;

    scrollMove(elWrap, navHeight);
  });

  // 스크롤 이동 함수
  function scrollMove(element, navHeight){

    var offset = element.offset().top;
    var totalScroll = offset - navHeight;

    $('html, body').animate({scrollTop: totalScroll}, 800);

  }

});