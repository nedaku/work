$(function(){


  // 상단 네베게이션 고정 설정하기
  $(window).scroll(function(){

    var scrollPos = $(window).scrollTop();

    if(scrollPos > 85){
      $('#header').addClass('fixed');
    }else{
      $('#header').removeClass('fixed');      
    }

  });



  // 상단 메뉴 클릭시 부드러운 이동 설정
  var menuItem =  $('#header h1 a, #gnb a');

  menuItem.click(function(e){

    var el = $(this).attr('href');
    console.log(el);
    var elWrap = $(el);    
    scrollMove(elWrap, 82);

    e.preventDefault();

  });

  // 부드러운 움직임 함수만들기
  function scrollMove(el, navHeight){

    var offset = el.offset().top;  
    var totalPos = offset - navHeight;

    $('html, body').animate({scrollTop: totalPos}, 300);

  }

});