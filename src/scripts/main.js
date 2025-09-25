'use strict';

// write your code here
const logo = document.querySelector('.logo');

function createMessage(message, isError) {
  const element = document.createElement('div');

  if (isError) {
    element.className = 'message';
  } else {
    element.className = 'message error-message';
  }

  element.textContent = message;
  document.body.appendChild(element);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener(
    'click',
    () => {
      resolve('Promise was resolved!');
    },
    { once: true },
  );
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((val) => createMessage(val, true))
  .catch((val) => createMessage(val, false));

promise2
  .then((val) => createMessage(val, true))
  .catch((val) => createMessage(val, false));
