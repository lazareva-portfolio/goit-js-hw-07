'use strict';

const form = document.querySelector(".login-form");


const inputEmail = document.querySelector('[name="email"]');
inputEmail.setAttribute('id', 'email');
const inputPass = document.querySelector('[name="password"]');
inputPass.setAttribute('id', 'password');


// const inputEmail = document.querySelector(".login-form");
// const inputPass = document.querySelector(".login-form");

inputEmail.addEventListener('blur', () => {
    inputEmail.value = inputEmail.value.trim();
})
inputPass.addEventListener('blur', () => {
    inputPass.value = inputPass.value.trim();
})

form.addEventListener("submit", event => {
    event.preventDefault();

    if(inputEmail.value === '' || inputPass.value === ''){
    alert("All form fields must be filled in");
} else {
    console.log(inputEmail.value);
    console.log(inputPass.value);

    form.reset();
}
});







