$(document).ready(function(){

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

  let pnum = 0; 
  let area_n = $page.length;
  let oldidx = 0 
  let idx; 
  let ww = $(window).width();
  let sc = $(window).scrollLeft();

  function slidePage(idx){
    $("html,body").animate({scrollLeft:ww*idx});

    if(oldidx != idx){
      $(document).scrollTop(0); 
    };
    
    oldidx = idx;
  };


  $fixNext.click(function(){
    
    if(sc >= 0 && sc < ww){
      pnum = 0;
      idx = pnum++
      slidePage(idx);
    }else if(sc >= ww && sc < ww*2){
      pnum = 1;
      idx = pnum++
      slidePage(idx);
    }else if(sc >= ww*2 && sc < ww*3){
      pnum = 2;
      idx = pnum++
      slidePage(idx);
    }else if(sc >= ww*3 && sc < ww*4){
      pnum = 3;
      idx = pnum++
      slidePage(idx);
    }else if(sc >= ww*4 && sc < ww*5){
      pnum = 4;
      idx = pnum++
      slidePage(idx);
    }else if(sc >= ww*5 && sc < ww*6){
      pnum = 5;
      idx = pnum++
      slidePage(idx);
    };

    if(idx>area_n-1){
      idx = 0;
      slidePage(idx); 
    }

  });

  $fixPrev.click(function(){
    $(window).scroll(function(){
      let sc = $(window).scrollLeft();
  
      if((sc >= 0) && (sc < ww)){pnum = 0;};
      if((sc >= ww) && (sc < ww*2)){pnum = 1;};
      if((sc >= ww*2) && (sc < ww*3)){pnum = 2;};
      if((sc >= ww*3) && (sc < ww*4)){pnum = 3;};
      if((sc >= ww*4) && (sc < ww*5)){pnum = 4;};
      if((sc >= ww*5) && (sc < ww*6)){pnum = 5;};
      
      idx = pnum--;
      if(idx<0){
        idx = area_n-1; 
      }
      slidePage(idx);
    });
  }); 

});