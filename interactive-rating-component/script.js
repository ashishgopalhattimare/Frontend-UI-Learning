class RatingComponent {
    rating = -1;
    RatingComponent() {}

    setRating(rating) {
        this.rating = rating;
    }
    getRating() {
        return this.rating;
    }
    reset() {
        if (this.rating !== -1) {
            document.getElementsByClassName('rating-item')[this.rating - 1]
            .classList.remove('rating-selected');
        } 
        this.rating = -1;
    }
}

let ratingComponent = new RatingComponent();

document.addEventListener('DOMContentLoaded', function() {
    console.log('UI loaded');
});

const ratingItemList = document.getElementsByClassName('rating-item');
for(let i = 0; i < ratingItemList.length; ++i) {
    ratingItemList[i].addEventListener('click', function(event) {

        if (ratingComponent.getRating() != -1) {
            ratingItemList[ratingComponent.getRating()-1].classList.remove('rating-selected');
        }

        ratingComponent.setRating(i+1);
        ratingItemList[i].classList.add('rating-selected');
    });
}

document.getElementById('rating-submit').addEventListener('click', function(event) {
    showCardBack();
    document.getElementById('rating-result-label').textContent = `You selected ${ratingComponent.getRating()} out of 5`;

    setTimeout(() => {
        showCardFront();
        ratingComponent.reset();
    }, 2500);
});

function showCardBack() {
    document.getElementById('card-front').style.display = 'none';
    document.getElementById('card-back').style.display = 'inline';
}
function showCardFront() {
    document.getElementById('card-front').style.display = 'inline';
    document.getElementById('card-back').style.display = 'none';
}