$(document).ready(function(){


  /* ///////////////////////////////////// */

  let $planpopup = $('.plan-popup');
  let $planClose = $('.plan-btn-close');
  let $planDoosanLi = $('.planning-doosan>li'); 
  let $planSonyLi = $('.planning-sony>li'); 
  let $planPopDoosanLi = $('.plan-doosan>li');
  let $planPopSonyLi = $('.plan-sony>li');
  let $planNext = $('.plan-right-btn');
  let $planPrev = $('.plan-left-btn');

  //이미지
  let $storyImg = $('.story-img>img');
  let $outImg = $('.output-img>img');
  let $fixImg = $('.fix-img>img');
  let $finishImg = $('.finish-img>img');
  let $metaImg = $('.metaphor-img>img');


  let plan_num = 0
  let story_num = 0; //이거 설정안해주면 안넘어감 
  let fix_num = 0;
  let finish_num = 0;
  let meta_num = 0;

  let show_num = 0;

  /* //////////////////함수///////////////// */


  function galleryImgA(Dnum){ /* 두산 */

    // 팝업 전체가 보여져야하고(태블릿 같이)
    $planpopup.fadeIn();

    //다른 li닫아버리기
    $planPopSonyLi.fadeOut();

    // 두산의 li들이 보여져야함
    $planPopDoosanLi.eq(Dnum).siblings().fadeOut();
    $planPopDoosanLi.eq(Dnum).fadeIn();
  }
  function galleryImgB(Snum){ /* sony */

    // 팝업 전체가 보여져야하고(태블릿 같이)
    $planpopup.fadeIn();

    // 다른 li 닫아버리기 
    $planPopDoosanLi.fadeOut();

    // 소니의 li들이 보여져야함
    $planPopSonyLi.eq(Snum).siblings().fadeOut();
    $planPopSonyLi.eq(Snum).fadeIn();
  }


  /* 이미지 보여지는 함수 */
  //스토리보드
  function storyShow(story_num){
    $storyImg.eq(story_num).siblings().hide();
    $storyImg.eq(story_num).show();
  }
  //수정완료
  function fixShow(fix_num){
    $fixImg.eq(fix_num).siblings().hide();
    $fixImg.eq(fix_num).show();  
  }
  function finishShow(finish_num){
    $finishImg.eq(finish_num).siblings().hide();
    $finishImg.eq(finish_num).show();  
  }
  function metaShow(meta_num){
    $metaImg.eq(meta_num).siblings().hide();
    $metaImg.eq(meta_num).show();  
  }




  /* 두산의 리스트를 클릭했을 떄 */
  $planDoosanLi.click(function(){
    Dnum = $(this).index()

    galleryImgA(Dnum);

    //첫화면부터 열리기
    plan_num = 0;
    storyShow(plan_num);
    fixShow(plan_num);
    finishShow(plan_num);
  });

  /* 소니의 리스트를 클릭했을 떄 */
  $planSonyLi.click(function(){
    Snum = $(this).index()

    galleryImgB(Snum);

    //첫화면부터 열리기
    plan_num = 0;
    metaShow(plan_num);

    //스크롤 원래 상태로 
    $('.metaphor-img').scrollTop(0);
  });


  /* ///////////////////////닫기버튼////////////////////////// */
  /* 두산 */
  //스토리보드
  $('.plan-btn-doosan>.plan-close-btn').click(function(){
    $planpopup.fadeOut();
  });
  //산출물 목록표
  $('.plan-btn-output>.plan-close-btn').click(function(){
    $planpopup.fadeOut();
  });
  //수정완료보고서
  $('.plan-btn-fix>.plan-close-btn').click(function(){
    $planpopup.fadeOut();
  });
  //프로젝트완료보고서
  $('.plan-btn-finish>.plan-close-btn').click(function(){
    $planpopup.fadeOut();
  });

  /* sony */
  //메타포
  $('.plan-btn-metaphor>.plan-close-btn').click(function(){
    $planpopup.fadeOut();
  });

  /*/////////////////////// next prev button ////////////////////////*/


  /* 두산 */
  //스토리보드
  $('.plan-btn-doosan>.plan-next-btn').click(function(){
    story_num++;

    if(story_num ==14) {
      story_num = 0;
      storyShow(story_num);
    }
    if (story_num >= 0 && story_num < 14) {
      storyShow(story_num);
    }
  })
  $('.plan-btn-doosan>.plan-prev-btn').click(function(){
    story_num--;

    if (story_num >= 0 && story_num < 14) {
      storyShow(story_num);
    }
    if(story_num ==-1) {
      story_num = 13;
      storyShow(story_num);
    }
  })

  //수정완료
  $('.plan-btn-fix>.plan-next-btn').click(function(){
    fix_num++;

    if(fix_num ==9) {
      fix_num = 0;
      fixShow(fix_num);
    }
    if (fix_num >= 0 && fix_num < 9) {
      fixShow(fix_num);
    }
  })
  $('.plan-btn-fix>.plan-prev-btn').click(function(){
    fix_num--;

    if (fix_num >= 0 && fix_num < 9) {
      fixShow(fix_num);
    }
    if(fix_num ==-1) {
      fix_num = 8;
      fixShow(fix_num);
    }
  })

  //프로젝트완료
  $('.plan-btn-finish>.plan-next-btn').click(function(){
    finish_num++;

    if(finish_num ==8) {
      finish_num = 0;
      finishShow(finish_num);
    }
    if (finish_num >= 0 && finish_num < 8) {
      finishShow(finish_num);
    }
  })
  $('.plan-btn-finish>.plan-prev-btn').click(function(){
    finish_num--;

    if (finish_num >= 0 && finish_num < 8) {
      finishShow(finish_num);
    }
    if(finish_num ==-1) {
      finish_num = 7;
      finishShow(finish_num);
    }
  })

  /* Sony */
  //메타포
  $('.plan-btn-metaphor>.plan-next-btn').click(function(){
    meta_num++;

    if(meta_num ==2) {
      meta_num = 0;
      metaShow(meta_num);
    }
    if (meta_num >= 0 && meta_num < 2) {
      metaShow(meta_num);
    }

    //스크롤 원래 상태
    $('.metaphor-img').scrollTop(0);
  })
  $('.plan-btn-metaphor>.plan-prev-btn').click(function(){
    meta_num--;

    if (meta_num >= 0 && meta_num < 2) {
      metaShow(meta_num);
    }
    if(meta_num ==-1) {
      meta_num = 1;
      metaShow(meta_num);
    }

    //스크롤 원래 상태
    $('.metaphor-img').scrollTop(0);
  })





})

