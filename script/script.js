$(document).ready(function () {

    $(window).on('scroll', function () {
        let scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('.sticky').addClass('stickyadd');
        } else {
            $('.sticky').removeClass('stickyadd');
        }
    })

    let typed = new Typed('.element', {
        strings: ["I'm tarot reader.", "In here, you can see your future.", "Ideas and designs based on Bui Nhoc Ha."],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDeplay: 1000
    })

    $('.carousel').carousel({
        interval: 1000
    });

    particlesJS.load('particles-js', 'js/particles.json', function () {
        interactivity.events.onhover.mode = ["grab"];
    });
})