$(document).ready(function(){

  //변수

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

  let pnum = 0; //페이지 번호
  let area_n = $page.length;
  let oldidx = 0 //기존이미지
  let idx = 0; //새이미지
  let ww = $(window).width();

  /* 현재위치 확인 */
  $(window).scroll(function(){
    let scrollpos = $(this).scrollLeft();
    $(".txt").text(scrollpos);
  })

  /* ////////////////// next, prev 버튼을 눌렀을 때 /////////////////////// */

  function slidePage(idx){
    $("html,body").animate({scrollLeft:ww*idx});

    if(oldidx != idx){
      $(document).scrollTop(0); /* overflow이기때문에 다를 수도 */
    };
    
    oldidx = idx;
  };


  $fixNext.click(function(){
    /* 현재페이지 번호를 idx에 적용해야함 */
  
    idx++;
    if(idx>area_n-1){
      idx = 0; //끝까지 가면 다시 처음으로
    }
    slidePage(idx);
  });

  $fixPrev.click(function(){
    idx--;
    if(idx<0){
      idx = area_n-1; //끝까지 가면 다시 처음으로
    }
    slidePage(idx);
  }); 


  /* ////////////////////////메인메뉴 책갈피 클릭했을 때 //////////////////////////*/
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

    if((sc <= 0) && (sc < ww)){pnum = 0;};
    if((sc >= ww) && (sc < ww*2)){pnum = 1;};
    if((sc >= ww*2) && (sc < ww*3)){pnum = 2;};
    if((sc >= ww*3) && (sc < ww*4)){pnum = 3;};
    if((sc >= ww*4) && (sc < ww*5)){pnum = 4;};
    if((sc >= ww*5) && (sc < ww*6)){pnum = 5;};

  });

  /* 퀵메뉴 책갈피를 눌렀을 때 */

});