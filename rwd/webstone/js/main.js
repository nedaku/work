$(function(){

  // Sticky JS
  // 상단 네비게이션 고정 설정하기
  $(window).scroll(function(){

    var scrollPos = $(window).scrollTop();

    if(scrollPos > 20){
      $('#header').addClass('fixed');
    }else{
      $('#header').removeClass('fixed');      
    }


    if(scrollPos < 20){
      $('#header #gnb li:first-child a').removeClass('active');
    }

  });

  // 상단 메뉴 클릭시 부드러운 이동 설정
  var menuItem =  $('#header h1 a, #gnb a');

  menuItem.click(function(e){

    var el = $(this).attr('href');
    console.log(el);
    var elWrap = $(el);    
    scrollMove(elWrap, 50);   /* offset 설정시 수정 */

    e.preventDefault();

  });

  // 부드러운 움직임 함수만들기
  function scrollMove(el, navHeight){

    var offset = el.offset().top;  
    var totalPos = offset - navHeight;

    $('html, body').animate({scrollTop: totalPos}, 300);

  }



  // Jarallax Call
  $('.jarallax').jarallax({
    speed: 0.2,
  });


  // WOW Call
  new WOW().init();


  // Mobile Navigation Toggle
  var targetGnb = $('#gnb');

  targetGnb.mouseleave(function(){
    $(this).animate({'height': 50}, 400, function(){
      $(this).removeClass('show');
      $('#mobile_btn').attr('aria-expanded', 'false');
    });
  });



});