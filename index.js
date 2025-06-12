
var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randImage1 = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randImage1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randImage2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent="🚩 Player 2 Wins!";
}
else{
    document.querySelector("h1").textContent=" draw ";
}
