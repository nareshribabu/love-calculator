function buttonPressed() {

  var randomNumber = Math.floor((Math.random() * 100) + 1);

  document.querySelector("h1").innerHTML = randomNumber + "%";

  if (randomNumber < 100 && randomNumber >= 90) {
    document.querySelector("h4").innerHTML = "... and they lived happily ever after!";
  }
  else if (randomNumber < 90 && randomNumber >= 70) {
    document.querySelector("h4").innerHTML = "You go together like Cookies and Cream!";
  }
  else if (randomNumber < 70 && randomNumber >= 50) {
    document.querySelector("h4").innerHTML = "You go together like Hot Chocolate and Marshmallows!";
  }
  else if (randomNumber < 50 && randomNumber >= 30) {
    document.querySelector("h4").innerHTML = "You go together like Pineapple and Pizza!";
  }
  else if (randomNumber < 30) {
    document.querySelector("h4").innerHTML = "You go together like Oil and Water!";
  }
}
