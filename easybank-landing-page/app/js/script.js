document.addEventListener('DOMContentLoaded', function() {
    console.log('loaded');
});

const header$ = $('#header');
const overlay$ = $('#overlay');

$('#hamburgerButton').on("click", () => {
    header$.toggleClass('header__hamburger__open');

    if (classInClassNameList(overlay$[0], 'fade-in')) {
        overlay$.removeClass('fade-in');
        overlay$.addClass('fade-out');
    }
    else {
        overlay$.removeClass('fade-out');
        overlay$.addClass('fade-in');
    }
});

function classInClassNameList(object, property) {
    return object.classList.contains(property);
}