const timeId = document.getElementById("timer");
const scoreId = document.getElementById("score");
const fscore = document.getElementById("finalscore");

const doneId = document.getElementById("done");
const missId = document.getElementById("miss");

const front = document.getElementById("front-card");
const back = document.getElementById("back-card");

const refresh = document.getElementById("refresh");

let timer, seconds, score;
let word, ilist, index;
let list = ["start"];

const logFileText = async file =>
{
    const response = await fetch(file)
    const text = await response.text()

    list = list.concat(text.split(" "))
}

function start()
{
    ilist = index = score = 0;
    seconds = 60;

    missId.innerText = list[ilist].toLowerCase();
    word = list[ilist].toLowerCase();

    timer = setInterval(() => {
        timeId.innerText = seconds--;

        if(seconds < 0) {
            clearInterval(timer);

            front.classList.toggle("hide");
            back.classList.toggle("hide");
            fscore.innerText = score;
        }
    }, 1000);
}

refresh.addEventListener("click", (event) => {
    console.log('scsad');

    front.classList.toggle("hide");
    back.classList.toggle("hide");
    start();
});

function updateWord(char)
{
    if(word[index] === char) {
        doneId.innerText = word.substr(0, index+1);
        missId.innerText = word.substr(index+1);

        if(word.length === ++index) {

            scoreId.innerText = ++score;

            ilist++;
            if(ilist < list.length) {
                missId.innerText = list[ilist].toLowerCase();
                word = list[ilist].toLowerCase();
                doneId.innerText = "";
                index = 0;
            }
            else {
                doneId.innerText = "";
                clearInterval(timer);
            }
        }
    }
}

document.addEventListener("keyup", function (event) {
    updateWord(event.key);
}, false);


document.addEventListener('DOMContentLoaded', function() {

    logFileText('dictionary.txt');
    start();
});