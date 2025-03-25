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

## License
This project is licensed under the MIT License.
