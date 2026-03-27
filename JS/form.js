const inputForm = document.querySelector('[data-js="form"');
const mainElement = document.querySelector('[data-js="form__container"]');

// create a user generated card:
inputForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userQuestion = event.target.elements.form__question.value;
  const userAnswer = event.target.elements.form__answer.value;
  const userTag = event.target.elements.form__tag.value;

  console.log(userQuestion, userAnswer, userTag);

  const userCard = document.createElement("article");
  mainElement.append(userCard);
  userCard.classList.add("user__card");
  userCard.innerHTML = `
  <ul class="card-container--form">
        <li class="card-container__card--form">
          <h2>${userQuestion}</h2>
          <p  class="card__answer-text" data-js="card__answer-text--user">${userTag}</p>
          <button class="card__answerbutton" data-js="card__answerbutton--user">Show Answer</button>
          <button class="card__bookmark-button" data-js="card__bookmark-button--user">
            <img
              class="card__bookmark-image--user"
              src="./assets/bookmark-white.png"
              alt="place a bookmark"
              height="50rem"
              data-js="card__bookmark-image--user"
            />
          </button>  
          <ul class="tags">
            <li class="tags__tag">${userTag}</li></ul>`;
});

// user created card answer toggle:
const UserCardAnswerButton = document.querySelector(
  '[data-js="card__answerbutton--user]',
);
const UserCardAnswerText = document.querySelector(
  '[data-js="card__answer-text--user]',
);

UserCardAnswerButton.addEventListener("click", () => {
  UserCardAnswerText.classList.toggle("card__answer-text--active");
});
//user created card bookmark buttons:

const userCardBookMarkButton = document.querySelector(
  '[data-js="card__bookmark-button--user"]',
);
const userCardBookMarkButtonImage = document.querySelector(
  '[data-js="card__bookmark-image--user"]',
);
// does not work:
// let UserIsBookmarked = false;
// userCardBookMarkButton.addEventListener("click", () => {
//   UserIsBookmarked = !UserIsBookmarked;

//   UserIsBookmarked
//     ? (userCardBookMarkButtonImage.src = "./assets/bookmark.png")
//     : (userCardBookMarkButtonImage.src = "./assets/bookmark-white.png");
// });

// remaining characters:
const questionInput = document.querySelector('[data-js="form__question"]');
const questionRemaining = document.querySelector(
  '[data-js="questionCharacters"]',
);

questionInput.addEventListener("input", (event) => {
  questionRemaining.textContent =
    150 - event.target.value.length + " Characters left";
});

const answerInput = document.querySelector('[data-js="form__answer"]');
const answerRemaining = document.querySelector('[data-js="answerCharacters"]');

answerInput.addEventListener("input", (event) => {
  answerRemaining.textContent =
    150 - event.target.value.length + " Characters left";
});
//  beide event listener mit if else verbinden?
