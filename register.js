let inputUsername = document.getElementById("inputUsername");
let inputPassword = document.getElementById("inputPassword");

function registerUser() {
    fetch('https://us-central1-qac-sandbox-531db.cloudfunctions.net/setUser', {
        method: 'POST',
        body: JSON.stringify({ username: inputUsername.value, password: inputPassword.value }),
        headers: { 'Content-Type': 'application/json' }
    }
    );
}