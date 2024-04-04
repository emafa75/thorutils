
// Create infinite refresh button
const infiniteRefreshButton = document.createElement("button");
const infiniteRefreshContent = document.createTextNode("Infinite Refresh");
infiniteRefreshButton.appendChild(infiniteRefreshContent);
// set script
const refreshButton = document.querySelector("a.btn")
let script = refreshButton.getAttribute("onClick");
infiniteRefreshButton.setAttribute("onClick", `let intervalId = setInterval(() => { ${script} }, 1000); `);

// Create reset button
const resetButton = document.createElement("button");
const resetButtonText = document.createTextNode("Stop spam");
resetButton.appendChild(resetButtonText);
resetButton.setAttribute("id", "resetSpam");

// Place Infinite refresh button and reset
const container = document.getElementsByClassName("container")[0];
container.insertBefore(infiniteRefreshButton, container.lastElementChild);
container.insertBefore(resetButton, container.lastElementChild);
