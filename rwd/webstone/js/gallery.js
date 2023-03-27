$(function(){

  $(window).load(function(){
    $('.grid').isotope({
      // options
      itemSelector: '.grid-item',
      layoutMode: 'masonry'
    });
  });


  // Isotope Filter Setting
  var grid = $('.grid');
  var gmenuItem = $('.gnb li a');
  var m1 = $('#m1'); // All
  var m2 = $('#m2'); // graphic
  var m3 = $('#m3'); // web 
  var m4 = $('#m4'); // rwd
  var m5 = $('#m5'); // app

  // 라이트박스 초기 설정
  $('.grid-item a').magnificPopup({
    type:'image',
    gallery: {
      enabled: true
    }  
  });


  // All 버튼 설정
  m1.click(function(e){
    gmenuItem.removeClass('g-act');
    $(this).addClass('g-act');

    grid.isotope({ 
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      filter : '.grid-item' 
    });

    $('.grid-item a').magnificPopup({
      type:'image',
      gallery: {
        enabled: true
      }  
    });

    e.preventDefault();
  });

  // .graphic 버튼 설정
  m2.click(function(e){
    gmenuItem.removeClass('g-act');
    $(this).addClass('g-act');

    grid.isotope({       
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      filter : '.graphic' 
    });

    $('.graphic a').magnificPopup({
      type:'image',
      gallery: {
        enabled: true
      }  
    });

    e.preventDefault();
  }); 

  // .web 버튼 설정
  m3.click(function(e){
    gmenuItem.removeClass('g-act');
    $(this).addClass('g-act');

    grid.isotope({ 
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      filter : '.web' 
    });

    $('.web a').magnificPopup({
      type:'image',
      gallery: {
        enabled: true
      }  
    });

    e.preventDefault();
  });

  // .web 버튼 설정
  m4.click(function(e){
    gmenuItem.removeClass('g-act');
    $(this).addClass('g-act');

    grid.isotope({ 
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      filter : '.rwd' 
    });

    $('.rwd a').magnificPopup({
      type:'image',
      gallery: {
        enabled: true
      }  
    });

    e.preventDefault();
  });

  // .web 버튼 설정
  m5.click(function(e){
    gmenuItem.removeClass('g-act');
    $(this).addClass('g-act');

    grid.isotope({ 
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      filter : '.app' 
    });

    $('.app a').magnificPopup({
      type:'image',
      gallery: {
        enabled: true
      }  
    });

    e.preventDefault();
  });

});