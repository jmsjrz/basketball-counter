// Initialize the home and guest scores to 0.
let homeScore = 0;
let guestScore = 0;

// Get the elements that display the home and guest scores.
const homeScoreEl = document.getElementById("home");
const guestScoreEl = document.getElementById("guest");


// Updates the home and guest scores displayed on the page.
function updateHomeScore() {
  homeScoreEl.textContent = homeScore;
}
function updateGuestScore() {
  guestScoreEl.textContent = guestScore;
}


// Functions for the home team.
function incrementHomeScoreOne() {
  homeScore += 1;
  updateHomeScore();
}
function incrementHomeScoreTwo() {
  homeScore += 2;
  updateHomeScore();
}
function incrementHomeScoreThree() {
  homeScore += 3;
  updateHomeScore();
}


// Functions for the guest team.
function incrementGuestScoreOne() {
  guestScore += 1;
  updateGuestScore();
}
function incrementGuestScoreTwo() {
  guestScore += 2;
  updateGuestScore();
}
function incrementGuestScoreThree() {
  guestScore += 3;
  updateGuestScore();
}


// Resets the home and guest scores to 0 and updates the display.
function resetScores() {
  homeScore = 0;
  guestScore = 0;
  updateHomeScore();
  updateGuestScore();
}
