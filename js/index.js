const bookmarkElement = document.querySelector("[data-js=bookmark]");
const answerButton = document.querySelector("[data-js=answer-button]");
const cardAnswer = document.querySelector("[data-js=card-answer]");

bookmarkElement.addEventListener("click", () => {
  console.log("Bookmark clicked");

  bookmarkElement.classList.toggle("fa-regular");
  bookmarkElement.classList.toggle("fa-solid");
});

answerButton.addEventListener("click",()=>{

console.log("answer button clicked");
console.log(cardAnswer);

cardAnswer.classList.toggle("hidden");

if (cardAnswer.classList.contains("hidden")) {
    answerButton.textContent = "Antwort zeigen";
  } else {
    answerButton.textContent = "Antwort verbergen";
  }


});

