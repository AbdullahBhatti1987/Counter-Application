var count = 0;

function updateCounter() {
    var counterNumberElement = document.getElementById("counter-number");
    var evenOddElement = document.getElementById("even-odd");
    var formattedCount = count < 10 ? '0' + count : count;
  counterNumberElement.textContent = formattedCount;
  evenOddElement.textContent = count % 2 === 0 ? '(Even)' : '(Odd)';
  document.getElementById("counter").className = count % 2 === 0 ? 'even' : 'odd';
}

function incrementCounter() {
  count++;
  updateCounter();
}

function resetCounter() {
  count = 0;
  updateCounter();
}
