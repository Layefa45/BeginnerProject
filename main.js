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
let message = document.getElementById('message')


function checker(val) {
  
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
}

function recoder(num, userVal, genVal) {
  let tab = document.getElementById('tab');
  let newEle = document.createElement('tr');
  let newEle1 = document.createElement('td');
  let newEle2 = document.createElement('td');
  
  
  newEle1.textContent = `${num}) `
  newEle2.textContent = `You Entered: ${userVal} | Correct Answer: ${genVal}`
  
  tab.appendChild(newEle);
  newEle.appendChild(newEle1)
  newEle.appendChild(newEle2);
  
  
}
