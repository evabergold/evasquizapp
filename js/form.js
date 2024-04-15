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
