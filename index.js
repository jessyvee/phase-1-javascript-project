//const quoteText = document.querySelector(".quote"),
//quoteBtn = document.querySelector("button");



  //fetching data from the api to our project

const endpoint = "https://type.fit/api/quotes";

//quote function start
async function getQuote() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const quote = data[randomIndex].text;
    const author = data[randomIndex].author || "Unknown";
    return { quote, author };
  } catch (error) {
    console.error(error);
  }
}

function updateQuote() {
  getQuote().then((data) => {
    const quoteText = document.querySelector(".quote-text");
    const quoteAuthor = document.querySelector(".quote-author");
    quoteText.textContent = data.quote;
    quoteAuthor.textContent = `- ${data.author}`;
  });
}
//fetching of random Quoate from the Api to javascript object.
const newQuoteBtn = document.querySelector("#new-quote");
newQuoteBtn.addEventListener("click", updateQuote);

//setting the tweetquoate button for click then opening in new url
const tweetQuoteBtn = document.querySelector("#tweet-quote");
tweetQuoteBtn.addEventListener("click", () => {
  const quoteText = document.querySelector(".quote-text").textContent;
  const quoteAuthor = document.querySelector(".quote-author").textContent;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quoteText}" ${quoteAuthor}`
  )}`;
  window.open(tweetUrl);
});

// Initial quote on page load
updateQuote();