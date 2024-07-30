const quotes = [
    '"The purpose of our lives is to be happy." - Dalai Lama',
    '"Life is what happens when you\'re busy making other plans." - John Lennon',
    '"Get busy living or get busy dying." - Stephen King',
    '"You only live once, but if you do it right, once is enough." - Mae West',
    '"Many of life\'s failures are people who did not realize how close they were to success when they gave up." - Thomas A. Edison'
];

let previousIndex = null;

function generateQuote() {
    const quoteElement = document.getElementById('quote');
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === previousIndex);

    previousIndex = randomIndex;
    quoteElement.innerHTML = quotes[randomIndex]; // Use innerHTML to display quotes with HTML entities
}

function showTooltip(event) {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'block';
}

function moveTooltip(event) {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}

