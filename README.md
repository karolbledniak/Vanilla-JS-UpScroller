# Vanilla JS UpScroller

**This repository containse Vanilla JS feature to smoothly scroll web site from the bootom to the very start.**


## When you can use this?

You can use this feature almost everytime! Especialy when you have long website, which needs sometimes to be scroll to website start, and you don't want to use jQuery library. 

## How exactly is this supposed to function on the website?
In default version this should looks like that:

# [UpScroller](https://karolbledniak.github.io/Vanilla-JS-UpScroller/) 

## Which browers make this feature?

Every brower witch support and have turn on JavaScript.
I have been testing: InternerExprorer 11 and 10, Edge, Chrome, Opera, Firefox for now.

## What will happen when brower doesn't have JavaScript?

This few lines above turn on code when brower supports JavaScript.

In main.css:

```
body.js
```

and in script.js:

```
document.body.classList.add('js');
```
When brower doesn't support JS this feature does't appear. You simply don't see any arrow to scroll up.

## How to add UpScroller to your website?

### HTML
Copy this line to your website index.html insite footer tag:
```
<button id="up-button" tabindex="1" aria-label="back to top">back to top&nbsp;&#5169;</button>
```
Copy this line to your website index.html insite head tag, when you don't have link to your css file:
```
<link rel="stylesheet" href="main.css?v_1.0">
```
When you don't have JavaScript file, create it and name script.js. Next you copy this line to your website index.html insite body tag, just after all your html tags:
```
<script src="script.js?v_1.0"></script>
```
### CSS
Copy this line to your main.css, on the end:
```
body.js #up-button{
	display: block;
	position: fixed;
	right: -10rem;
	bottom: 3rem;
	
	width: 10rem;

	z-index: 999;

	-webkit-transition: right 1s ease;
    transition: right 1s ease;
}

body.js #up-button.showScrollButton{
	right: 2rem;
}
```
### JavaScript
Copy this lines to your script.js, on the end:
```
document.body.classList.add('js');

document.addEventListener("DOMContentLoaded", function() {
  
  const upButton = document.getElementById('up-button');
        lastTime = 0;
        fps = 59;
        t = 0;
        d = 2000; // change to fit speed of scrolling to your needs
        scrollingNumberTo = 0;
        
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
  
  window.addEventListener('scroll', function(){
    if (scrollingNumber() > 500) {
        upButton.classList.add("showScrollButton");
    } else if(scrollingNumber() < 500){
        upButton.classList.remove("showScrollButton");
    }
  });

  upButton.addEventListener('click', scrollingOnClick, false);

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
```

## Can I customize this UpScroller?
Yes, you can!

### HTML
Change **back to top &nbsp;&#5169** in index.html: 

``
<button id="up-button" tabindex="1" aria-label="back to top">back to top &nbsp;&#5169;</button>
``

to rename the UpScroller button.
### CSS
Change value of **right** and **width** in main.css (below code) to preferred value of buttons width.
Change value of **bottom** in main.css (bellow code) to preferred value of distance from botton of view. You also change **bottom** tag to **top** tag to put this button closer to top of view.
```
body.js #up-button{
	display: block;
	position: fixed;
	right: -10rem;
	bottom: 3rem;
	
	width: 10rem;
```
Change value of **right** in main.css (below code) to preferred value of button distance from right side of view. You also change **right** tag to **left** tag to put this button closer to left site of view.
```
body.js #up-button.showScrollButton{
	right: 2rem;
}
```
###JavaScript
If you change value of **const d** in script.js (below code) you change speed of scrolling.

faster scroll <<<<lower value <<<<**2000**>>>>  greater value>>>> slower scroll

```
 const upButton = document.getElementById('up-button');
        lastTime = 0;
        fps = 59;
        t = 0;
        d = 2000; // change to fit speed of scrolling to your needs
        scrollingNumberTo = 0;
```
You also change moment when this button is appearing and hiding. If you want this change value 500 in script.js (below code).

button appearing earlier <<<<lower value <<<<**500**>>>>  greater value>>>> button appearing later
```
window.addEventListener('scroll', function(){
    if (scrollingNumber() > 500) {
        upButton.classList.add("showScrollButton");
    } else if(scrollingNumber() < 500){
        upButton.classList.remove("showScrollButton");
    }
  });
```

## Autor 
* **Karol Błędniak**
* [LinkedIn](https://www.linkedin.com/in/karol-b%C5%82%C4%99dniak-215407aa/) - my site with CV

## License
This project is licensed under the MIT License - see the [MIT LICENSE](https://opensource.org/licenses/MIT) site for details

