const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline() ;

tl.to("#page1" , {

scale : 0.6 ,
y : "100vh" ,
// duration : 1 ,
// delay : 1 ,

})

tl.to("#page1" , {

    
    y : "30vh" ,



})

tl.to("#page1" , {
y  :"0vh" ,
scale : 1 ,
rotate : 360 ,
duration : 0.7 ,
delay : 1 
})