
window.onscroll = function(){
    console.info(document.documentElement.srollTop);
    var gototop = document.getElementById("gototop");
    if(document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
         gototop.style.display="block";
    }else {
        gototop.style.display = "none";
    }
}

 

function common(sTop=0, duration=1000) {
    $("html, body").animate({
        scrollTop: sTop
    }, duration);
}
 
function goToTop() {
    common();
}
 

function go(obj) {
    event.preventDefault();
    var pos = document.querySelector(obj.getAttribute("href"));

    common(pos.offsetTop);
}
 
$(document).ready(function(){
    $('#zoom1, #zoom2, #zoom3,#zoom4').zoom()
    
});
/* js menu tablet mobile*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }
 
  
   

 
 