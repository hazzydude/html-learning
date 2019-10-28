let inputUsername = document.getElementById("inputUsername");
let inputPassword = document.getElementById("inputPassword");
let newPassword = document.getElementById("newPassword");
let enteredUsername = "username";

function registerUser() {
    fetch('https://us-central1-qac-sandbox-531db.cloudfunctions.net/setUser', {
        method: 'POST',
        body: JSON.stringify({ username: inputUsername.value, password: inputPassword.value }),
        headers: { 'Content-Type': 'application/json' }
    }
    );
}

function updateUser() {
    debugger;
    fetch('https://us-central1-qac-sandbox-531db.cloudfunctions.net/setUser', {
        method: 'POST',
        body: JSON.stringify({ username: enteredUsername, password: newPassword.value }),
        headers: { 'Content-Type': 'application/json' }
    }).then();
}
function deleteUser() {
    fetch('https://us-central1-qac-sandbox-531db.cloudfunctions.net/deleteUser?username=' + enteredUsername)
        .then();
}

function toUserProfile() {
    fetch('https://us-central1-qac-sandbox-531db.cloudfunctions.net/login?username=' + inputUsername.value + '&password=' + inputPassword.value)
        .then();
    enteredUsername = inputUsername.value;
    window.location.href = './userProfile.html';

}
function toRegister() {
    window.location.href = "./register.html";
}