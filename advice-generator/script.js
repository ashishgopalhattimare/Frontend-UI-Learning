document.addEventListener('DOMContentLoaded', function() {
    fetchAdvice();
});

const adviceUrl = 'https://api.adviceslip.com/advice';
const adviceText = $('#advice-text');
const headerText = $('#header-text');

$("#dice-button").on("click", function( event ) {
    fetchAdvice();
});

function fetchAdvice() {
    fetch(adviceUrl, {
        cache: "no-store"
    })
    .then((response) => response.json())
    .then((data) => {
        const content = data.slip;

        setHeaderText(content.id);
        setAdviceText(content.advice);
    });
}

function setHeaderText(adviceNo) {
    headerText.text(`Advice #${adviceNo}`);
};
function setAdviceText(adviceContent) {
    adviceText.text(adviceContent);
};

