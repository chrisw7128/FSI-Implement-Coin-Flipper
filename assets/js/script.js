// TODO: Declare any global variables we need

let numberOfHeads = 0;
let numberOfTails = 0;
let totalFlips = 0;
let percentageHeads = 0;
let percentageTails = 0;
const flipButton = document.querySelector("#flip");
const clearButton = document.querySelector("#clear");
const statusHeader = document.querySelector(".message-container");
const pennyImage = document.querySelector("#penny-image");
let headsCell = document.querySelector("#heads");
let headsPercentCell = document.querySelector("#heads-percent");
let tailsCell = document.querySelector("#tails");
let tailsPercentCell = document.querySelector("#tails-percent");

document.addEventListener("DOMContentLoaded", function () {
  flipButton.addEventListener("click", function () {
    console.log("button was clicked");
    totalFlips += 1;
    console.log(totalFlips);

    const clearButton = document.querySelector("#clear");
    const result = Math.round(Math.random() * 100);
    console.log(result);
    if (result > 50) {
      statusHeader.textContent = "You flipped heads!";
      pennyImage.src = "./assets/images/penny-heads.jpg";
      pennyImage.alt = "Penny (Heads)";
      numberOfHeads += 1;
      console.log({ numberOfHeads });
      console.log({ totalFlips });
      headsCell.textContent = `${numberOfHeads}`;
      percentageHeads = Math.round((numberOfHeads / totalFlips) * 100);
      headsPercentCell.textContent = `${percentageHeads}%`;
      console.log({ percentageHeads });
    } else {
      console.log(result);
      statusHeader.textContent = "You flipped tails!";
      pennyImage.src = "./assets/images/penny-tails.jpg";
      pennyImage.alt = "Penny (Tails)";
      numberOfTails += 1;
      console.log({ numberOfTails });
      console.log({ totalFlips });
      tailsCell.textContent = `${numberOfTails}`;
      percentageTails = Math.round((numberOfTails / totalFlips) * 100);
      tailsPercentCell.textContent = `${percentageTails}%`;
      console.log({ percentageTails });
    }
  });
  clearButton.addEventListener("click", function () {
    numberOfHeads = 0;
    numberOfTails = 0;
    totalFlips = 0;
    percentageHeads = 0;
    percentageTails = 0;
    console.log("cleared");

    headsCell.textContent = `${numberOfHeads}`;
    headsPercentCell.textContent = `${percentageHeads}%`;
    tailsCell.textContent = `${numberOfTails}`;
    tailsPercentCell.textContent = `${percentageTails}%`;
    statusHeader.textContent = "Let's Get Rolling!";
    pennyImage.src = "./assets/images/penny-heads.jpg";
    pennyImage.alt = "Penny (Heads)";
  });
});
