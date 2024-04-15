console.clear();
console.log("sanity check");

const form = document.querySelector("[data-js=form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submitted the form");

  const formElements = event.target.elements;

  console.log(formElements.newquestion.value);
  const questionValue = formElements.newquestion.value;
  console.log(formElements.newanswer.value);
  const answerValue = formElements.newanswer.value;
  console.log(formElements.newtags.value);
  const tagValue = formElements.newtags.value;

  const newCard = document.createElement("section");
  newCard.classList.add("card");

  newCard.innerHTML = `

<h2 class="card__heading">Neue Frage</h2>
        <i class="fa-regular fa-bookmark card__bookmark" data-js="bookmark"></i>
        <p class="card__text">
          ${questionValue}
        </p>
        <button class="card__button" data-js="answer-button">Antwort zeigen</button>
        <p class="card__text hidden" data-js="card-answer">${answerValue}</p>
        <ul class="tag-list" role="list">
          <li class="tag-list-item">#${tagValue}</li>
       
        </ul>
        
`;

 document.body.append(newCard);
});


const questionInput = document.querySelector('[data-js="new-question"]');
const answerInput = document.querySelector('[data-js="new-answer"]');
const questionCharactersLeft = document.querySelector(
    '[data-js="remaining-question-characters"]'
);
const answerCharactersLeft = document.querySelector(
    '[data-js="remaining-answer-characters"]'
  );

console.log("questionCharactersLeft", questionCharactersLeft);
console.log("answerCharactersLeft", answerCharactersLeft);

questionInput.addEventListener("input", (event) => {
  console.log("input?", 150 - event.target.value.length);
  questionCharactersLeft.textContent = 150 - event.target.value.length;
});

answerInput.addEventListener("input", (event) => {
    console.log("input?", 150 - event.target.value.length);
    answerCharactersLeft.textContent = 150 - event.target.value.length;
  });




