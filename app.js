
let count = 0;


var counterDisplay = document.getElementById('counter');
var historyList = document.getElementById('historyList');


function updateCounterDisplay() {
  counterDisplay.textContent = count;

  counterDisplay.className = count % 2 === 0 ? 'counter even' : 'counter odd';
}


function incrementCounter() {
  count++;
  updateCounterDisplay();

  logCountInHistory(count);
}

function resetCounter() {
  count = 0;
  updateCounterDisplay();
  
  clearHistory();
}


function logCountInHistory(value) {
  const listItem = document.createElement('li');
  listItem.textContent = value;
  historyList.appendChild(listItem);
}


function clearHistory() {
  historyList.innerHTML = '';
}