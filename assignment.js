// function sayHello(name) {
//   console.log('Hi ' + name);
// }

const sayHello = (prefix = 'Hi ', name = ' Miroslav') => {
  if (prefix && name) console.log(prefix + ' ' + name);
  else if (!prefix && !name) console.log('Hi Miroslav.');
  else return 'Hi ' + name;
};

const checkInput = (callbackF, ...strings) => {
  for (const str of strings) {
    if (str.length == 0) return;
  }

  callbackF();
};

sayHello();

checkInput(
  () => console.log('no one string is empty'),
  'a',
  'b',
  'c',
  'd',
  'f',
  'e'
);
