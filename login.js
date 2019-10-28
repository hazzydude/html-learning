let inputUsername = document.getElementById("inputUsername");
let inputPassword = document.getElementById("inputPassword");

function toUserProfile() {
    fetch('https://us-central1-qac-sandbox-531db.cloudfunctions.net/login?username=' + inputUsername.value + '&password=' + inputPassword.value)
        .then();
    enteredUsername = inputUsername.value;
    window.location.href = './userProfile.html?EnteredUsername=' + inputUsername.value;

}
function toRegister() {
    window.location.href = "./register.html";
}

function verifyUser() {
    fetch('https://us-central1-qac-sandbox-531db.cloudfunctions.net/getUsers')
        .then(res => res.json())
        .then(json => usercheck(json));

}

function usercheck(data) {
    for (let current of data) {
        if (current === inputUsername && current.password === inputPassword.value) {
            return true;
        } else {
            return false;
        }
    }
}
