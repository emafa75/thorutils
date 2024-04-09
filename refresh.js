let intervalID = null;
let refreshRate = 5000;

// set script
const refreshButton = document.querySelector("a.btn");

function refresh() {
  refreshButton.click();
  // Let some time for the request to finish
  setTimeout(beautify, 200)
}

function startRefresh(_refreshRate) {
  if (intervalID !== null)
    return;

  if (typeof _refreshRate === 'number' && _refreshRate) {
    refreshRate = _refreshRate;
    intervalID = setInterval(refresh, _refreshRate);
    console.log(`Start auto-refresh, rate: ${_refreshRate}`);
  }
  else {
    intervalID = setInterval(refresh, refreshRate);
    console.log(`Start auto-refresh, rate: ${refreshRate}`);
  }
}

function stopRefresh() {
  if (intervalID !== null) {
    clearInterval(intervalID);
    intervalID = null;

    console.log("Stopped auto-refreshing");
  }
}
