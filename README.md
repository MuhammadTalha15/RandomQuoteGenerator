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
    <title>Random Quote Generator</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin: 50px; }
        #quote { font-size: 1.5em; margin: 20px; }
        button { padding: 10px 20px; font-size: 1em; }
    </style>
</head>
<body>
    <h1>Random Quote Generator</h1>
    <p id="quote">Click the button to generate a quote!</p>
    <button onclick="generateQuote()">Generate Quote</button>
    <script src="script.js"></script>
</body>
</html>
```

### JavaScript (script.js)
```javascript
const quotes = [
    "The best way to predict the future is to invent it.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Fix the cause, not the symptom.",
    "Simplicity is the soul of efficiency.",
    "Make it work, make it right, make it fast."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}
```

## License
This project is licensed under the MIT License.
