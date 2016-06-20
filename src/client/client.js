import style from './styling/index';

window.onload = () => {
  let helloworld = document.createElement('h1');
  helloworld.innerText = 'Hello World!';
  document.body.appendChild(helloworld);
}