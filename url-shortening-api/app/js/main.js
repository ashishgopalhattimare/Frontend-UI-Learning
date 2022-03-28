setTimeout(() => {
    const shortenButton$ = $('#shortenButton');
    const shortenLink$ = document.getElementById('shortenLink');
    const shortenHistory$ = document.getElementById('shorten_history');

    const shortenHistoryList$ = document.getElementsByClassName('shorten_history__list')[0];
    
    console.log(shortenHistoryList$);

    // shortenHistoryList$.appendChild()

    shortenButton$.click(() => {
        const inputLink = shortenLink$.value;
        generateShortenUrl(inputLink, shortenHistory$, shortenHistoryList$);
    });
}, 2500);

function generateShortenListItem(originalLink, shortenLink) {
    const listItem = document.createElement("li");
    listItem.classList = 'shorten_history__list_item flex flex-col';
    listItem.innerHTML =
    `
    <span class="original-link">${originalLink}</span>
    <span class="separator"></span>
    <span class="shortened-link">${shortenLink}</span>
    <button class="shorten-copy-btn border-rounded">Copy</button>
    `
    return listItem;
}

function generateShortenUrl(inputLink, shortenHistory$, shortenHistoryList$) {
    fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink}`)
    .then(response => response.json())
    .then(x => x.result)
    .then(data => {
        shortenHistory$.classList.remove('is-hidden');
        shortenHistoryList$.appendChild(
            generateShortenListItem(data.original_link, data.share_link)
        );
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