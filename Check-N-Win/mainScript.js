let landing = document.getElementById('landing');
let startBtn = document.getElementById('startBtn');
let gamebox = document.getElementById('gamebox');

startBtn.addEventListener('click', () => {
  gamebox.style.display = 'block';
  landing.style.display = 'none';
});

let check = document.getElementById('check');
check.addEventListener('click', checker);

let inputBox = document.querySelector('input[name="box"]');
inputBox.addEventListener('focus', () => {
  message.style.display = 'none';
});

let myLabel = document.getElementById('myLabel');
let message = document.getElementById('message');
let tab = document.getElementById('tab');

let counter = 0;

/*function checker(val) {
  
  counter++;
  let inputBoxValue = document.querySelector('input[name="box"]').value;
  let generatedNum = Math.floor(Math.random()*50) +1;
  
  if (Number(inputBoxValue) === generatedNum) {
    message.style.display = 'block';
    message.textContent = 'Correct! Good Job!';
    message.style.color = 'green';
  } else {
    message.style.display = 'block'
    message.textContent = 'Incorrect, Try Again'
    message.style.color = 'red';
  }
  
  inputBox.value = '';
  recoder(counter, inputBoxValue, generatedNum);
}*/

let generatedNum = Math.floor(Math.random() * 50) + 1;
let tries = 10;

function checker() {
  counter++;
  let inputBoxValue = document.querySelector('input[name="box"]').value;
  let guess = generatedNum;
  let validity;

  if (Number(inputBoxValue) < guess) {
    message.style.display = 'block';
    message.textContent = 'Entered Value is Lesser than the Number';
    message.style.color = 'red';
    validity = false;
  } else if (Number(inputBoxValue) > guess) {
    message.style.display = 'block';
    message.textContent = 'Entered Value is Greater than the Number';
    message.style.color = 'red';
    validity = false;
  } else {
    message.style.display = 'block';
    message.textContent = 'Correct! Good Job';
    message.style.color = 'green';
    validity = true;
  }

  if (validity) {
    setTimeout(resetGame, 3000); 
    return;
  }

  validator(validity);
  recoder(counter, inputBoxValue, guess, validity);
}

function validator(valid) {
  if (!valid) {
    tries--;
  }

  if (tries === 0 && !valid) {
    message.textContent = 'You lose! No more chances';
    message.style.color = 'white';
    message.style.backgroundColor = 'black';
    document.getElementById('check').disabled = true;
    setTimeout(resetGame, 2000)
  } else if (valid) {
    message.style.backgroundColor = 'green';
  }
}

function recoder(num, userVal, genVal, valid) {
  let newEle = document.createElement('tr');
  let newEle1 = document.createElement('td');
  let newEle2 = document.createElement('td');

  newEle1.textContent = `${num}) `;
  newEle2.textContent = `You Entered: ${userVal} | Remaining Chance(s): ${tries}`;

  tab.appendChild(newEle);
  newEle.appendChild(newEle1);
  newEle.appendChild(newEle2);
}

function resetGame() {
  generatedNum = Math.floor(Math.random() * 50) + 1;

  tries = 10;
  counter = 0;

  tab.innerHTML = '';

  check.disabled = false;
  inputBox.disabled = false;

  inputBox.value = '';
  message.style.display = 'none';
  message.style.backgroundColor = '';
}