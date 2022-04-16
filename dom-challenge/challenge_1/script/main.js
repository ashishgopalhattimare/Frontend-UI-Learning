function Star(el, count, callback) {
    // Write a logic to create star rating problem

    const star$ = document.querySelector(el);
    const starContent$ = document.createDocumentFragment();

    star$.addEventListener('mouseleave', () => {
        fill(-1);
    });

    for (let i = 0; i < count; ++i) {
        let _star = document.createElement('i');
        _star.classList.add('fa', 'fa-star-o', 'cursor');
        _star.addEventListener('click', (event) => {
            callback(`${i + 1}`);
            fill(i);
        });
        _star.addEventListener('mouseover', () => {
            fill(i);
        });

        starContent$.appendChild(_star);
    }

    function fill(index) {
        const _children = star$.children;
        for (let i = 0; i < _children.length; ++i) {
            if (i <= index) {
                _children[i].classList.add('fa-star');
                _children[i].classList.remove('fa-star-o');
            } else {
                _children[i].classList.remove('fa-star');
                _children[i].classList.add('fa-star-o');
            }
        }
    }

    star$.appendChild(starContent$);
}

function getStar(value) {
    document.getElementById("display-star").innerHTML = value;
}

new Star("#star", 5, getStar);
