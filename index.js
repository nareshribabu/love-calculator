function buttonPressed() {

  if ((document.getElementById("firstName").value != "") && (document.getElementById("secondName").value != "")){

    var randomNumber = Math.floor((Math.random() * 100) + 1);

    document.querySelector("h1").innerHTML = randomNumber + "%";

    if (randomNumber <= 100 && randomNumber >= 90) {
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

    var nameOne = document.getElementById("firstName").value;
    var nameTwo = document.getElementById("secondName").value;

    // make fist letter uppercase
    nameOne = nameOne[0].toUpperCase() + nameOne.slice(1);
    nameTwo = nameTwo[0].toUpperCase() + nameTwo.slice(1);

    document.querySelector("h3").innerHTML = nameOne + " and " + nameTwo;

  }

  document.getElementById("firstName").value = "";
  document.getElementById("secondName").value = "";
}
