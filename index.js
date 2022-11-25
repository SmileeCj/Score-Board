let scoreHome = 0;
let scoreGuest = 0;
let guestScore = document.getElementById("guest-score");
let homeScore = document.getElementById("home-score");

function btnIncOneG() {
  scoreGuest += 1;
  guestScore.innerText = scoreGuest;
  console.log(scoreGuest);
}

function btnIncTwoG() {
  scoreGuest += 2;
  guestScore.innerText = scoreGuest;
  console.log(scoreGuest);
}

function btnIncThreeG() {
  scoreGuest += 3;
  guestScore.innerText = scoreGuest;
  console.log(scoreGuest);
}

guestScore.innerText = score;
// Home functions ---------------------

function btnIncOneH() {
  scoreHome += 1;
  homeScore.innerText = scoreHome;
  console.log(scoreHome);
}

function btnIncTwoH() {
  scoreHome += 2;
  homeScore.innerText = scoreHome;
  console.log(scoreHome);
}

function btnIncThreeH() {
  scoreHome += 3;
  homeScore.innerText = scoreHome;
  console.log(scoreHome);
}

function reset() {
  scoreHome = 0;
  scoreGuest = 0;
  guestScore.innerText = scoreGuest;
  homeScore.innerText = scoreHome;
}
