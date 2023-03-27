$(function(){

  // 수정
  $(window).load(function() {
    $("body").removeClass("preload");
  });

  // Sticky JS
  // 상단 네베게이션 고정 설정하기
  // $(window).scroll(function(){

  //   var scrollPos = $(window).scrollTop();
    
  //   if(scrollPos > 70){
  //     $('#header').addClass('fixed');
  //   }else{
  //     $('#header').removeClass('fixed');      
  //   }

  // });

  // 상단 메뉴 클릭시 부드러운 이동 설정
  var menuItem =  $('#header h1 a, #gnb a');

  menuItem.click(function(e){

    var el = $(this).attr('href');
    console.log(el);
    var elWrap = $(el);    
    scrollMove(elWrap, 70);

    e.preventDefault();

  });

  // 부드러운 움직임 함수만들기
  function scrollMove(el, navHeight){

    var offset = el.offset().top;  
    var totalPos = offset - navHeight;

    $('html, body').animate({scrollTop: totalPos}, 300);

  }



  // 이미지 체인징
  $(window).resize(function(){
    if( window.matchMedia( "screen and (min-width: 1320px)" ).matches){
      // 처리내용
      $('#about .right-box img').attr('src', '../images/xl/about.png')
    } 
    if( window.matchMedia( "screen and (max-width: 1199px)" ).matches){
      // 처리내용
      $('#about .right-box img').attr('src', '../images/lg/about.png')
    }  
    if( window.matchMedia( "screen and (max-width: 991px)" ).matches){
      // 처리내용
      $('#about .right-box img').attr('src', '../images/md/about.png')
    }  
    if( window.matchMedia( "screen and (max-width: 767px)" ).matches){
      // 처리내용
      $('#about .right-box img').attr('src', '../images/sm/about.png')
    }  
  })


  // Mobile Navigation Toggle
  var targetGnb = $('#gnb');

  targetGnb.mouseleave(function(){ 
    $(this).animate({'height': 80}, 400, function(){
      $(this).removeClass('show').css('height', 'auto');
      $('#mobile_btn').attr('aria-expanded', 'false');
    });
  });

});