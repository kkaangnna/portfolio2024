$(document).ready(function(){

  let $dcon = $('.design-content');
  let $popup = $('#popup');
  let $popli = $('.pop>li');
  let $dpage = $('.g_page span:nth-child(1)');
  let $fixbtn = $('.fix-group')
  let $fixNext = $('.fix-next-btn');
  let $fixPrev = $('.fix-prev-btn');
  let $quickMenu = $('.quick-menu');
  let $leftbtn = $('.left_btn');
  let $rightbtn = $('.right_btn');
  let $close = $(".btn_close");
  let $popback = $('.pop_back');

  //각 목록을 클릭했을 때
  $dcon.click(function(){
    //버튼 안나오게
    // $fixbtn.css({ visibility: 'hidden' });
    // $fixPrev.css({ visibility: 'hidden' });
    // $fixNext.css({ visibility: 'hidden' });
    // $quickMenu.css({ visibility: 'hidden' });

    dcon_n = $(this).index();

    $popup.stop().fadeIn();
    $popli.eq(dcon_n).show(); 
    $dpage.text(dcon_n+1);

    
  })

  //이전다음버튼
  $leftbtn.click(function(){
    if(dcon_n>=0){
      $popli.eq(dcon_n).stop().fadeOut();
      dcon_n--;
      $dpage.text(dcon_n+1);
      $popli.eq(dcon_n).stop().fadeIn();
    }
    if(dcon_n==-1){ //첫번째 사진에서 left 클릭을 한 번 더 했으 ㄹ떄
      dcon_n = 16;
      $dpage.text(dcon_n+1);
      $popli.eq(dcon_n).stop().fadeIn();
    }

    //페이지 원상복귀
    $popup.animate({scrollTop: 0});
  })

  $rightbtn.click(function(){
    if(dcon_n<=16){
      $popli.eq(dcon_n).stop().fadeOut();
      dcon_n++;
      $dpage.text(dcon_n+1);
      $popli.eq(dcon_n).stop().fadeIn();
    }
    if(dcon_n==17){
      dcon_n = 0;
      $dpage.text(dcon_n+1);
      $popli.eq(dcon_n).stop().fadeIn();
    }
    //페이지 원상복귀 
    $popup.animate({scrollTop: 0});
  })

  //닫기버튼
  $close.click(function(){
    // $("html").css({"overflow-y":"scroll"}); 
    $popup.stop().fadeOut();
		$popli.stop().hide();
    
    $quickMenu.css({ visibility: 'visible' });
    $fixbtn.css({ visibility: 'visible' });
    $fixPrev.css({ visibility: 'visible' });
    $fixNext.css({ visibility: 'visible' });
  });

  //바탕을 클릭해도 닫히게
  $popback.click(function(){
    $popup.stop().fadeOut();
		$popli.stop().hide();
    
    $quickMenu.css({ visibility: 'visible' });
    $fixbtn.css({ visibility: 'visible' });
    $fixPrev.css({ visibility: 'visible' });
    $fixNext.css({ visibility: 'visible' });
  })
});