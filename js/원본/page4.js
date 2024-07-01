$(document).ready(function(){

  let $container = $('#container');
  let $page = $('.area');
  let $fixNext = $('.fix-next-btn');
  let $fixPrev = $('.fix-prev-btn');
  let $back = $('.back');
  let $mainNext = $('.next-btn');
  let $main = $('main');
  let $quickMenu = $('.quick-menu');
  let $quickMenuLi = $('.quick-menu ul li');
  let $backli = $('.back>strong');

  let pnum = 0; 
  let area_n = $page.length;
  let ww = $(window).width();

  function slidePage(idx){
    $("html,body").animate({scrollLeft: ww * idx});

    // 페이지 슬라이드 후 스크롤 위치 초기화
    $(document).scrollTop(0);
  }

  function bookmark(idx){

  }
  
  $fixNext.click(function(){
    // 페이지 번호 증가 및 범위 확인
    pnum = (pnum + 1) % area_n;
    slidePage(pnum);
  });

  $fixPrev.click(function(){
    // 페이지 번호 감소 및 범위 확인
    pnum = (pnum - 1 + area_n) % area_n;
    slidePage(pnum);
  }); 

  $backli.click(function(){
    let bnum = $(this).closest($back).index();

    //오른쪽 퀵메뉴 현재위치 활성화
    $quickMenuLi.eq(bnum).siblings().removeClass('active');
    $quickMenuLi.eq(bnum).siblings().find('i').removeClass('active');
    $quickMenuLi.eq(bnum).siblings().find('span').removeClass('active');

    $quickMenuLi.eq(bnum).addClass('active');
    $quickMenuLi.eq(bnum).find('i').addClass('active');
    $quickMenuLi.eq(bnum).find('span').addClass('active');

    //페이지 이동
    $("html,body").stop().animate({scrollLeft:ww*bnum}); /* 충돌? */

    //현재 페이지 번호 매기기 

    //페이지 접히는 모션
    $back.addClass('on');
    $main.delay(700).fadeOut();
    $quickMenu.css({ opacity: '1' });

  });

  /* 페이지에 번호 매기기 */

  $(window).scroll(function(){
    let sc = $(window).scrollLeft();

    if((sc >= 0) && (sc < ww)){
      pnum = 0;
    }else{

    };
    if((sc >= ww) && (sc < ww*2)){pnum = 1;};
    if((sc >= ww*2) && (sc < ww*3)){pnum = 2;};
    if((sc >= ww*3) && (sc < ww*4)){pnum = 3;};
    if((sc >= ww*4) && (sc < ww*5)){pnum = 4;};
    if((sc >= ww*5) && (sc < ww*6)){pnum = 5;};

  });

});