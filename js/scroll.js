// $(window).scroll(function () {
//     $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
// });

let btn = document.querySelector("button");
let nav = document.getElementById("navbar")
window.onscroll =function(){
      if(window.scrollY >= 200){
        btn.style.display="block";
        nav.style.background="rgb(3, 3, 102)";
        nav.style.transition="0.3s ease";
      }else{
        btn.style.display="none";
        nav.style.background="transparent";
        
      }
}
btn.onclick=function(){
    window.scrollTo({
        top:0,
        right:0,
        behavior:"smooth"
    });
};