$(document).ready(function(){

  let $planning = $('.planning');
  let $planningLi = $('.planning>ul>li');
  let $planningUl = $('.planning>ul')
  let $planpopup = $('.plan-popup');
  let $planpopUl = $('.plan-pop');
  let $planpopLi = $('.plan-pop li');
  let $planpopLiImg = $('.plan-pop li>img')
  let $planClose = $('.plan-btn-close');
  let $planNext = $('.plan-right-btn');
  let $planPrev = $('.plan-left-btn');
  let $storyImg = $('.plan-thumbs-doosan-story>img');
  let $storythumbs = $('.plan-thumbs-doosan-story>img')
  let $planThumbs = $('.plan-thumbs');
  let $planThumbsLi = $('.plan-thumbs>li');
  
  let plan_num = 0;
  let story_n = $storyImg.length;


  /* 함수 생성 */
  function storyShow(plan_num){
    $planpopLiImg.eq(plan_num).siblings().hide();
    $planpopLiImg.eq(plan_num).show();
  }

  /* 리스트를 클릭했을 때 */
  $planningLi.click(function(){
    let plan_num_ul = $(this).closest($planning).index();
    let plan_num_li = $(this).index();

    /* 팝업 전체가 보여져야하고(태블릿 같이) */
    $planpopup.fadeIn();

    /* 해당하는 ul 보여지고 */
    $planpopUl.eq(plan_num_ul).siblings().fadeOut();
    $planpopUl.eq(plan_num_ul).fadeIn();

    /* 해당하는 li 보여지기(사진도 함께) */
    $planpopLi.eq(plan_num_li).siblings().fadeOut();
    $planpopLi.eq(plan_num_li).fadeIn();

    /* 썸네일 UL그룹 보이기 */
    // $planThumbs.eq(plan_num_ul).siblings().fadeOut();
    // $planThumbs.eq(plan_num_ul).fadeIn();

    /* 썸네일 Li그룹 보이기 */
    $planThumbsLi.eq(plan_num_li).siblings().fadeOut();
    $planThumbsLi.eq(plan_num_li).fadeIn();

    plan_num = 0; 
    storyShow(plan_num);
  });

  /* ///////////////////////닫기버튼////////////////////////// */
  $planClose.click(function(){
    $planpopup.fadeOut();
  });

  /*/////////////////////// next prev button ////////////////////////*/
  $planNext.click(function(){
    plan_num++;

    if (plan_num < 14) {
      storyShow(plan_num);
    }
    if(plan_num ==14) {
      plan_num = 0;
      storyShow(plan_num);
    }
  })

  $planPrev.click(function(){
    plan_num--;
    if(plan_num >=0){
      storyShow(plan_num);
    }
    if(plan_num ==-1){
      plan_num = 13;
      storyShow(plan_num);
    }
  })

  /* /////////////썸네일 클릭했을 때/////////////////// */

  $storythumbs.click(function(){
    plan_num = $(this).index();
    storyShow(plan_num);
  });








})

  // $planNext.click(function(){
  //   plan_num = (plan_num + 1) % story_n;

  //   if (plan_num < 14) {
  //     storyShow(plan_num);
  //   }
  //   // if (plan_num == 14) { /* 안먹음 */
  //   //   plan_num = 0;
  //   //   storyShow(plan_num);
  //   // }
  // })

  // $planPrev.click(function(){
  //   plan_num = (plan_num - 1 + story_n) % story_n;
  //   storyShow(plan_num);
  // })
