gsap.registerPlugin(ScrollTrigger);

// ----------------------------------
// SplitType
// ----------------------------------

document.querySelectorAll(".split").forEach(el=>{

new SplitType(el,{
types:"lines,words"
});

});

// ----------------------------------
// Hero
// ----------------------------------

const hero = gsap.timeline();

hero

.to(".hero-title .line span",{

y:0,

opacity:1,

duration:1.2,

stagger:.08,

ease:"power4.out"

})

.to(".hero-copy",{

y:0,

opacity:1,

duration:1,

ease:"power3.out"

},"-=.6")

.from(".vertical-tag",{

x:50,

opacity:0,

duration:1

},"-=1");

// ----------------------------------
// Scroll Reveals
// ----------------------------------

gsap.utils.toArray(".reveal").forEach(item=>{

gsap.to(item,{

opacity:1,

y:0,

duration:1,

ease:"power3.out",

scrollTrigger:{

trigger:item,

start:"top 85%"

}

});

});

// ----------------------------------
// Numbers
// ----------------------------------

gsap.utils.toArray(".section-number").forEach(item=>{

gsap.to(item,{

opacity:1,

x:0,

duration:1,

ease:"power4.out",

scrollTrigger:{

trigger:item,

start:"top 90%"

}

});

});

// ----------------------------------
// Headlines
// ----------------------------------

gsap.utils.toArray(".split").forEach(title=>{

gsap.to(title.querySelectorAll(".word"),{

y:0,

opacity:1,

duration:1,

stagger:.015,

ease:"power4.out",

scrollTrigger:{

trigger:title,

start:"top 80%"

}

});

});

// ----------------------------------
// Hero Parallax
// ----------------------------------

gsap.to(".hero-image img",{

scale:1,

ease:"none",

scrollTrigger:{

trigger:".hero",

scrub:true,

start:"top top",

end:"bottom top"

}

});

// ----------------------------------
// Image Reveal
// ----------------------------------

gsap.to(".image-break img",{

scale:1,

scrollTrigger:{

trigger:".image-break",

scrub:true,

start:"top bottom",

end:"bottom top"

}

});

// ----------------------------------
// Quote Image
// ----------------------------------

gsap.to(".quote-image img",{

scale:1,

scrollTrigger:{

trigger:".quote",

scrub:true,

start:"top bottom",

end:"bottom top"

}

});

// ----------------------------------
// Floating Quote
// ----------------------------------

gsap.to(".quote-copy",{

y:-80,

ease:"none",

scrollTrigger:{

trigger:".quote",

scrub:true

}

});

// ----------------------------------
// Vertical Tag
// ----------------------------------

gsap.to(".vertical-tag",{

y:220,

ease:"none",

scrollTrigger:{

trigger:".hero",

scrub:true

}

});

gsap.utils.toArray(".number").forEach(el=>{

const value=parseFloat(el.dataset.value);

ScrollTrigger.create({

trigger:el,

start:"top 80%",

once:true,

onEnter(){

gsap.fromTo(

el,

{innerHTML:0},

{

innerHTML:value,

duration:2,

snap:{innerHTML:0.1},

ease:"power3.out"

}

);

}

});

});