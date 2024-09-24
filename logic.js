const form = document.querySelector('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', function(event) {
    if(password.value !== confirmPassword.value){
        alert('password do not match');
        event.preventDefault();
        
    }
});