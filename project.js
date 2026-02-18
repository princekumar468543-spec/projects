var menu = document.querySelector(".navbar i");
var cross = document.querySelector(".sidebar i");
var tl = gsap.timeline();

tl.to(".sidebar",{
   right :0,
   duration:0.8,
})

tl.from(".sidebar h4",{

   x:100,
   stagger:0.7,
   opacity: 0,
})

tl.pause();

menu.addEventListener("click",function(){

   tl.play();
});

cross.addEventListener("click",function(){
   
   tl.reverse();
})

