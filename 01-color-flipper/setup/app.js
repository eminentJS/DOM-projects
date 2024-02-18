const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  // get a random number between 0-3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  //Math.random generates numbers from 0 - 0.99
  // *colors.length gives us numbers from 0.something - 3.something
  // Math.floor rounds down to the nearest integer
  return Math.floor(Math.random() * colors.length);
}
