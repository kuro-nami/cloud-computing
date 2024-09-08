// lenis
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// GSAP
function box1click() {
    gsap.to('#box1', {
        x: 500,
        duration: 1,
        backgroundColor: '#181818',
        borderRadius: '50%',
        scale: 2,
    })
}

gsap.from('.box-animation-stagger', {
    x: -60,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    rotate: 360,
    repeat: -1,
    yoyo: true,
});

gsap.from('h1', {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: -1,
});

gsap.fromTo('.staggered-boxes', {
    x: -60,
    opacity: 0,
    duration: 1,
    ease: 'back.out',
},
    {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
    });

gsap.from('.nabeel-span', {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    yoyo: true,
    scrollTrigger: {
        trigger: '#nabeel-section', // The section that triggers the animation
        start: 'top center' // Customize when the trigger should start
    },
    toggleActions: 'play pause reverse pause',
})