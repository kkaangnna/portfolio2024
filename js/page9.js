$(document).ready(function () {
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
  let $design = $('#design');
  let $pubactiveLi = $('.pubname li')
  let $pubdotLi = $('.pubdot li')
  let $pubdot = $('.pubdot')
  let $pubactive = $('.pubactive');
  let $responsive = $('#responsive');
  let $mobile = $('#mobile');
  let $planning = $('#planning');


  let pnum = 0;
  let snum = 0;
  let pscroll = 0;
  let area_n = $page.length;
  let pub_n = $pubCon.length;
  let ww = $(window).width();
  let pw = $pubCon.width();
  

  /*////////////////////////// 페이지마다 번호 매기기 ///////////////////////////////////*/

  $(window).scroll(function () {
    let sc = $(window).scrollLeft();

    if (sc >= 0 && sc < ww) {
      pnum = 0;
    }
    if (sc >= ww && sc < ww * 2) {
      pnum = 1;
      snum = 0;
    }
    if (sc >= ww * 2 && sc < ww * 3) { //퍼블리싱 페이지 일때
      pnum = 2;

      pubPosition(snum);
    } else {
      $fixNext.css({ visibility: 'visible' });
      $pubNext.css({ visibility: 'hidden' });
      $fixPrev.css({ visibility: 'visible' });
      $pubPrev.css({ visibility: 'hidden' });
    }
    if (sc >= ww * 3 && sc < ww * 4) {
      pnum = 3;
      snum = 2;
    }
    if (sc >= ww * 4 && sc < ww * 5) {
      pnum = 4;
    }
    if (sc >= ww * 5 && sc < ww * 6) {
      pnum = 5;
    }
  });


  /*//////////////////////////////// 함수 생성 //////////////////////////////////////////*/

  function slidePage(idx) {
    $('html,body').animate({ scrollLeft: ww * idx });
  }

  function bookmark(idx) {
    $quickMenuLi.eq(idx).siblings().removeClass('active');
    $quickMenuLi.eq(idx).siblings().find('i').removeClass('active');
    $quickMenuLi.eq(idx).siblings().find('span').removeClass('active');

    $quickMenuLi.eq(idx).addClass('active');
    $quickMenuLi.eq(idx).find('i').addClass('active');
    $quickMenuLi.eq(idx).find('span').addClass('active');
  }

  function pubSlide(pslide) {
    targetX = -(pslide * pw);
    $pubSlide.animate({ left: targetX }, 600);
  }

  function pubShow(snum) { /* 퍼블리싱 페이지 보이기 */
    $pubCon.eq(snum).siblings().removeClass('show');
    $pubactiveLi.eq(snum).siblings().removeClass('active');
    $pubdotLi.eq(snum).siblings().removeClass('active');

    $pubCon.eq(snum).addClass('show');
    $pubactiveLi.eq(snum).addClass('active');
    $pubdotLi.eq(snum).addClass('active');

    if(snum==2){
      $pubactiveLi.css({color:"#403232", "text-shadow":"none"});
      $pubdot.addClass('color');
    }else{
      $pubactiveLi.css({color:"#fff", "text-shadow": "0 0 5px rgba(0,0,0,0.4)"});
      $pubdot.removeClass('color');
    }
  }

  function pubPosition(snum) {
    /* 페이지 위치에 맞춰서 화살표  */ 
    if (snum < 1) {
      $fixNext.css({ visibility: 'hidden' });
      $pubNext.css({ visibility: 'visible' });
      $fixPrev.css({ visibility: 'visible' });
      $pubPrev.css({ visibility: 'hidden' });
    }
    if (snum > 0 && snum < 2) {
      $fixNext.css({ visibility: 'hidden' });
      $pubNext.css({ visibility: 'visible' });
      $fixPrev.css({ visibility: 'hidden' });
      $pubPrev.css({ visibility: 'visible' });
    }
    if (snum == 2) {
      $fixNext.css({ visibility: 'visible' });
      $pubNext.css({ visibility: 'hidden' });
      $fixPrev.css({ visibility: 'hidden' });
      $pubPrev.css({ visibility: 'visible' });
    }
  }

  function goTop(){ //페이지 원상복구

    $publishing.animate({ scrollTop: 0 }); //퍼블리싱 페이지
    $design.animate({ scrollTop: 0 }); //디자인 페이지
    // $('html,body').animate({ scrollTop: 0 });
    $responsive.animate({scrollTop: 0});
    $mobile.animate({scrollTop: 0});
    $planning.animate({scrollTop: 0});

  }

  
  /*////////////////////////// Next, Prev Button ///////////////////////////////////*/
  $fixNext.stop().click(function () {
    $(document).scrollTop(0);
    pnum = (pnum + 1) % area_n; // 페이지 번호 증가 및 범위 확인
    slidePage(pnum);
    bookmark(pnum);
    goTop();

    pubShow(snum);
    pubPosition(snum);
  });

  $fixPrev.stop().click(function () {
    pnum = (pnum - 1 + area_n) % area_n; // 페이지 번호 감소 및 범위 확인
    slidePage(pnum);
    bookmark(pnum);
    goTop();

    pubShow(snum);
    pubPosition(snum);
  });


  /*/////////////////////////////// 메인 책갈피 ///////////////////////////////////*/
  $backli.click(function () {
    let bnum = $(this).closest($back).index();

    $('.abstract').fadeOut();
    
    //알림창 삭제
    $('.alert').fadeOut(500);
    
    
    $main.animate({scrollTop:0});

    //오른쪽 퀵메뉴 현재위치 활성화
    bookmark(bnum);

    //페이지 이동
    $('html,body').animate({scrollLeft: ww * bnum});

    //페이지 접히는 모션
    $back.addClass('on');
    $main.delay(700).fadeOut();
    $quickMenu.css({ opacity: '1' });

    //페이지 원상복귀
    goTop();

    snum = 0;
    pubShow(snum);

    //profile 활성화
    setTimeout(function(){
      $('.profile-back').addClass('active')
    },1000)

    setTimeout(function(){
      $('.profile-photo').addClass('active');
    },1300)

    setTimeout(function(){
      $('.profile-skill').addClass('active');
    },1700)

    setTimeout(function(){
      $edu.addClass('active');
    },2000)

    setTimeout(function(){
      $('.profile-text').addClass('active');
    },2300)

    setTimeout(function(){
      $('.deco').addClass('active');
      $('.tape').addClass('active');
      $('.tape2').addClass('active');
      $('.memo2').addClass('active');
      $('.clip').addClass('active');
      $('.memo_desc').addClass('active');
    },3000)

    setTimeout(function(){
      $('.flower').addClass('active');
    },3100)

    /* 퍼센트 차오르기 */
    setTimeout(function(){
      $('.percent>li').addClass('active');
    },3200)
  });

  /*/////////////////////////////// 퀵메뉴 책갈피 ///////////////////////////////////*/

  $quickMenuLi.click(function () {
    let qnum = $(this).index();


    //페이지 이동
    $('html,body')
      .stop()
      .animate({ scrollLeft: ww * qnum });

    //책갈피 활성화
    bookmark(qnum);

    //페이지 원상복귀
    goTop();

    //다시 퍼블리싱 첫 페이지
    snum = 0;
    pubShow(snum);
    pubPosition(snum);
  });

  /*/////////////////////////////// 메인 Next Page ///////////////////////////////////*/
  $mainNext.stop().click(function () {

    //알림창 삭제
    $('.alert').fadeOut(500);

    $main.animate({scrollTop:0});

    $back.addClass('on');
    $main.delay(700).fadeOut();
    $quickMenu.css({ opacity: '1' });
    $(document).scrollLeft(0);

    bookmark(0); /* 무조건 첫번째 책갈피 활성화 */

    //페이지 원상복구
    goTop();

    //profile 활성화
    setTimeout(function(){
      $('.profile-back').addClass('active')
    },1000)

    setTimeout(function(){
      $('.profile-photo').addClass('active');
    },1300)

    setTimeout(function(){
      $('.profile-skill').addClass('active');
    },1700)

    setTimeout(function(){
      $edu.addClass('active');
    },2000)

    setTimeout(function(){
      $('.profile-text').addClass('active');
    },2300)

    setTimeout(function(){
      $('.deco').addClass('active');
      $('.tape').addClass('active');
      $('.tape2').addClass('active');
      $('.memo2').addClass('active');
      $('.clip').addClass('active');
      $('.memo_desc').addClass('active');
    },3000)

    setTimeout(function(){
      $('.flower').addClass('active');
    },3100)

    
    /* 퍼센트 차오르기 */
    setTimeout(function(){
      $('.percent>li').addClass('active');
    },3200)
  });

  /*/////////////////////////////// Home Button ///////////////////////////////////*/
  $('.home').click(function () {
    $back.removeClass('on');
    $main.fadeIn();
    $quickMenu.css({ opacity: '0' });
    $(document).scrollLeft(0);
    $('.abstract').fadeIn();

    //페이지 원상복구
    goTop();

    //다시 퍼블리싱 첫 페이지
    snum = 0;
    pubShow(snum);

    //profile 원상복귀
    profileHide();
  });

  /*/////////////////////////////// Top ///////////////////////////////////*/

  $('.top').click(function () {
    goTop();
  });

  /*/////////////////////////////// publishing page ///////////////////////////////////*/

  $pubNext.stop().click(function () {
    //페이지 원상복귀
    goTop();

    //페이지 이동
    snum = (snum + 1) % pub_n;

    if (snum < 3) {
      pubShow(snum);
      pubPosition(snum);
    }
    if (snum > 3) {
      snum == 2;
    }
  });

  $pubPrev.stop().click(function () {
    //페이지 원상복귀
    goTop();

    //페이지 이동
    if (snum >= 0) {
      snum = (snum - 1 + pub_n) % pub_n;
      pubShow(snum);
      pubPosition(snum);
    }
  });

  //Scroll

  
  $publishing.scroll(function () {
    let p = $(this).scrollTop();

    $('.txt').text(p);

    if(p > 1000){
      $pubactive.fadeOut();
    }else{
      $pubactive.fadeIn();
    }

    
    if (p < 1200){
      $('.plus').removeClass('active');
      $('.mvideo').removeClass('show');
      $('.mdes').removeClass('show');      
    }
    if (p >= 1200) {
      pscroll = 0;
      $('.plus').eq(pscroll).addClass('active');
      $('.mvideo').eq(pscroll).addClass('show');
      $('.mdes').eq(pscroll).addClass('show');
    }
    if (p>=1900){
      pscroll = 1;
      $('.plus').eq(pscroll).addClass('active');
      $('.mvideo').eq(pscroll).addClass('show');
      $('.mdes').eq(pscroll).addClass('show');
    }
    if (p>=2400){
      pscroll = 2;
      $('.plus').eq(pscroll).addClass('active');
      $('.mvideo').eq(pscroll).addClass('show');
      $('.mdes').eq(pscroll).addClass('show');
    }
    if (p>=2900){
      pscroll = 3;
      $('.plus').eq(pscroll).addClass('active');
      $('.mvideo').eq(pscroll).addClass('show');
      $('.mdes').eq(pscroll).addClass('show');
    }
  });

  
  $detailView.click(function () {
    $publishing.animate({ scrollTop: 1200 }, 600);
  });

  /* ///////////////profile///////////////// */

  let $edu = $('.profile-edu');
  
  function profileHide(){

    //background
    $('.profile-back').removeClass('active');

    //photo
    $('.profile-photo').removeClass('active');

    //skill
    $('.profile-skill').removeClass('active');

    //edu
    $edu.removeClass('active');

    //text
    $('.profile-text').removeClass('active');

    //deco
    $('.deco').removeClass('active');
    $('.tape').removeClass('active');
    $('.flower').removeClass('active');
    $('.tape2').removeClass('active');
    $('.memo2').removeClass('active');
    $('.clip').removeClass('active');
    $('.memo_desc').removeClass('active');

    //퍼센트
    $('.percent>li').removeClass('active');
  }

  /* 퀵메뉴 profile */
  $('.click-profile').click(function(){

    profileHide();

    //profile 활성화
    setTimeout(function(){
      $('.profile-back').addClass('active')
    },1000)

    setTimeout(function(){
      $('.profile-photo').addClass('active');
    },1300)

    setTimeout(function(){
      $('.profile-skill').addClass('active');
    },1700)

    setTimeout(function(){
      $edu.addClass('active');
    },2000)

    setTimeout(function(){
      $('.profile-text').addClass('active');
    },2300)

    setTimeout(function(){
      $('.deco').addClass('active');
      $('.tape').addClass('active');
      $('.tape2').addClass('active');
      $('.memo2').addClass('active');
      $('.clip').addClass('active');
      $('.memo_desc').addClass('active');
    },3000)

    setTimeout(function(){
      $('.flower').addClass('active');
    },3100)

    /* 퍼센트 차오르기 */
    setTimeout(function(){
      $('.percent>li').addClass('active');
    },3200)
  })
});
