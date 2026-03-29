const inputForm = document.querySelector('[data-js="form"');
const mainElement = document.querySelector('[data-js="form__container"]');

/*** create a user generated card:***/

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userQuestion = event.target.elements.form__question.value;
  const userAnswer = event.target.elements.form__answer.value;
  const userTag = event.target.elements.form__tag.value;

  console.log(userQuestion, userAnswer, userTag);

  const userCard = document.createElement("section");
  mainElement.append(userCard);

  userCard.classList.add("user__card");
  userCard.innerHTML = `
   <ul class="card-container">
        <li class="card-container__card">
         
        <h2>${userQuestion}</h2>
          
        <p class="card__answer-text" data-js="card__answer-text">${userAnswer}</p>
          
        <button class="card__answerbutton" data-js="card__answerbutton">Show Answer</button>
          <button class="card__bookmark-button" data-js="card__bookmark-button">
            <img
              src="./assets/bookmark-white.png"
              alt="place a bookmark"
              height="50rem"
              data-js="card__bookmark-image"
            />
          </button>
          <ul class="tags">
            <li class="tags__tag">${userTag}</li>
          </ul>
        </li> </ul>
  
  `;
});
/***29.3.2026 new try of the answer toggle button***/
const answerText = document.querySelector('[data-js="card__answer-text"]');
const answerButton = document.querySelector('[data-js="card__answerbutton"]');

// answerButton.addEventListener("click", () => {
//   console.log("button is clicked");
//   answerText.classList.toggle("card__answer-text--active");
//   answerButton.textContent === "Show Answer"
//     ? (answerButton.textContent = "Hide Answer")
//     : (answerButton.textContent = "Show Answer");
// });

/* durch das "if (answerbutton)"", bekomme ich keinen console fehler mehr, der
 button selber bleibt aber nicht-clickbar... */
if (answerButton) {
  let isHidden = true;
  answerButton.addEventListener("click", () => {
    console.log("answer button is clicked");
    isHidden = !isHidden;
    answerText.classList.toggle("card__answer-text--active");

    answerButton.textContent === "Show Answer"
      ? (answerButton.textContent = "Hide Answer")
      : (answerButton.textContent = "Show Answer");
  });
}

// ***remaining characters challenge***
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
/* beide event listener mit if else verbinden? */

/******* Trashcan: ********/

// UserCardAnswerButton.addEventListener("click", () => {
//   UserCardAnswerText.classList.toggle("card__answer-text--active");
// });
//user created card bookmark buttons:

// const userCardBookMarkButton = document.querySelector(
// //   '[data-js="card__bookmark-button--user"]',
// );
// // const userCardBookMarkButtonImage = document.querySelector(
// //   '[data-js="card__bookmark-image--user"]',
// );
// // does not work:
// let UserIsBookmarked = false;
// userCardBookMarkButton.addEventListener("click", () => {
//   UserIsBookmarked = !UserIsBookmarked;

//   UserIsBookmarked
//     ? (userCardBookMarkButtonImage.src = "./assets/bookmark.png")
//     : (userCardBookMarkButtonImage.src = "./assets/bookmark-white.png");
// });
