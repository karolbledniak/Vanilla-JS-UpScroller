// detector of Java Script
document.body.classList.add('js');

// scrollingButton
document.addEventListener("DOMContentLoaded", function() {
  
  const upButton = document.getElementById('up-button');
        lastTime = 0;
        fps = 59;
        t = 0;
        d = 2000;
        scrollingNumberTo = 0;
        
  // returns the number of pixels that the document is currently scrolled vertically
  function scrollingNumber(){
    return window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0)
  };

  // easing - basic formulas from Robert Penner 
  Easing = {
    get:function(type, start, end, t, d){
      return start+(Easing[type](Math.min(t,d),d)*(end-start));
    },
    easeInQuad: function (t, d){
      return (t/=d)*t;
    },
  }
  
  // show/hide scrolling button
  window.addEventListener('scroll', function(){
    if (scrollingNumber() > 500) {
        upButton.classList.add("showScrollButton");
    } else if(scrollingNumber() < 500){
        upButton.classList.remove("showScrollButton");
    }
  });

  // click detection
  upButton.addEventListener('click', scrollingOnClick, false);

  // scrolling function 
  function scrollingOnClick(time){
    if(scrollingNumber() > 0){
      requestAnimationFrame(scrollingOnClick);
      if (time-lastTime>=1000/fps){
        lastTime = time;
        t+=1000/fps;
        scrollingNumberTo = Easing.get('easeInQuad', scrollingNumber(), 0, t, d);
        window.scrollTo(0, scrollingNumberTo);
      }
    } else if(scrollingNumber() <= 0){
      t=0;
      cancelAnimationFrame(scrollingOnClick);
    }
  } 
});    