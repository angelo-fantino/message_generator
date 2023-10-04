// MESSAGE GENERATOR IN JAVASCRIPT
let messageAuthor = document.getElementById("messageAuthor");
let messageQuote = document.getElementById("messageQuote");

// AUTHORS QUOTES ARRAY OF OBJECTS
let authors = [
  {
    author: "Marcus Aurelius",
    quote:
      "You have power over your mind, not outside events. Realize this, and you will find strength",
  },
  {
    author: "Seneca",
    quote: "We suffer more often in imagination than in reality.",
  },
  {
    author: "Epictetus",
    quote:
      "Men are disturbed not by things, but by the view which they take of them.",
  },
  {
    author: "Zeno ",
    quote:
      "No loss should be more regrettable to us than losing our time, for it’s irretrievable.",
  },
];

// FUNCTION TO GENERATE A NEW MESSAGE
function generateMessage() {
  let getIndex = Math.floor(Math.random() * authors.length);
  let randomAuthor = authors[getIndex].author;
  let randomQuote = authors[getIndex].quote;

  // UPDATE THE CONTENT OF THE messageAuthor AND THE messageQuote
  messageAuthor.textContent = randomAuthor;
  messageQuote.textContent = randomQuote;
}

// CALL generateMessage FUNCTION TO DISPLAY A RANDOM QUOTATION
generateMessage();
