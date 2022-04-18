// DOM EVENTS EXERCISE
// 1a
const button1 = document.querySelector(`#one`);

// 1b
button1.onclick = function (){
  alert("You clicked the first button! Congrats!");
}

// 2a
const h3 = document.querySelector(`h3`);

// 2b
h3.addEventListener(`mouseover`, () => {
  alert("You hovered over the h3 element! Congrats!");
});
// OR
// h3.addEventListener(`mouseenter`, () => {
//   alert("You hovered over the h3 element! Congrats!");
// });

// 3a
const form = document.querySelector(`form`);

// 3b
form.addEventListener(`submit`, function (v){
  v.preventDefault();
  const input = form.elements.entry.value;
  alert(input);
  form.elements.entry.value = ``;
});

// BONUS
// 4a
const darkMode = document.querySelector(`#dm`);

// 4b
const everyElement = document.querySelectorAll(`*`);
console.dir(everyElement);
darkMode.addEventListener(`click`, () => {
  for (element of everyElement){
    element.classList.toggle(`dark-mode`);
  }
});

// 5a
const times = document.querySelector(`#times`);

// 5b
let num = 1;
times.addEventListener(`click`, () => {
  if (num < 3){
    alert("You clicked the last button! Congrats!");
    num++;
  } else if (num === 3){
    alert("OH NO! This button is NOT going to work anymore");
    num++;
  }
});