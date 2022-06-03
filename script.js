// let buttons = document.querySelector(".card-text")


// console.log(buttons)

// buttons.addEventListener("click", function(){
//   buttons.style.display = "block";
// })

var cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  var button = card.querySelector(".card-btn");
  button.addEventListener("click", function () {
    card.classList.toggle("show-text");
  });
});
