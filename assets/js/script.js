// Background Animation
function randomValues() {
    anime({
        targets: '.square, .circle, .triangle',
        translateX: () => anime.random(-window.innerWidth / 2, window.innerWidth / 2),
        translateY: () => anime.random(-window.innerHeight / 2, window.innerHeight / 2),
        rotate: () => anime.random(0, 360),
        scale: () => anime.random(0.5, 2),
        duration: 3000,
        easing: 'easeInOutQuad',
        complete: randomValues,
    });
}

randomValues();
