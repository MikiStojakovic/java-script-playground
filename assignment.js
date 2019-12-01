const task3Element = document.getElementById('task-3');

function f1() {
  alert('bum');
}

function add(name) {
  alert(name);
}

f1();

add('Miroslav');

task3Element.addEventListener('click', f1);

function stringConcatination(string1, string2, string3) {
  return `${string1} ${string2} ${string3}`;
}

alert(stringConcatination('I', 'am', 'Miroslav'));
