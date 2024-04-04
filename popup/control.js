// Refresh rates are in milliseconds
// Only allow a multiple of refreshRateStep refreshRate
const refreshRateStep = 100;
const refreshRateMin = 500;
let refreshRate = 5000;

const refreshRateInput = document.getElementById('refresh-rate');
const startRefreshButton = document.getElementById('start-refresh');
const stopRefreshButton = document.getElementById('stop-refresh');
const errorContent = document.getElementById('err');

function getActiveTab() {
  return browser.tabs.query({active: true, currentWindow: true, url: "*://thor.enseirb-matmeca.fr/ruby/repositories/*"});
}

function errorClear() {
  if (errorContent !== null)
    errorContent.innerText = '';

  else
    console.error('errorContent is nul');
}

function errorDisplay(text) {
  console.error(text);

  if (errorContent !== null)
    errorContent.innerText = text;

  else
    console.error('errorContent is nul');
}

function updateRefreshRate() {
  if (!refreshRateInput)
    return;

  const newValue = parseInt(refreshRateInput.value);
  const finalNewValue = Math.max(
    refreshRateMin,
    Math.ceil(newValue / refreshRateStep) * refreshRateStep
  );

  refreshRate = finalNewValue;
  refreshRateInput.value = finalNewValue;
}

function startRefresh() {
  updateRefreshRate();

  getActiveTab().then((tabs) => {
    if (tabs.length === 0)
      throw new Error('You must be on a thor repository')

    browser.tabs.executeScript(tabs[0].id, {
      code: `startRefresh(${refreshRate})`
    });
  }).catch(e => {
    errorDisplay(e.message);
  });
}

function stopRefresh() {
  getActiveTab().then((tabs) => {
    if (tabs.length === 0)
      throw new Error('You must be on a thor repository')

    browser.tabs.executeScript(tabs[0].id, {
      code: `stopRefresh()`
    });
  }).catch(e => {
    errorDisplay(e.message);
  });
}

if (startRefreshButton)
  startRefreshButton.addEventListener('click', startRefresh);

if (stopRefreshButton)
  stopRefreshButton.addEventListener('click', stopRefresh);

if (refreshRateInput)
  refreshRateInput.addEventListener('change', updateRefreshRate);

