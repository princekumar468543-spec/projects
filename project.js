var menu = document.querySelector(".navbar i");
var close = document.querySelector(".sidebar i");
var tl = gsap.timeline();

tl.to(".sidebar",{
   right :0,
   duration:1,
})

tl.from(".sidebar h4",{

   x:100,
   stagger:1,
   opacity: 0,
})

tl.pause();

