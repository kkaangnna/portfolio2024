$(document).ready(function () {

  //브라우저 창 사이즈 변경시를 위해
  $(window).resize(function () {
    location.reload(); //새로고침
    let wh = $(window).height();
    $('html,body')
      .stop()
      .animate({ scrollLeft: wh * pnum }, 500);
  });

  /* ////////////////알림창////////////////// */
  $('.alert').addClass('active');
  $('.welcome').addClass('active');

  setTimeout(function(){
    $('.welcome>span').addClass('active')
    $('.alert-text').addClass('active');
    $('.alert-close').addClass('active');
  },1000)

  /* 닫기버튼 */
  $('.alert-close').click(function(){

    $('.alert-text').removeClass('active');
    $('.alert-close').removeClass('active');
    $('.welcome>span').removeClass('active')

    setTimeout(function(){
      $('.welcome').removeClass('active');
    },400)

    setTimeout(function(){
      $('.alert').removeClass('active');
    },400)
  })

  /*///////////////// main/////////////// */

  /* 변수 */
  let $strong = $('.back>strong');
  let $back = $('.back');
  let $mainNext = $('.next-btn');
  let $fixNext = $('.fix-next-btn');
  let $fixPrev = $('.fix-prev-btn');
  let $subtab = $('.sub-tab li');
  let $subvideo = $('.subpage-video .svideo');
  let $subdes = $('.sub-des .sdes');


  /* 함수 */
  function subTabShow(stab){
    $subtab.eq(stab).siblings().removeClass('active');
    $subvideo.eq(stab).siblings().removeClass('active');
    $subdes.eq(stab).siblings().removeClass('active');

    $subtab.eq(stab).addClass('active');
    $subvideo.eq(stab).addClass('active');
    $subdes.eq(stab).addClass('active');
  }

  /* 책갈피 애니메이션 */
  let mnum = $strong.closest($back).index();

  $strong.stop().hover(
    function () {
      $(this).closest($back).eq(mnum).addClass("hover");
    },
    function () {
      $(this).closest($back).eq(mnum).removeClass("hover");
    }
  );

  /* 메인의 책갈피 메뉴 호버했을 때 */
  $mainNext.hover(
    function () {
      $('.gradient').css({ opacity: 1 });
    },
    function () {
      $('.gradient').css({ opacity: 0 });
    }
  );

  $strong.hover(
    function () {
      $('.gradient').css({ opacity: 1 });
    },
    function () {
      $('.gradient').css({ opacity: 0 });
    }
  );

  /* prev next 호버 했을 때 */
  $fixNext.hover(
    function () {
      $('.right-gradient').css({opacity:1});
    },
    function () {
      $('.right-gradient').css({opacity:0});
    }
  );

  $fixPrev.hover(
    function () {
      $('.left-gradient').css({opacity:1});
    },
    function () {
      $('.left-gradient').css({opacity:0});
    }
  );


  //publishing sub page ------ tab gallery
  
  $subtab.click(function(){
    let stab_n = $(this).index();
    subTabShow(stab_n);
  });

  /* ////////////////////////////responsive //////////////////////////////////*/

  let $mobileA = $(".res-mobile-link > a");
  let $mobileLink = $(".res-mobile-link");
  let $iphone = $('.iphone');
  let $tabletA = $(".res-tablet-link > a");
  let $tabletLink = $(".res-tablet-link");
  let $tablet = $(".tablet")
  let $resPop = $('#responsive-pop-up');
  let $resMockup = $('.res-mockup');
  let $resLinkA = $('.res-link > a');
  let $resLink = $('.res-link');
  let $resPopBack = $('.res-pop-back');
  let $responsive = $('#responsive');
  let $resDesignBtn = $('.responsive-design-btn');
  let $resDesignBox = $('.responsive-design-box>p')

  /* 모바일 오버 */
  $mobileA.hover(function(){
    $mobileLink.animate({"top":"23%"});
    $iphone.animate({top:"-3.4%"});
  }, function(){
    $mobileLink.animate({"top":"32.5%"});
    $iphone.animate({top:"6.5%"});
  });

  /* 태블릿 오버 */
  $tabletA.hover(function(){
    $tabletLink.stop().animate({"top":"14.5%"});
    $tablet.stop().animate({top:"-6.4%"});
  }, function(){
    $tabletLink.stop().animate({"top":"24%"});
    $tablet.stop().animate({top:"3%"});
  });

  /* 팝업창 열기 */

  $resLinkA.click(function(){
    let ln = $(this).closest($resLink).index();
    $resPop.fadeIn();
    $resMockup.eq(ln).siblings().removeClass('show');
    $resMockup.eq(ln).addClass('show');
    return false
  });

  /* 마지막 팝업창 열기 */
  $resDesignBtn.click(function(){
    let dn = $(this).closest($resDesignBox).index();
    $resPop.fadeIn();
    $resMockup.eq(dn).siblings().removeClass('show');
    $resMockup.eq(dn).addClass('show');
  })
  
  //바탕클릭해도 꺼지게
  $resPop.click(function(){
    $resPop.fadeOut();

    $('.tablet-monitor').animate({scrollTop:0});
    $('.mockup-pc-monitor-in').animate({scrollTop:0});
  });

  /* Detail view 누르면  */
  $('.res-detail-view').click(function(){
    $responsive.animate({scrollTop:1200},600);
  })

  $responsive.scroll(function(){
    let r = $(this).scrollTop();

    $('.txt').text(r);

    if (r < 2400){
      $('.circle-desc').removeClass('active');
    }

    if (r > 2400){
      $('.circle-desc').addClass('active');
    }

    if (r <= 2800){
      $('.circle-desc').removeClass('move');
    }

    if (r > 2800){
      $('.circle-desc').addClass('move');
    }

    if (r > 3500 && r < 6200){
      $('.top').addClass('black');
    }else{
      $('.top').removeClass('black');
    }
  })

  /* ///////////planning////////////////// */

  let $planbtn = $('.planning > ul');
  let $planLi = $('.planning > ul > li');
  let $planCard = $('.planning');
  let $planSony = $('.plan-sony-result');
  // let $plantitle = $('.planning>p');

  $planCard.hover(function(){
    $(this).find($planbtn).addClass('show');
    $(this).addClass('active');
    $(this).find('a').addClass('active');
    $(this).find($planSony).addClass('active');
  }, function(){
    $planbtn.removeClass('show');
    $(this).removeClass('active');
    $(this).find('a').removeClass('active');
    $(this).find($planSony).removeClass('active');
  });

  /* ///////////profile////////////////// */

  /* memo hover */
  $('.memo_desc').stop().hover(function(){
    $('.memo2').addClass('hover');
    $('.clip').addClass('hover');
    $(this).addClass('hover');
  }, function(){
    $('.memo2').removeClass('hover');
    $('.clip').removeClass('hover');
    $(this).removeClass('hover');
  })

  /* //////////////////////////mobile////////////////////////// */

  $('.mo-detail-view').click(function(){
    $('#mobile').animate({scrollTop:1100},600);
  });

  $('#mobile').scroll(function(){
    let mn = $('#mobile').scrollTop();

    $('.txt').text(mn);
  })
});
