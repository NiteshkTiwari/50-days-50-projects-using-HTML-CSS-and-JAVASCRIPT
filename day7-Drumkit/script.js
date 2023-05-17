var length1 = document.querySelectorAll(".drum").length;

for (var i = 0; i < length1; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    this.style.color = "white";

    var buttonInnerHtml = this.innerHTML;
    makesound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keydown", function (event) {
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(keypressed) {
  var v = document.querySelector("." + keypressed);

  v.classList.add("pressed");

  setTimeout(function () {
    v.classList.remove("pressed");
  }, 100);
}
