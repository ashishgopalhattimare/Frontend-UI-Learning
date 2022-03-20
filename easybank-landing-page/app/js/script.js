document.addEventListener('DOMContentLoaded', function() {
    console.log('loaded');
});

const hamburgerButton$ = $('#hamburgerButton');

hamburgerButton$.on("click", () => {
    hamburgerButton$.toggleClass('header__hamburger__open');
})