function checkLogin() {
    // Hardcoded username and password
    const correctUsername = "altfortts@gmail.com";
    const correctPassword = "Cars11";

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if credentials match
    if (username === correctUsername && password === correctPassword) {
        document.getElementById("loginBox").style.display = "none"; // Hide login box
        document.getElementById("content").style.display = "block"; // Show content
    } else {
        document.getElementById("errorMessage").innerText = "Invalid login. Try again.";
    }
}
