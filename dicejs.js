



// var dice = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]

document.querySelector(".roll").onclick = function() {rolldice()};
function rolldice() {
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img1").setAttribute("src", "dice" + dice1 + ".png");
  document.querySelector(".img2").setAttribute("src", "dice" + dice2 + ".png");
}

rolldice();
