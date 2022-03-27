setTimeout(() => {
    const shortenButton$ = $('#shortenButton');
    const shortenLink$ = document.getElementById('shortenLink');

    shortenButton$.click(() => {
        const inputLink = shortenLink$.value;
        generateShortenUrl(inputLink);
    });
}, 2500);

function generateShortenUrl(inputLink) {
    fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(ex => console.log(ex));
}

/*
{
    code: "ofvAtX"​,
    full_share_link: "https://shrtco.de/share/ofvAtX",
    full_short_link: "https://shrtco.de/ofvAtX",
    full_short_link2: "https://9qr.de/ofvAtX",
    full_short_link3: "https://shiny.link/ofvAtX",
    original_link: "http://amazon.com",
    share_link: "shrtco.de/share/ofvAtX",
    short_link: "shrtco.de/ofvAtX",
    short_link2: "9qr.de/ofvAtX",
    short_link3: "shiny.link/ofvAtX"
}
*/