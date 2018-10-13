// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
const quotes = [{
  quote: "Your time is limited, so don't waste it living someone else's life.",
  source: "Steve Jobs",
  citation: "Stanford Commencement",
  year: "2005",
  tags: "tech"
},
{
  quote: "People don’t buy WHAT you do, they buy WHY you do it.",
  source: "Simon Sinek",
  citation: "TED",
  year: "2009",
  tags: "business"
},
{
  quote: "I believe in my heart I'm the best player in the world.",
  source: "Allen Iverson",
  citation: "NBA",
  year: "",
  tags: "sports"
},
{
  quote: "People don't care about what you say, they care about what you build.",
  source: "Mark Zuckerberg",
  citation: "interview with ABC's Diane Sawyer",
  year: "2010",
  tags: "tech"
},
{
  quote: "If you are born poor its not your mistake, But if you die poor its your mistake.",
  source: "Bill Gates",
  citation: "",
  year: "",
  tags: "business"
},
{
  quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
  source: "Patrick McKenzie",
  citation: "Twitter",
  year: "2016",
  tags: "Business"
}
];

//Create background-color arrays
const bgColors = ["Indigo","Crimson","Lime","HotPink","SandyBrown","DarkOrange","DarkBlue","OrangeRed","DarkSlateGray","SteelBlue"];

// getting the size of the quote array and background-color arrays
const quoteLength = quotes.length;
const bgColorsLength = bgColors.length;

//Generate random number between 0 and quoteLength
const randomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
};

//Get a random value from an array by using random number for quotes and bgColors
const getRandomQuotes = (arr, size) => {
  const randomNum = randomNumber(size);
  return arr[randomNum];
};

//Change the background color
const printBgColor = () =>{
  const bgColor = getRandomQuotes(bgColors, bgColorsLength);
  document.body.style.backgroundColor = bgColor ;
  document.getElementById('loadQuote').style.backgroundColor = bgColor;
};

//Print generated quote and background-color to the screen
const printQuote = () => {

  const quoteObj = getRandomQuotes(quotes, quoteLength);

  const quoteHTML = `
    <p class="quote"> ${quoteObj.quote} </p>
    <p class="source"> ${quoteObj.source}
      ${ quoteObj.citation ? `<span class="citation"> ${quoteObj.citation} </span>`: "" }
      ${ quoteObj.year ? `<span class="year"> ${quoteObj.year} </span>` : "" }
      <span class="tags"> #${quoteObj.tags} </span>
    </p>`;

  document.getElementById('quote-box').innerHTML = quoteHTML;
  printBgColor();
};

//Change quote and background-color every 10s
const timer = setInterval(printQuote, 10000);

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
