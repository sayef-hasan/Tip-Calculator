const peopleSum = document.querySelector('#peopleSum');


const plusSum = document.querySelector('#plusSum');
let count = 1;
plusSum.addEventListener('click', () => {
  count++;
  peopleSum.innerHTML = count;
});

const minusSum = document.querySelector('#minusSum');
minusSum.addEventListener('click', () => {
  if (count > 1) {
    count--;
  }
  peopleSum.innerHTML = count;
});

const calculator = document.querySelector('#calculator');

calculator.addEventListener('click', () => {
  document.querySelector('.total_per_person').style.display = 'block';

  const totalBill = Number(document.querySelector('#totalBill').value);
  const tipMain = Number(document.querySelector('#tipMain').value);
  let total = totalBill * (tipMain / 100);
  let finalPeople = peopleSum.innerHTML;

  document.querySelector('#finalBill').innerHTML = totalBill;
  document.querySelector('#tipAmount').innerHTML = total;
  const taxAmount = (document.querySelector('#taxAmount').innerHTML =
    (totalBill + 5) / 100);

  document.querySelector('#totalPerPerson').innerHTML = (
    (totalBill + total + taxAmount) /
    finalPeople
  ).toFixed(2);
});
