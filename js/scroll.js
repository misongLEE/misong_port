$(function(){

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

    // 하단 푸터 메뉴 클릭시 해당 영역으로 이동
    var $menu_txt = $('#footer ul li'),
        $item = $('.swiper-slide > div');

    $menu_txt.click(function(){
        var idx = $(this).index();
        var section = $item.eq(idx)
        var sectionDistance = section.offset().top;
        console.log(sectionDistance);
        
        $('html,body').stop().animate({scrollTop:sectionDistance});
    });
});


/* 스크롤시 스크롤 페이드인 */
$(document).ready(function() {
    /* 1 */
    $(window).scroll( function(){
        /* 2 */
        console.log(idx);
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > bottom_of_object/2 ){
                $(this).animate({'opacity':'1'},500);
            }
        }); 
    });
});
