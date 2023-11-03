function locojspen(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locojspen()


var tlload = gsap.timeline()

tlload.from(".text-load h1",{
    opacity: 0.5,
    y: 200,
    duration: 1,
    delay: 1,
})

tlload.to("#t5",{
    onStart: function(){
        for(var i=0;i<30;i++){
            document.querySelector("#counter").textContent = i
        } 
    },
})

tlload.to("#t1",{
    left: "5%",
})

tlload.to("#t2",{
    left: "30%"
})
tlload.to("#t5",{
    onStart: function(){
        for(var i=30;i<60;i++){
            document.querySelector("#counter").textContent = i
        } 
    },
})


tlload.to("#t1",{
    top: "30%"
})
tlload.to("#t5",{
    onStart: function(){
        for(var i=60;i<101;i++){
            document.querySelector("#counter").textContent = i
        } 
    },
})
tlload.to(".text-load h1",{
    y: -200,
    duration: 1,
})


tlload.to("#loader-anim",{
    opacity: 0,
    top: "-100%"
})

tlload.from(".textp1 h1",{
    y: 200
})

tlload.from("#rotate-p1",{
    opacity: 0
})
tlload.from("#p1h3",{
    opacity: 0
})
tlload.from("#mousemove",{
    scale: 0
})


gsap.to("#video",{
    left: "0%",
    width: "95vw",
    top: "42%",
    duration: .01,
    scrollTrigger:{
        trigger: "#video",
        scroller: "#main",
        start: "top 74%",
        end: "bottom 90%",
        scrub: .1,
        // markers: true
    }
})



gsap.to("#video video",{
    scale: "1",
    duration: .01,
    scrollTrigger:{
        trigger: "#video",
        scroller: "#main",
        start: "top 77%",
        end: "bottom 5%",
        scrub: .1,
        // markers: true
    }
})

gsap.to("#p1h3 h3",{
    opacity: 0,
    scrollTrigger:{
        trigger: "#p1h3 h3",
        scroller: "#main",
        start: "top 85%",
        scrub: .1,
        // markers: true
    }
})

gsap.to(".move",{
    left: "45%",
    // animationDirection: "reverse",
    scrollTrigger:{
        trigger: ".move",
        scroller: "#main",
        start: "top 80%",
        scrub: 1
    },
    // x: "800",
})


var path2 = `M 10 80 Q 95 80 180 80`;
document.querySelectorAll("#string").forEach(function(Bounce){
    Bounce.addEventListener("mousemove",function(dets){
        var path2 = `M 10 100 Q 758 ${dets.clientY-550} 1426 100`;
        gsap.to("#string>svg>path",{
            attr: {d: path2},
            ease: Bounce,
            duration: .3
        })
    })
})

document.querySelectorAll("#string").forEach(function(Bounce){
     Bounce.addEventListener("mouseleave",function(){
        var path3 = `M 10 100 Q 758 100 1426 100`;
        gsap.to("#string>svg>path",{
            attr: {d: path3},
            ease: Bounce,
            duration: .2
        })
    })
})

var tl =  gsap.timeline()

tl.to("#p3-video-wrapper",{
    width: "35vw",
    height: "57vh",
    scrollTrigger:{
        trigger: "#p3-video-wrapper",
        scroller: "#main",
        start: "top 20%",
        end: "top 25%",
        scrub: 1,
        // markers: true
    }
})

tl.to("#p3-video-wrapper",{
    scrollTrigger:{
        trigger: "#p3-video-wrapper",
        scroller: "#main",
        start: "top 15%",
        end: "bottom -50%",
        pin: true,
        scrub: 1,
        // markers: true
    }
})

tl.to(".p3-video-container",{
    scale: ".6",
    scrollTrigger:{
        trigger: ".p3-video-container",
        scroller: "#main",
        start: "top 20%",
        end: "top 25%",
        scrub: 1,
        // markers: true
    }
})

// document.querySelector("#p3-overlay").addEventListener("mousemove",function(p3move){
//     document.querySelector("#p3-video-wrapper").style.left = `${p3move.x-300}px`
//     document.querySelector("#p3-video-wrapper").style.top = `${p3move.y-300}px`
// })


var tl2 = gsap.timeline()

tl2.to("#p4-video-wrapper",{
    width: "35vw",
    height: "57vh",
    x: 150,
    scrollTrigger:{
        trigger: "#p4-video-wrapper",
        scroller: "#main",
        start: "top 20%",
        end: "top 25%",
        scrub: 1,
        // markers: true
    }
})

tl2.to("#p4-video-wrapper",{
    scrollTrigger:{
        trigger: "#p4-video-wrapper",
        scroller: "#main",
        start: "top 15%",
        end: "bottom -80%",
        pin: true,
        scrub: 1,
        // markers: true
    }
})

tl2.to(".p4-video-container",{
    scale: ".6",
    scrollTrigger:{
        trigger: ".p4-video-container",
        scroller: "#main",
        start: "top 20%",
        end: "top 25%",
        scrub: 1,
        // markers: true
    }
})

gsap.to("#page5>img",{
    x: -400,
    scrollTrigger:{
        trigger: "#page5>img",
        scroller: "#main",
        start: "top 30%",
        scrub: 1,
        // markers: true
    }
})


gsap.to(".p7move1anim",{
    scrollTrigger:{
        trigger: ".p7move1anim",
        scroller: "#main",
        start: "top 60%",
        scrub: 1,
        // markers: true,
    },
    left: "45%"
})

gsap.to(".p7move2anim",{
    scrollTrigger:{
        trigger: ".p7move2anim",
        scroller: "#main",
        start: "top 60%",
        scrub: 1,
        // markers: true,
    },
    left: "-45%"
})

gsap.to(".p7move3anim",{
    scrollTrigger:{
        trigger: ".p7move3anim",
        scroller: "#main",
        start: "top 60%",
        scrub: 1,
        // markers: true,
    },
    left: "45%"
})

gsap.to(".p7move4anim",{
    scrollTrigger:{
        trigger: ".p7move4anim",
        scroller: "#main",
        start: "top 60%",
        scrub: 1,
        // markers: true,
    },
    left: "-45%"
})

gsap.from("#p10-videocontainer-1",{
    width: "0%",
    opacity: 0,
    scrollTrigger:{
        trigger: "#p10-videocontainer-1",
        scroller: "#main",
        start: "top 80%",
        // markers: true
    }
})

gsap.from("#p10-videocontainer-2",{
    width: "0%",
    opacity: 0,
    scrollTrigger:{
        trigger: "#p10-videocontainer-2",
        scroller: "#main",
        start: "top 80%",
        // markers: true
    }
})

gsap.from("#p10-videocontainer-3",{
    width: "0%",
    opacity: 0,
    scrollTrigger:{
        trigger: "#p10-videocontainer-3",
        scroller: "#main",
        start: "top 80%",
        // markers: true
    }
})


// mousemove code 

window.addEventListener("mousemove",function(dets){
    gsap.to("#mousemove",{
        top : `${dets.y}px`,
        left : `${dets.x}px`
    })
    // document.querySelector("#mousemove").style.
    // document.querySelector("#mousemove").style.
})


// window.addEventListener("mousemove",function(dets){
//     document.querySelector("#mousemove").style.top = `${dets.y}px`
//     document.querySelector("#mousemove").style.left = `${dets.x}px`
// })

document.querySelector("#page1").addEventListener("mouseenter",function(){
    document.querySelector("#mousemove").style.backgroundColor = "#FFFFFF"
})

document.querySelector("#page2").addEventListener("mouseenter",function(){
    document.querySelector("#mousemove").style.backgroundColor = "black"
})

document.querySelector("#page3").addEventListener("mouseenter",function(){
    document.querySelector("#mousemove").style.backgroundColor = "#FFFFFF"
})
document.querySelector("#page3-down").addEventListener("mouseenter",function(){
    document.querySelector("#mousemove").style.backgroundColor = "black"
})


document.querySelector("#page4").addEventListener("mouseenter",function(){
    document.querySelector("#mousemove").style.backgroundColor = "black"
})

document.querySelector("#page5").addEventListener("mouseenter",function(){
    document.querySelector("#mousemove").style.backgroundColor = "black"
})

document.querySelector("#page6").addEventListener("mouseenter",function(){
    document.querySelector("#mousemove").style.backgroundColor = "#FFFFFF"
})

document.querySelector("#page7").addEventListener("mouseenter",function(){
    document.querySelector("#mousemove").style.backgroundColor = "#FFFFFF"
})

document.querySelector("#page8").addEventListener("mouseenter",function(){
    document.querySelector("#mousemove").style.backgroundColor = "#FFFFFF"
})

document.querySelector("#page9").addEventListener("mouseenter",function(){
    document.querySelector("#mousemove").style.backgroundColor = "#FFFFFF"
})

document.querySelector("#page10").addEventListener("mouseenter",function(){
    document.querySelector("#mousemove").style.backgroundColor = "black"
})

document.querySelector("#page11").addEventListener("mouseenter",function(){
    document.querySelector("#mousemove").style.backgroundColor = "black"
})

document.querySelector("#page12").addEventListener("mouseenter",function(){
    document.querySelector("#mousemove").style.backgroundColor = "#FFFFFF"
})

document.querySelector("#page13").addEventListener("mouseenter",function(){
    document.querySelector("#mousemove").style.backgroundColor = "#FFFFFF"
})


document.querySelector("#menui").addEventListener("mouseenter",function(){
    this.style.backgroundColor = "white"
    this.style.color = "black"
})

document.querySelector("#menui").addEventListener("mouseleave",function(){
    this.style.backgroundColor = "transparent"
    this.style.color = "white"
})

