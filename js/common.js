$(function(){

     //  menu_on버튼을 클릭하면 메뉴가 나타난다.
    $(".menu").click(function(){
      $(".menu_on").fadeIn();
    });

    // close_bt버튼을 클릭하면 메뉴가 사라진다.
    $(".close_bt").click(function(){
      $(".menu_on").fadeOut();
    });
      
     
    // 두번째페이지 ABOUT
    // about페이지 프로필사진 가로 슬라이드
    $('.bxslider_img').bxSlider({
      auto: true,
      mode: 'horizontal',
      captions: false,
      controls: false,
      pager: false,
      speed: 200,
      slideWidth: 280,
      autoControls: true,
      hideControlOnEnd: true,
    });


    // 자기소개영역 카테고리 클릭시 내용변경 
    $(".prof").click(function(){
      $(".info_2").fadeOut(100);
      $(".info_3").fadeOut(100);
      $(".info_wrap").fadeIn(700);
    });
  
    $(".intro").click(function(){
      $(".info_3").fadeOut(100);
      $(".info_wrap").fadeOut(100);
      $(".info_2").fadeIn(700);
    });
    
    $(".exper").click(function(){
      $(".info_2").fadeOut(100);
      $(".info_wrap").fadeOut(100);
      $(".info_3").fadeIn(700);
    });  

    // 자기소개영역 experience 클릭시 내용변경
    $(".cat1").click(function(){
      $(".cat3 a").removeClass('color')
      $(".cat2 a").removeClass('color');
      $(".cat1 a").addClass('color').siblings().removeclass('color');
      $(".exp2").hide();
      $(".exp3").hide();
      $(".exp1").fadeIn(1000);
    });  

    $(".cat2").click(function(){
      $(".cat1 a").removeClass('color');
      $(".cat3 a").removeClass('color');
      $(".cat2 a").addClass('color');
      $(".exp1").hide();
      $(".exp3").hide();
      $(".exp2").fadeIn(1000);
    });  

    $(".cat3").click(function(){
      $(".cat1 a").removeClass('color');
      $(".cat2 a").removeClass('color');
      $(".cat3 a").addClass('color');
      $(".exp1").hide();
      $(".exp2").hide();
      $(".exp3").fadeIn(1000);
    });  

    // close_bt버튼을 클릭하면 메뉴가 사라진다.
    $(".close_bt").click(function(){
      $(".menu_on").fadeOut();
    });
    

    // 세번째페이지 PORTPOLIO
    // 포트폴리오 메뉴 클릭시 스타일변경 
    $(".cont3 a").click(function(){
      $(".cont3 a.on").addClass('on').siblings().removeClass('on');
    });

    
    // web클릭시 web 포트폴리오가 나타난다.
    $(".cont3 .web").click(function(){
      $(".cont4 .web_wrap").show().siblings().hide();
    });
    // mobile 클릭시 mobile 포트폴리오가 나타난다.
    $(".cont3 .mobile").click(function(){
      $(".cont4 .mobile_wrap").show().siblings().hide();
    });
    // edit 클릭시 edit 포트폴리오가 나타난다.
    $(".cont3 .edit").click(function(){
      $(".cont4 .edit_wrap").show().siblings().hide();
    });
    // web_d 클릭시 web_d 포트폴리오가 나타난다.
    $(".cont3 .webdesign").click(function(){
      $(".cont4 .webdesian_wrap").show().siblings().hide();
    });
    // leaflet 클릭시 leaflet 포트폴리오가 나타난다.
    $(".cont3 .leaf").click(function(){
      $(".cont4 .leaf_wrap").show().siblings().hide();
    });    
    // sns_card 클릭시 sns_card 포트폴리오가 나타난다.
    $(".cont3 .sns").click(function(){
      $(".cont4 .snscard_wrap").show().siblings().hide();
      
    });


    // 전체 원페이지 휠스크롤 swiper
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      speed : 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });

  var $menu_txt = $('#footer ul li'),
      $item = $('.swiper-slide > div');

      console.log($menu_txt);
      /*메뉴를 클릭하면*/
      $menu_txt.click




});

