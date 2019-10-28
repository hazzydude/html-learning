

let newPassword = document.getElementById("newPassword");
let enteredUsername = new URLSearchParams(window.location.search).get("EnteredUsername");

function updateUser() {

    fetch('https://us-central1-qac-sandbox-531db.cloudfunctions.net/setUser', {
        method: 'POST',
        body: JSON.stringify({ username: enteredUsername, password: newPassword.value }),
        headers: { 'Content-Type': 'application/json' }
    }).then();
}

function deleteUser() {
    debugger;
    fetch('https://us-central1-qac-sandbox-531db.cloudfunctions.net/deleteUser?username=' + enteredUsername, {
        method: 'DELETE'
    })
        .then();
}

