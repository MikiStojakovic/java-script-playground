let task1SelectedFirstTime = document.getElementById('task-1');
let task1SelectedSecondTime = document.querySelector('#task-1');

task1SelectedSecondTime.style.backgroundColor = 'black';
task1SelectedSecondTime.style.color = 'white';

let titleSelectedFirstTime = document.head.querySelector('title');
let titleSelectedSecondTime = document.querySelector('title');

titleSelectedFirstTime.textContent = 'Assignment - Solved';

let h1 = document.querySelector('h1');
h1.innerText = 'Assignment - Solved';
