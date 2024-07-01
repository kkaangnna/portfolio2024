$(document).ready(function(){


  /* ///////////////////////////////////// */

  let $planpopup = $('.plan-popup');
  let $planClose = $('.plan-btn-close');
  let $planDoosanLi = $('.planning-doosan>li'); 
  let $planPopDoosanLi = $('.plan-doosan>li');
  let $planNext = $('.plan-right-btn');
  let $planPrev = $('.plan-left-btn');

  //이미지
  let $storyImg = $('.story-img>img')
  let $outImg = $('.output-img>img')
  let $fixImg = $('.fix-img>img')
  let $finishImg = $('.finish-img>img')


  let plan_num = 0
  let show_num = 0;

  /* //////////////////함수///////////////// */
  function firstImg(plan_num){ //무조건 첫 이미지부터
    
    //스토리보드
    $storyImg.eq(plan_num).siblings().hide();
    $storyImg.eq(plan_num).fadeIn();

    //산출물
    $outImg.eq(plan_num).siblings().hide();
    $outImg.eq(plan_num).fadeIn();

    //수정완료
    $fixImg.eq(plan_num).siblings().hide();
    $fixImg.eq(plan_num).fadeIn();

    //프로젝트완료
    $finishImg.eq(plan_num).siblings().hide();
    $finishImg.eq(plan_num).fadeIn();
  }

  function galleryImgA(Dnum){ /* 두산 */

    // 팝업 전체가 보여져야하고(태블릿 같이)
    $planpopup.fadeIn();

    // 두산의 li들이 보여져야함
    $planPopDoosanLi.eq(Dnum).siblings().fadeOut();
    $planPopDoosanLi.eq(Dnum).fadeIn();
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




  /* 두산의 리스트를 클릭했을 떄 */
  $planDoosanLi.click(function(){
    Dnum = $(this).index()

    galleryImgA(Dnum);

    //첫화면부터 열리기
    plan_num = 0;
    storyShow(plan_num);
    fixShow(plan_num);
  });


  /* ///////////////////////닫기버튼////////////////////////// */
  $planClose.click(function(){
    $planpopup.fadeOut();
  });

  /*/////////////////////// next prev button ////////////////////////*/
  $planNext.click(function(){
    story_num = 0;

    story_num++;
    // fix_num++;

    $('.txt').text(story_num);

    //스토리보드
    if(story_num ==14) {
      story_num = 0;
      storyShow(story_num);
    }
    if (story_num >= 0 && story_num < 14) {
      storyShow(story_num);
    }

    //수정완료
    if(fix_num >= 0 && fix_num < 9){
      fixShow(fix_num);
    }
    if(fix_num == 9){
      fix_num = 0;
      fixShow(fix_num);
    }


  })

  $planPrev.click(function(){
    story_num--;

    if (story_num >= 0 && story_num < 14) {
      storyShow(story_num);
    }
    if(story_num ==-1) {
      story_num = 13;
      storyShow(story_num);
    }
  })







})

