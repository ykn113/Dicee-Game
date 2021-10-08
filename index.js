var randomdice1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomimage1 = "images/dice" + randomdice1 + ".png"; //images/dice1-6.png
document.querySelectorAll("img")[0].setAttribute("src", randomimage1) //change dice number


var randomdice2 = Math.floor(Math.random() * 6) + 1;
var randomimage2 = "images/dice" + randomdice2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimage2)

if (randomdice1 > randomdice2){
  document.querySelector("h1").innerHTML= "🚩Player1 Wins";
}else if (randomdice1 < randomdice2){
  document.querySelector("h1").innerHTML= "Player2 Wins🚩";
}else{
  document.querySelector("h1").innerHTML= "Draw!"
}
