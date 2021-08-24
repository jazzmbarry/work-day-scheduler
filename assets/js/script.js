var currentDayEl = document.querySelector("#currentDay")

// Get current Time
momentFormat = moment().format("[Today is] dddd, MMMM Do YYYY")

// Set that it shows up on webpage
currentDayEl.textContent = momentFormat

