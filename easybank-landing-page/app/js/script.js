document.addEventListener('DOMContentLoaded', function() {
    console.log('loaded');
});

const FADE_CLASSES = {
    hasFade: 'has-fade',
    fadeIn: 'fade-in',
    fadeOut: 'fade-out'
};

const hasFadeOverlayList = document.querySelectorAll(`.${FADE_CLASSES.hasFade}`);
const overlay$ = hasFadeOverlayList[0];
const header$ = $('#header');

const headerMenuItemList = document.querySelectorAll('.header__menu > .menu-item');

$('#hamburgerButton').on("click", () => {
    openCloseOverlayMenu();
});

function classInClassNameList(object, property) {
    return object.classList.contains(property);
}

function openCloseOverlayMenu() {
    header$.toggleClass('header__hamburger__open');

    if (classInClassNameList(overlay$, 'fade-in')) {
        hasFadeOverlayList.forEach(x => {
            x.classList.remove(FADE_CLASSES.fadeIn);
            x.classList.add(FADE_CLASSES.fadeOut);
        });
    }
    else {
        hasFadeOverlayList.forEach(x => {
            x.classList.remove(FADE_CLASSES.fadeOut);
            x.classList.add(FADE_CLASSES.fadeIn);
        });
    }
}

// Button Event handling
headerMenuItemList.forEach(menuButton => {
    menuButton.addEventListener('click', _ => {
        console.log('menu item clicked');
        openCloseOverlayMenu();
    });
})