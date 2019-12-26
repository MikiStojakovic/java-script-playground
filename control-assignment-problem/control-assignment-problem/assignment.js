const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random();

if (randomNumber > 0.7 && randomNumber2 > 0.7) {
  alert('both numbers are higher than 0.7');
}

if (randomNumber < 0.2 || randomNumber2 < 0.2) {
  alert('some of those two numbers is less than 0.2');
}

const numArray = [11, 12, 13, 14, 15, 16, 17];

for (let i = numArray.length - 1; i >= 0; i--) {
  console.log(numArray[i]);
}

for (const number of numArray) {
  console.log(number);
}
