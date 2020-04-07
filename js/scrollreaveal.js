$(function() {
    $('#hamburger-icon').click(function() {

        $('#hamburger-icon').fadeOut();
        $('#login-modal').fadeIn();

    });

    $('#close-icon').click(function() {
        $('#login-modal').fadeOut();
        $('#hamburger-icon').fadeIn();
    });
});

// ScrollReveal().reveal('.content', {
//     duration: 3000,
//     origin: 'right',
//     distance: '100px',
//     reset: true
// });

ScrollReveal().reveal('section', {
    duration: 3500,
    origin: 'bottom',
    distance: '100px',
    reset: true
});

// ScrollReveal().reveal('content', {
//     duration: 3000,
//     origin: 'bottom',
//     distance: '100px',
//     reset: true
// });
