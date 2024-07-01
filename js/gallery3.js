$(document).ready(function(){


  /* ///////////////////////////////////// */

  let $planLi = $('.planning>ul>li')
  let $planning = $('#planning');
  let $planLargeLi = $('.plan-large-list > li');
  let $planSmallLi = $('.plan-small-list > li');
  let $planSmallLiP = $('.plan-small-list > li > p');
  let $highlight = $('.tab-highlight');
  let $frameLi = $('.plan-frame-list > li');
  let $planframe = $('.plan-frame');


  /* ////////////////상단 li를 클릭했을 때////////////// */

  /* 통합버전 */
  $planLi.click(function(){

    //index
    let plan_num = $(this).closest('.planning').index();
    let plan_s_num = $(this).index();
    let move = 300*plan_num;

    // $('.txt').text(plan_s_num);
    
    // 화살표 배경 위치 이동
    $highlight.animate({left:move});

    // scrollTop 위치 이동
    $planning.animate({scrollTop:1000},600);

    // large-list가 active
    $planLargeLi.eq(plan_num).siblings().removeClass('active');
    $planLargeLi.eq(plan_num).addClass('active');    

    // small-list가 active
    $planSmallLi.eq(plan_num).siblings().fadeOut();
    $planSmallLi.eq(plan_num).fadeIn();

    $planSmallLi.eq(plan_num).find('p').eq(plan_s_num).siblings().removeClass('active');
    $planSmallLi.eq(plan_num).find('p').eq(plan_s_num).addClass('active');

    //사진 보이기
    $frameLi.find('p').hide();
    $frameLi.eq(plan_num).find('p').eq(plan_s_num).show();

    //사진 맨 위로
    $planframe.scrollTop(0).scrollLeft(0);

    //해당하는 plan-btn 나오기
    $('.plan-btn > li').removeClass('active');
    $('.plan-btn > li').eq(plan_num).addClass('active');
  });

  /* //////////////////////하단 li를 클릭했을 때 /////////////////// */

  $planLargeLi.click(function(){
    let plan_l_num = $(this).index();
    let move2 = 300*plan_l_num;

    // $('.txt').text(plan_l_num);
    
    //화살표 배경 위치 이동
    $highlight.animate({left:move2});

    // large-list가 active
    $planLargeLi.eq(plan_l_num).siblings().removeClass('active');
    $planLargeLi.eq(plan_l_num).addClass('active');    

    //해당하는 small-list가 보이게
    $planSmallLi.eq(plan_l_num).siblings().fadeOut();
    $planSmallLi.eq(plan_l_num).fadeIn();

    //무조건 맨처음 p가 보이게
    $planSmallLi.eq(plan_l_num).find('p').eq(0).siblings().removeClass('active');
    $planSmallLi.eq(plan_l_num).find('p').eq(0).addClass('active');     
    
    //사진 보이기
    $frameLi.find('p').hide();
    $frameLi.eq(plan_l_num).find('p').eq(0).show();

    //사진 맨 위로
    $planframe.scrollTop(0).scrollLeft(0);
    
    //해당하는 plan-btn 나오기
    $('.plan-btn > li').removeClass('active');
    $('.plan-btn > li').eq(plan_l_num).addClass('active');

  });

  $planSmallLiP.click(function(){
    let plan_sp_num = $(this).closest('li').index();
    let plan_p_num = $(this).index();

    // $('.txt').text(plan_sp_num);

    $planSmallLi.eq(plan_sp_num).find('p').eq(plan_p_num).siblings().removeClass('active');
    $planSmallLi.eq(plan_sp_num).find('p').eq(plan_p_num).addClass('active');     

    //사진 보이기
    $frameLi.find('p').hide();
    $frameLi.eq(plan_sp_num).find('p').eq(plan_p_num).show();

    //사진 맨 위로
    $planframe.scrollTop(0).scrollLeft(0);

  })

  /* 소니만 목업창 띄우기 */
  $('.plan-sony-mockup').click(function(){
    $('.plan-mockup').fadeIn();
    $('.mockup-pc-monitor-in').scrollTop(0);
  })

  $('.plan-sony-result').click(function(){
    $('.plan-mockup').fadeIn();
    $('.mockup-pc-monitor-in').scrollTop(0);
  })


  $('.plan-mockup').click(function(){
    $(this).fadeOut();
  });



  /* 스크롤 이벤트  */
  // $('#planning').scroll(function(){
  //   sc = $('#planning').scrollTop();
  //   // $('.txt').text(sc);
  // })

  
})

