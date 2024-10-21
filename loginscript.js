const users = [
    {username: 'sbadhika', password: 'password1'},
    {username: 'jhamarb', password: 'password2'},
    {username: 'user123', password: 'password123'} 
];

let attempts = 0;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let userFound = users.find(user => user.username === username && user.password === password);

    if (userFound) {
        alert('Login Successful! Welcome to JB Electronics!');
        window.location.href = 'products.html'; //products page
    } else {
        attempts++;
        if (attempts >= 3) {
            alert('Login unsuccessful. Too many failed attempts. Redirecting to error page.');
            window.location.href = 'error.html'; //error page
        } else {
            alert('Invalid username or password. Please try again.');
        }
    }
});


