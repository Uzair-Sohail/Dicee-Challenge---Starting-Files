function retry() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomImage1 = "dice" + randomNumber1 + ".png";
  let imgSource1 = "images/" + randomImage1;
  let image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", imgSource1);

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomImage2 = "dice" + randomNumber2 + ".png";
  var imgSource2 = "images/" + randomImage2;
  let image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", imgSource2);

  // Check which player will win???
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML ="Player1 won!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML ="Player2 won!";
  } else {
    document.querySelector('h1').innerHTML ="Draw!";
  }

}