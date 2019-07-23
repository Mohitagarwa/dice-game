
var randomnumber1 = Math.floor(Math.random()*6+1);

var pic = "images/dice"+randomnumber1+".png";
document.querySelector('.img1').setAttribute('src',pic);

var randomnumber2 = Math.floor(Math.random()*6+1);

var pic1 = "images/dice"+randomnumber2+".png";
document.querySelector('.img2').setAttribute('src',pic1);
   var name = "player1 wins";
  if(randomnumber1>randomnumber2)
  {
    document.querySelector("h1").innerHTML = "player1 wins";
  }
  else if(randomnumber2>randomnumber1) {
  document.querySelector("h1").innerHTML = "player2 wins";
  }
  else{
    document.querySelector("h1").innerHTML = "draw";
      }
