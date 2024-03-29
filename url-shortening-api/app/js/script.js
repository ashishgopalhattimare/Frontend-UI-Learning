document.addEventListener('DOMContentLoaded', function() {
    console.log('loaded script.js');
});

const FADE_CLASSES = {
    fadeIn: 'fade-in',
    fadeOut: 'fade-out',
    hasFade: 'has-fade'
}

// Container
const body$ = document.getElementById('body');
const header$ = $('#header');
const hasFadeOverlayList = document.querySelectorAll(`.${FADE_CLASSES.hasFade}`);
const overlay$ = hasFadeOverlayList[0];

const includeTags = $('include');
for(let tag of includeTags) {
    const htmlLink = tag.attributes['src'].value;
    
    fetch(htmlLink, { cache: "no-store" })
    .then(response => response.text())
    .then(html => {
        tag.innerHTML = html;
    });
}

// Button
const hambugerButton$ = document.getElementById('hambugerButton');
const headerMenuItemList = document.querySelectorAll('.header__menu > .menu-item');

hambugerButton$.addEventListener('click', () => {
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

        body$.classList.remove('no-scroll');  // Enable body scrolling
    }
    else {
        hasFadeOverlayList.forEach(x => { // open the overlay
            x.classList.remove(FADE_CLASSES.fadeOut);
            x.classList.add(FADE_CLASSES.fadeIn);
        });
        
        // body$.classList.add('no-scroll'); // Disable body scrolling
    }
}

// Button Event handling
headerMenuItemList.forEach(menuButton => {
    menuButton.addEventListener('click', _ => {
        openCloseOverlayMenu();
    });
});