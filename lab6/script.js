document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value.trim();

    let message = document.getElementById("message");

    if (name === "") {
        message.innerHTML = "Name cannot be empty.";
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.innerHTML = "Please enter a valid email address.";
        return;
    }

    if (age === "" || isNaN(age) || Number(age) < 18 || Number(age) > 100) {
        message.innerHTML = "Age must be a number between 18 and 100.";
        return;
    }

    message.innerHTML = "Form submitted successfully!";
});