
let projectName = 'Random-Quote-Generator'
let quotesData;

let colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];

let currentQuote = '';
let currentAuthor = '';
let quoteUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

const getQuotes = async () => {
    try {

        const response = await fetch(quoteUrl, {
            headers: {
                'Accept': 'application/json',
            },
        });

        const jsonQuotes = await response.json();

        if (typeof jsonQuotes === 'object') {
            quotesData = jsonQuotes;
            console.log(quotesData);
        }
    } catch (error) {
        console.log('Error while Fetching', error);
    }
}

const getRandomQuote = () => {
    if (!quotesData) {
        console.log('Quotes data is not loaded yet.');
        return;
    }
    return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
}

const getQuote = async () => {
    await getQuotes();
    let randomQuote = getRandomQuote();

    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;

    document.getElementById('tweet-quote').setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor))
    document.getElementById('tumblr-quote').setAttribute(
        'href',
        'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
        encodeURIComponent(currentAuthor) +
        '&content=' +
        encodeURIComponent(currentQuote) +
        '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
    );

    const fadInOut = (element, text, selector) => {
        element.style.transition = 'opacity 0.5s ease-in-out';
        element.style.opacity = 0;

        setTimeout(() => {
            document.querySelector(selector).textContent = text;
            element.style.opacity = 1;
        }, 500);
    }

    const quoteTextElement = document.querySelector('.quote-text');
    const quoteAuthorElement = document.querySelector('.quote-author');

    fadInOut(quoteTextElement, randomQuote.quote, '#text');
    fadInOut(quoteAuthorElement, randomQuote.author, '#author');

    let color = Math.floor(Math.random() * colors.length);

    $('html body').animate(
        {
            backgroundColor: colors[color],
            color: colors[color]
        },
        1000
    );
    $('.button').animate(
        {
            backgroundColor: colors[color]
        },
        1000
    );
}

const quoteBtn = document.getElementById('new-quote');

document.addEventListener('DOMContentLoaded', () => {
    getQuotes().then(() => {
        getQuote();
    })
})

quoteBtn.addEventListener('click', getQuote);