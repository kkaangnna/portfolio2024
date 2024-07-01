$(document).ready(function(){
  
  // $(window).scroll(function(){
  //   let scrollpos = $(this).scrollLeft();
  //   $(".txt").text(scrollpos);
  // })

  //변수
  let ww = $(window).width();
  let $container = $('#container');
  let $page = $('.area');
  let $fixNext = $('.fix-next-btn');
  let $fixPrev = $('.fix-prev-btn');

  let area_n = $page.length;
  let pnum = 0;
  let oldidx = 0 //기존이미지
  let idx = 0; //새이미지

  let $strong = $('.back>a');
  let $back = $('.back');
  let $mainNext = $('.next-btn');
  let $main = $('main');
  let $quickMenu = $('.quick-menu');
  let $quickMenuLi = $('.quick-menu ul li');
  let $quickMenuA = $('.quick-menu ul li>a');
  let $backli = $('.back>a');

  let qnum = 0;
  // let qnum = $quickMenuA.$(this).closest($quickMenuLi).index();

  function slidePage(qnum){
    targetX = -(qnum*ww); //움직이는 거리(너비)
    $container.animate({left:targetX},600); 

    if(oldidx != qnum){
      $('html,body').scrollTop(0);
    };

    oldidx = qnum;
  };

  /* 오른쪽 책갈피 클릭할 떄 */
  $quickMenuA.click(function(){
    $("html,body").stop().animate({scrollLeft:ww*qnum});

    $quickMenuLi.eq(qnum).siblings().removeClass('active');
    $quickMenuLi.eq(qnum).siblings().find('i').removeClass('active');
    $quickMenuLi.eq(qnum).siblings().siblings().find('span').removeClass('active');

    $quickMenuLi.eq(qnum).addClass('active');
    $quickMenuLi.eq(qnum).find('i').addClass('active');
    $quickMenuLi.eq(qnum).find('span').addClass('active');

    return false;
  })

  /* Next 누를 때 */
  $fixNext.click(function(){
    qnum++;
    if(qnum>area_n-1){
      qnum = 0; //끝까지 가면 다시 처음으로
    }
    slidePage(qnum);

    $quickMenuLi.eq(qnum).siblings().removeClass('active');
    $quickMenuLi.eq(qnum).siblings().find('i').removeClass('active');
    $quickMenuLi.eq(qnum).siblings().siblings().find('span').removeClass('active');

    $quickMenuLi.eq(qnum).addClass('active');
    $quickMenuLi.eq(qnum).find('i').addClass('active');
    $quickMenuLi.eq(qnum).find('span').addClass('active');

  });

  $fixPrev.click(function(){
    idx--;
    if(idx<0){
      idx = area_n-1; //끝까지 가면 다시 처음으로
    }
    slidePage(idx);
  }); 

  

  /* $fixNext.stop().click(function(){
    pnum++;

    let sc = $('html,body').scrollLeft();
    $("html,body").stop().animate({scrollLeft:ww*pnum});

    $quickMenuLi.eq(pnum).siblings().removeClass('active');
    $quickMenuLi.eq(pnum).siblings().find('i').removeClass('active');
    $quickMenuLi.eq(pnum).siblings().siblings().find('span').removeClass('active');

    $quickMenuLi.eq(pnum).addClass('active');
    $quickMenuLi.eq(pnum).find('i').addClass('active');
    $quickMenuLi.eq(pnum).find('span').addClass('active');


    if((sc <= 0) && (sc < ww)){ //section(1)_profile
      pnum = 0;
    };

    if((sc >= ww) && (sc < ww*2)){ //section(2)_design
      pnum = 1;
    };

    if((sc >= ww*2) && (sc < ww*3)){ //section(3)_publishing
      pnum = 2;
    };

    if((sc >= ww*3) && (sc < ww*4)){ //section(4)_responsive
      pnum = 3;
    };

    if((sc >= ww*4) && (sc < ww*5)){ //section(5)_mobile
      pnum = 4;
    };

    if((sc >= ww*5) && (sc < ww*6)){ //section(6)_planning
      pnum = -1;
    };
    
  }) */



  /* $fixNext.stop().click(function(){
    pnum++;

    let sc = $('html,body').scrollLeft();
    $("html,body").stop().animate({scrollLeft:ww*pnum});

    if((sc <= 0) && (sc < 1903)){ //section(1)_profile
      pnum = 0;
    };

    if((sc >= 1903) && (sc < 3806)){ //section(2)_design
      pnum = 1;
    };

    if((sc >= 3806) && (sc < 5709)){ //section(3)_publishing
      pnum = 2;
    };

    if((sc >= 5709) && (sc < 7612)){ //section(4)_responsive
      pnum = 3;
    };

    if((sc >= 7612) && (sc < 9515)){ //section(5)_mobile
      pnum = 4;
    };

    if((sc >= 9515) && (sc < 7612)){ //section(6)_planning
      pnum = -1;
    };
    
  }) */
  
/*   $fixPrev.stop().click(function(){
    pnum--;

    if((pnum >= 1) && (pnum < 6)){
      $quickMenuLi.eq(pnum).siblings().removeClass('active');
      $quickMenuLi.eq(pnum).siblings().find('i').removeClass('active');
      $quickMenuLi.eq(pnum).siblings().siblings().find('span').removeClass('active');

      $quickMenuLi.eq(pnum).addClass('active');
      $quickMenuLi.eq(pnum).find('i').addClass('active');
      $quickMenuLi.eq(pnum).find('span').addClass('active');
    }

    let sc = $(document).scrollLeft();
    $("html,body").stop().animate({scrollLeft:ww*pnum});

    if((sc <= 0) && (sc < ww)){ //section(1)_profile
      pnum = 6;
      $quickMenuLi.eq(0).siblings().removeClass('active');
      $quickMenuLi.eq(0).siblings().find('i').removeClass('active');
      $quickMenuLi.eq(0).siblings().siblings().find('span').removeClass('active');

      $quickMenuLi.eq(0).addClass('active');
      $quickMenuLi.eq(0).find('i').addClass('active');
      $quickMenuLi.eq(0).find('span').addClass('active');
    };

    if((sc >= ww) && (sc < ww*2)){ //section(2)_design
      pnum = 1;
    };

    if((sc >= ww*2) && (sc < ww*3)){ //section(3)_publishing
      pnum = 2;
    };

    if((sc >= ww*3) && (sc < ww*4)){ //section(4)_responsive
      pnum = 3;
    };

    if((sc >= ww*4) && (sc < ww*5)){ //section(5)_mobile
      pnum = 4;
    };

    if((sc >= ww*5) && (sc < ww*6)){ //section(6)_planning
      pnum = 5;
    };
    
    
  }) */

}); /* ---------------END-------------------------------- */

/* 슬라이드버전

  function slidePage(idx){
    targetX = -(idx*ww); //움직이는 거리(너비)
    $container.animate({left:targetX},600); 

    if(oldidx != idx){
      $quickMenuLi.eq(oldidx).removeClass("active");  //기존버튼 비활성화
      $quickMenuLi.eq(index).addClass("active");  //선택버튼 활성화
      $('html').scrollTop(0);
    };

    oldidx = idx;
  };

  $fixNext.click(function(){
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
  

*/