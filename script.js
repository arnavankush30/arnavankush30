<<<<<<< HEAD
var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});

tl.from("#line1-part1", {
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector("#line1-part1 h5");

    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        grow++;
        h5timer.innerHTML = grow++;
        console.log("grow");
      } else {
        h5timer.innerHTML = grow;
      }
    }, 45);
  },
});
tl.to(".line h2", {
  animationName: "anime",
  opacity: 1,
});
tl.to("#loader", 1, {
  opacity: 0,
  duration: 0.2,
  delay: 2.5,
});

tl.from("#page1", {
  delay: 0.2,
  y: 1600,
  opacity: 0,
  duration: 0.5,
  ease: Power4,
});

tl.to("#loader", {
  display: "none",
});
=======
function valueSetters(){
    gsap.set("#nav a", {
        y:"-100%", 
        opacity:0,
    });
    gsap.set("#home span .child", {
        y:"100%"
    });
    gsap.set("#home .row img", { opacity:0})

}

function revealToSpan(){
    document.querySelectorAll(".reveal").forEach(function(elem){
        let parent = document.createElement("span");
        let child = document.createElement("span");
    
        parent.classList.add("parent");
        child.classList.add("child");
    
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);
    
        elem.innerHTML = "";
        elem.appendChild(parent);
    });
}

function loaderAnimation(){
    let tl = gsap.timeline();

tl
.from("#loader .child span",{
    x:100,
    duration:2,
    stagger: .2,
    ease:Power3.easeInOut
})

.to("#loader .parent .child",{
    y:"-150",
    duration:1.5,
    ease:Circ.easeInOut
})

.to("#loader",{
    height: 0,
    duration:1.5,
    ease:Circ.easeInOut
})

.to("#green",{
    height: "100%",
    top:0,
    delay:-1.5,
    duration:1,
    ease:Circ.easeInOut
})
.to("#green",{
    height: 0,
    top:0,
    delay:-.5,
    duration:1,
    ease:Circ.easeInOut,
    onComplete:function(){
        animationHomePage();
    }
})
}

function animationHomePage(){
    
    let tl = gsap.timeline();

    tl
    .to("#nav a", {
        y:0,
        opacity:4,
        stagger:.05,
        ease: Expo.easeInOut,
    })

    .to("#home .parent .child", {
        y:0,
        stagger:.1,
        duration:2,
        ease: Expo.easeInOut,
    })
    .to("#home .row img", {
        opacity:1,
        duration:3,
        ease: Expo.easeInOut
    })
}

revealToSpan();
valueSetters();
loaderAnimation();






>>>>>>> origin/main
