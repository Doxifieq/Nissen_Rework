$(function() {
    $('body').flurry({
        character: ["❄"],
        color: "white",
        height: 400,
        frequency: 60,
        speed: 3000,
        small: 8,
        large: 28,
        windVariance: 20,
        rotation: 0,
        rotationVariance: 90
    });

    new Rellax('.rellax');

    ScrollReveal().reveal('.media-object-wrapper img', {distance: '15%', origin: 'left', opacity: 0, duration: 1000, delay: 250, easing: 'ease-out', cleanup: true})
    ScrollReveal().reveal('.media-object-wrapper div', {distance: '15%', origin: 'right', opacity: 0, duration: 1000, delay: 250, easing: 'ease-out', cleanup: true})

    ScrollReveal().reveal('.media-object-wrapper.reverse img', {distance: '15%', origin: 'right', opacity: 0, duration: 1000, delay: 250, easing: 'ease-out', cleanup: true})
    ScrollReveal().reveal('.media-object-wrapper.reverse div', {distance: '15%', origin: 'left', opacity: 0, duration: 1000, delay: 250, easing: 'ease-out', cleanup: true})

    ScrollReveal().reveal('.grid article', {distance: '25%', origin: 'top', opacity: 0, duration: 1000, interval: 100, easing: 'ease', cleanup: true})

    ScrollReveal().reveal('footer', {distance: '100%', origin: 'top', opacity: 0, duration: 1000, easing: 'ease', cleanup: true})

    ScrollReveal().reveal('.moon', {distance: '100%', origin: 'bottom', opacity: 0, duration: 1200, delay: 500, easing: 'ease', cleanup: true})
    ScrollReveal().reveal('.mountain-3', {distance: '10%', origin: 'left', opacity: 0, duration: 1000, delay: 500, easing: 'ease', cleanup: true})
    ScrollReveal().reveal('.mountain-2', {distance: '10%', origin: 'right', opacity: 0, duration: 1000, delay: 500, easing: 'ease', cleanup: true})
    ScrollReveal().reveal('.santa', {distance: '25%', origin: 'left', opacity: 0, duration: 2000, delay: 500, easing: 'ease', cleanup: true})
    ScrollReveal().reveal('.tree', {distance: '100%', origin: 'bottom', opacity: 0, duration: 1500, easing: 'ease', cleanup: true})
    ScrollReveal().reveal('.village', {distance: '100%', origin: 'bottom', opacity: 0, duration: 1000, easing: 'ease', cleanup: true})
});

$(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
        $('header').addClass('active');
    } else {
        $('header').removeClass('active')
    }
});