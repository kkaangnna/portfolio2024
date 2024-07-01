$(document).ready(function(){

  //변수
  let $page = $('.area');
  let $fixNext = $('.fix-next-btn');
  let $fixPrev = $('.fix-prev-btn');
  let $back = $('.back');
  let $mainNext = $('.next-btn');
  let $main = $('main');
  let $quickMenu = $('.quick-menu');
  let $quickMenuLi = $('.quick-menu ul li');
  let $backli = $('.back>strong');
  let $pubSlide = $('.pub-slide');
  let $pubCon = $('.pub');
  let $pubNext = $('.pub-next-btn');
  let $pubPrev = $('.pub-prev-btn');
  let $publishing = $('#publishing');
  let $detailView = $('.more-btn ul li:nth-child(2)');


  let pnum = 0; 
  let snum = 0; 
  let area_n = $page.length;
  let pub_n = $pubCon.length;
  let ww = $(window).width();
  let pw = $pubCon.width();

  /*////////////////////////// 페이지마다 번호 매기기 ///////////////////////////////////*/

  $(window).scroll(function(){
    let sc = $(window).scrollLeft();

    if((sc >= 0) && (sc < ww)){pnum = 0;};
    if((sc >= ww) && (sc < ww*2)){
      pnum = 1;
      snum = 0; 
    };
    if((sc >= ww*2) && (sc < ww*3)){
      pnum = 2;
      pubPosition(snum);
    }else{
      $fixNext.css({"visibility":"visible"});
      $pubNext.css({"visibility":"hidden"});
      $fixPrev.css({"visibility":"visible"});
      $pubPrev.css({"visibility":"hidden"});
    };
    if((sc >= ww*3) && (sc < ww*4)){
      pnum = 3;
      snum = 2; 
    };
    if((sc >= ww*4) && (sc < ww*5)){pnum = 4;};
    if((sc >= ww*5) && (sc < ww*6)){pnum = 5;};
  });  


  /*//////////////////////////////// 함수 생성 //////////////////////////////////////////*/
  
  function slidePage(idx){
    $("html,body").animate({scrollLeft: ww * idx});
    $(document).scrollTop(0); // 페이지 슬라이드 후 스크롤 위치 초기화
  }

  function bookmark(idx){
    $quickMenuLi.eq(idx).siblings().removeClass('active');
    $quickMenuLi.eq(idx).siblings().find('i').removeClass('active');
    $quickMenuLi.eq(idx).siblings().find('span').removeClass('active');

    $quickMenuLi.eq(idx).addClass('active');
    $quickMenuLi.eq(idx).find('i').addClass('active');
    $quickMenuLi.eq(idx).find('span').addClass('active');
  }

  function pubSlide(pslide){
    targetX = -(pslide*pw);
    $pubSlide.animate({left:targetX},600);
  }

  function pubPosition(snum){ /* 페이지 위치에 맞춰서 화살표  */
    if(snum < 1){
      $fixNext.css({"visibility":"hidden"});
      $pubNext.css({"visibility":"visible"});
      $fixPrev.css({"visibility":"visible"});
      $pubPrev.css({"visibility":"hidden"});
    }
    if(snum>0 && snum<2){ 
      $fixNext.css({"visibility":"hidden"});
      $pubNext.css({"visibility":"visible"});
      $fixPrev.css({"visibility":"hidden"});
      $pubPrev.css({"visibility":"visible"}); 
    }
    if(snum == 2){  
      $fixNext.css({"visibility":"visible"});
      $pubNext.css({"visibility":"hidden"});
      $fixPrev.css({"visibility":"hidden"});
      $pubPrev.css({"visibility":"visible"});
    }
  }

  /*////////////////////////// Next, Prev Button ///////////////////////////////////*/
  $fixNext.stop().click(function(){
    $(document).scrollTop(0);
    pnum = (pnum + 1) % area_n; // 페이지 번호 증가 및 범위 확인
    slidePage(pnum);
    bookmark(pnum);

    $publishing.animate({scrollTop:0});
    $(document).scrollTop(0);

    pubSlide(snum);
    pubPosition(snum);
  });

  $fixPrev.stop().click(function(){
    pnum = (pnum - 1 + area_n) % area_n; // 페이지 번호 감소 및 범위 확인
    slidePage(pnum);
    bookmark(pnum);

    $publishing.animate({scrollTop:0});
    $(document).scrollTop(0);

    pubSlide(snum);
    pubPosition(snum);
  }); 

  /*/////////////////////////////// 메인 책갈피 ///////////////////////////////////*/  
  $backli.click(function(){
    let bnum = $(this).closest($back).index();

    //오른쪽 퀵메뉴 현재위치 활성화
    bookmark(bnum);

    //페이지 이동
    $("html,body").stop().animate({scrollLeft:ww*bnum});

    //페이지 접히는 모션
    $back.addClass('on');
    $main.delay(700).fadeOut();
    $quickMenu.css({ opacity: '1' });

    //페이지 원상복귀
    $publishing.animate({scrollTop:0});
    $(document).scrollTop(0);
    
    snum = 0 
    pubSlide(snum);
  });

  /*/////////////////////////////// 퀵메뉴 책갈피 ///////////////////////////////////*/  

  $quickMenuLi.click(function(){
    let qnum = $(this).index();
    
    //페이지 이동
    $("html,body").stop().animate({scrollLeft:ww*qnum});

    //책갈피 활성화
    bookmark(qnum);
    
    //페이지 원상복귀
    $publishing.animate({scrollTop:0});
    $(document).scrollTop(0);

    //다시 퍼블리싱 첫 페이지
    snum = 0
    pubSlide(snum);
  });

  /*/////////////////////////////// 메인 Next Page ///////////////////////////////////*/  
  $mainNext.stop().click(function () {
    $back.addClass('on');
    $main.delay(700).fadeOut();
    $quickMenu.css({ opacity: '1' });
    $(document).scrollLeft(0);
    bookmark(0); /* 무조건 첫번째 책갈피 활성화 */

    $publishing.animate({scrollTop:0});
    $(document).scrollTop(0);
  });

  /*/////////////////////////////// Home Button ///////////////////////////////////*/  
  $('.home').click(function () {
    $back.removeClass('on');
    $main.fadeIn();
    $quickMenu.css({ opacity: '0' });
    $(document).scrollLeft(0);

    $publishing.animate({scrollTop:0});

    //다시 퍼블리싱 첫 페이지
    snum = 0
    pubSlide(snum);
  });  

  /*/////////////////////////////// Top ///////////////////////////////////*/  

  $('.top').click(function(){
    $publishing.animate({scrollTop:0});
    $(document).scrollTop(0);
  })

  /*/////////////////////////////// publishing page ///////////////////////////////////*/ 

  $pubNext.stop().click(function(){
    //페이지 원상복귀
    $publishing.animate({scrollTop:0});
    $('html,body').animate({scrollTop:0});

    //페이지 이동
    snum = (snum + 1) % pub_n;

    if(snum<3){
      pubSlide(snum);
      pubPosition(snum);
    }
    if(snum>3){snum==2}
  })

  $pubPrev.stop().click(function(){
    //페이지 원상복귀
    $publishing.animate({scrollTop:0});
    $('html,body').animate({scrollTop:0});

    //페이지 이동
    if(snum>=0){
      snum = (snum - 1 + pub_n) % pub_n;
      pubSlide(snum);
      pubPosition(snum);
    }
  })


  //Detail view 클릭시 
  
  $detailView.click(function(){
    $publishing.animate({scrollTop:1200},600);
  });
});
