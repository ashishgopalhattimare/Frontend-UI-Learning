document.addEventListener('DOMContentLoaded', function() {
    console.log('loaded');
});

const header$ = $('#header');

$('#hamburgerButton').on("click", () => {
    header$.toggleClass('header__hamburger__open');
})