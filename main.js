// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const errorModal = document.querySelector("div#modal");
const likeButton = document.querySelectorAll(".like-glyph");

errorModal.classList = "hidden";

mimicServerCall()
  .then(() => {
    likeButton.forEach((heart) => {
      heart.classList.add("activated-heart");
      heart.innerText = FULL_HEART;
      heart.addEventListener("click", () => {
        heart.classList.toggle("activated-heart");
        heart.innerText = EMPTY_HEART;
      });
    });
  })
  .catch(() => {
    errorModal.classList.remove("hidden");
    setTimeout(() => errorModal.classList.add("hidden"), 3000);
  });

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
