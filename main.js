/*const userPassword = document.getElementById('user_password');
const confirmPass = document.getElementById('password_confirmation');
const form = document.getElementById('myForm');
const errorElement = document.getElementById('error');*/

function validatePassword() {
    let messages = document.querySelector('.error');
    const userPassword = document.getElementById('user_password').value;
    const confirmPass = document.getElementById('password_confirmation').value;

    if(userPassword !== confirmPass) {
        messages.textContent = "Passwords do not match";
    }
    else {
        messages.textContent = "Passwords match";
    }
}