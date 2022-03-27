setTimeout(() => {
    const shortenButton$ = document.getElementById('shortenButton');
    console.log(shortenButton$);
    shortenButton$.addEventListener('click', () => {
        console.log('clicked');
    });
}, 5000);