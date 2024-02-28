const btnSubmit = document.querySelector('button');
const usernameInputField = document.querySelector('#username');
const userAgeInputField = document.querySelector('#age');
const loginMessage = document.querySelector('.login-message');

btnSubmit.addEventListener('click', () => {
    const usernameInput = usernameInputField.value.toLowerCase();
    const userAgeInput = userAgeInputField.value;
    if(usernameInput !== 'harry' || userAgeInput !== '11') {
        loginMessage.textContent = 'You Are Not Harry! Go Away!';
        loginMessage.style.color = 'red';
    } else {
        loginMessage.textContent = 'Welcome, Harry!';
        loginMessage.style.color = 'green';
    }

});