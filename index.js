var randomNumber1 = Math.floor(Math.random() * 6) + 1;
let cat = "dice" + randomNumber1 + ".png";  // ✅ No 'images/'

let img = document.querySelector(".img1");
img.setAttribute("src", cat);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
let bat = "dice" + randomNumber2 + ".png";  // ✅ No 'images/'

let image = document.querySelector(".img2");
image.setAttribute("src", bat);

// Show result
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins 🥳";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🥳";
} else {
  document.querySelector("h1").innerHTML = "Match Drawn! Kudos 🤗";
}

