// TODO: Write your gambling application here.
const scratchcards = document.querySelectorAll('.scratchcard');
const balanceElement = document.querySelector('#balance');


scratchcards.forEach(card => {
  card.addEventListener('click', () => {
    if (card.dataset.scratched === 'true') {
      return;
    }

    let currentBalance = Number(balanceElement.textContent);

    if (currentBalance >= 10) {
      currentBalance -= 10;

      if (card.dataset.amount) {
        currentBalance += Number(card.dataset.amount);
      }

      balanceElement.textContent = currentBalance;

      card.dataset.scratched = 'true';
      card.textContent = card.dataset.amount;
    } else {
      alert("No more money");
    }
  });
});
