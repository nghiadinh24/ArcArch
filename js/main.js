document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!
// lenis

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// preloader
const heroTitle = new SplitType("#heroTitle",{type:"words"});
const heroWords = heroTitle.words;
const tl_preloader = gsap.timeline();

tl_preloader
.fromTo(
    heroWords,
    {
        y:-60,
        opacity:0,
    },
    {
        y:0,
        opacity: 1,
        stagger: 0.2,
        delay: 0.2,
        duration: 1,
        ease: "power3.out",
    }
)

.fromTo(".nav-brand",{
    y: -60,
    opacity: 0,
},
{
    y:0,
    opacity:1,
    duration: 1,
    ease: "power3.out",
})
.fromTo(".nav-link",{
    y: -60,
    opacity: 0,
},
{
    y:0,
    opacity:1,
    stagger: 0.2,
    delay: 0.2,
    duration: 1,
    ease: "power3.out",
},"-=1");
// exclusive-section
const exTitle = new SplitType ("#exTitle",{type:"words"});
const exWords = exTitle.words;
const exDescription = new SplitType ("#exDescription",{type:"lines"});
const exdesLines = exDescription.lines;
const exTl = gsap.timeline();
exTl
.fromTo(
    exWords,{
        y: 60,
        opacity: 0,
    },
    {
        y:0,
        opacity: 1,
        stagger: 0.2,
        delay: 0.2,
        duration: 0.5,
        ease: "power3.out",
    }
)
.fromTo (
    exdesLines,{
        y: 60,
        opacity: 0,
    },
    {
        y:0,
        opacity: 1,
        stagger: 0.2,
        delay: 0.2,
        duration: 0.5,
        ease: "power3.out",
    },"-=1"
);
ScrollTrigger.create ({
    trigger: ".exclusive-section",
    animation: exTl,
    markers: false,
    start: "top center",
    end: "center center",
    scrub: 2,
})
const exImg = gsap.fromTo (".exclusive-img-wrap",{
    x: 200,
    opacity: 0,
},
{
    x: 0,
    opacity: 1,
    duration: 0.5,
    ease: "power3.out",
})
ScrollTrigger.create ({
    trigger: ".exclusive-section",
    animation: exImg,
    start: "30% center",
    end: "80% center",
    scrub: 1,
    markers: false,
});
// gallery-section

const galleryTitle = new SplitType("#galleryTitle",{type: "words"});
const galtitleWords = galleryTitle.words;
const galleryDescription = new SplitType ("#galleryDescription",{type: "lines"});
const galdesLines = galleryDescription.lines;
const galleryTl = gsap.timeline();

galleryTl
.fromTo(
    galtitleWords,
    {
        y: 60,
        opacity: 0,
    },
    {
        y:0,
        opacity:1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.1,
    }
)
.fromTo(
    galdesLines,
    {
        y: 60,
        opacity: 0,
    },
    {
        y:0,
        opacity:1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.1,
    },
    "-=1"
)
.fromTo("#galleryBtn",{
    x: -60,
    opacity: 0,
},
{
    x:0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
},"-=1"
)
.fromTo(".gallery-img-wrap",{
    y: 60,
    opacity: 0,
},
{
    y:0,
    opacity: 1,
    ease: "power3.out",
    duration: 1,
    stagger: 0.2,
    delay: 0.1,
},"=-1")
ScrollTrigger.create ({
    trigger: ".gallery-section",
    markers: false,
    animation: galleryTl,
    start: "top center",
    end: "60% center",
    scrub: 1,
});

// last-section

const lastTitle = new SplitType("#lastTitle",{type:"words"});
const lasttitleWords = lastTitle.words;
const lastDescription = new SplitType("#lastDescription",{type:"lines"});
const LastdescLines = lastDescription.lines;
const lastTl = gsap.timeline();

lastTl
.fromTo(lasttitleWords,{
    y: 60,
    opacity: 0,
},
{
    y:0,
    opacity:1,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    delay: 0.1,
})
.fromTo(LastdescLines,{
    y: 60,
    opacity: 0,
},
{
    y:0,
    opacity:1,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    delay: 0.1,
},"=-1")
.fromTo(".last-img-row",{
    y: 60,
    opacity: 0,
},
{
    y:0,
    opacity:1,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    delay: 0.1,
},"=-1")
ScrollTrigger.create ({
    trigger: ".last-section",
    markers: true,
    animation: lastTl,
    start: "top center",
    end: "60% center",
    scrub: 1,
})
   });