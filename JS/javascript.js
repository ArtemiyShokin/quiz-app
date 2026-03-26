const bookmarkButtonElement = document.querySelector(
  '[data-js="card__bookmark-button"]',
);
const bookmarkImageElement = document.querySelector(
  '[data-js="card__bookmark-image"]',
);

const answerButton = document.querySelector('[data-js="card__answerbutton"]');

const answerText = document.querySelector('[data-js="card__answer-text"]');

//Answer Button:
answerButton.addEventListener("click", () => {
  //   console.log("answer button clicked!");
  answerText.classList.toggle("card__answer-text--active");
  //   if (answerButton.textContent === "Show Answer") {
  //     answerButton.textContent = "Hide Answer";
  //   } else {
  //     answerButton.textContent = "Show Answer";
  //   }
  //   console.log(answerButton.textContent);
  answerButton.textContent === "Show Answer"
    ? (answerButton.textContent = "Hide Answer")
    : (answerButton.textContent = "Show Answer");
});

//Bookmark Button:
let isBookmarked = false;
bookmarkButtonElement.addEventListener("click", () => {
  isBookmarked = !isBookmarked;
  //   if (isBookmarked) {
  //     bookmarkImageElement.src = "./assets/bookmark.png";
  //   } else {
  //     bookmarkImageElement.src = "./assets/bookmark-white.png";
  //   }
  // als ternary geschrieben:
  isBookmarked
    ? (bookmarkImageElement.src = "./assets/bookmark.png")
    : (bookmarkImageElement.src = "./assets/bookmark-white.png");
});
// wie hätte ich das über css classlist toggle lösen können:
// im JS:
// bookmarkButtonElement.addEventListener("click", () => {
//   bookmarkImageElement.classList.toggle("active");
// });

// in der CSS:
// img {
//   content: url("./assets/bookmark-white.png");
// }

// img.active {
//   content: url("./assets/bookmark.png");
