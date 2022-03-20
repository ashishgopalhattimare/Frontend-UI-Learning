document.addEventListener('DOMContentLoaded', function() {
    console.log('uploaded');
});

class Splitter {
    constructor() {
        this.reset();
    }
    reset() {
        this.tipPercent = 0;
        this.bill = 0;
        this.peopleCount = 0;
    }
    setBill(bill) {
        console.log('Bill : ', bill);
        this.bill = bill;
    }
    setPeopleCount(count) {
        console.log('people count : ', count);
        this.peopleCount = count;
    }
    setTipPercent(percent) {
        console.log('tip percent : ', percent);
        this.tipPercent = percent;
    }
}

function formatToDecimal(number, decimal) {
    return number.toFixed(decimal);
}
function getPercentageValue(text) {
    return +text.substr(0,text.indexOf('%'));
}
function setInputValue(input, val) {
    input.val(val);
}
function setTextValue(text, val) {
    text.text(val);
};


// GET HTML ELEMENTS
const totalAmountPerPerson$ = $('#totalAmountPerPerson');
const tipAmountPerPerson$ = $('#tipAmountPerPerson');

const billInput$ = $('#bill-input');
const peopleInput$ = $('#people-input');
const resetButton$ = $('#resetButton');

const customTipButton$ = $('#custom-tip-button');
const defaultTipButtons$ = $('.tip-button.default')

const splitter = new Splitter();

function calculateBill(bill, tip, peopleCount) {

    if (!peopleCount) {
        setTextValue(totalAmountPerPerson$, `$0`);
        setTextValue(tipAmountPerPerson$, `$0`);
        
        return;
    }

    const tipOnBill = bill * (tip/100.0);
    const totalBill = bill + tipOnBill;

    setTextValue(tipAmountPerPerson$, `$${formatToDecimal(tipOnBill / peopleCount, 2)}`);
    setTextValue(totalAmountPerPerson$, `$${formatToDecimal(totalBill / peopleCount, 2)}`);
}

resetButton$.on('click', _ => resetForm());

peopleInput$.on('change', (event) => {
    const value = +event.target.value;
    if (value >= 0) {
        splitter.setPeopleCount(value);

        calculateBill(splitter.bill, splitter.tipPercent, splitter.peopleCount);
    }
});

billInput$.on('change', (event) => {
    const value = +event.target.value;
    if (value >= 0) {
        splitter.setBill(value);

        calculateBill(splitter.bill, splitter.tipPercent, splitter.peopleCount);
    }
});

for(const button of defaultTipButtons$) {
    button.addEventListener('click', _ => {
        splitter.setTipPercent(getPercentageValue(button.innerText));

        calculateBill(splitter.bill, splitter.tipPercent, splitter.peopleCount);
    })
}

function resetForm() {
    splitter.reset();
    setInputValue(billInput$, '');
    setInputValue(peopleInput$, '');

    calculateBill(0,0,0);
}