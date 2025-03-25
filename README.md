# Random Quote Generator

## Description
This is a simple JavaScript-based Random Quote Generator that displays a new quote each time a button is clicked.

## Features
- Displays a random quote from a predefined list.
- Allows users to generate new quotes dynamically.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/MuhammadTalha15/RandomQuoteGenerator.git
   ```
2. Navigate to the project folder:
   ```sh
   cd RandomQuoteGenerator
   ```
3. Open `index.html` in a web browser.

## Usage
Click the "Generate Quote" button to display a new random quote.

## Code
### HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
</head>

<body>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />

    <div id="wrapper">
        <div id="quote-box">
            <div class="quote-text">
                <i class="fa fa-quote-left"> </i><span id="text"></span>
            </div>
            <div class="quote-author">- <span id="author"></span></div>
            <div class="buttons">
                <a class="button" id="tweet-quote" title="Tweet this quote!" target="_top">
                    <i class="fa fa-twitter"></i>
                </a>
                <a class="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
                    <i class="fa fa-tumblr"></i>
                </a>
                <button class="button" id="new-quote">New quote</button>
            </div>
        </div>
        <div class="footer">by <a href="#">Muhammad Talha</a></div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js"></script>
    
    <script src="main.js"></script>
</body>

</html>
```

### JavaScript (script.js)
```javascript
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
```

## License
This project is licensed under the MIT License.
