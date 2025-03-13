function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('personalDetails').style.display = 'block';
    } else {
        alert("Invalid username or password.");
    }
}

function submitPersonalDetails(event) {
    event.preventDefault();
    alert("Personal details submitted successfully!");
    document.getElementById('personalDetails').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
}

function showAgriculturePage() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('agriculturePage').style.display = 'block';
}

function showHealthPage() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('healthPage').style.display = 'block';
}

function showEducationPage() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('educationPage').style.display = 'block';
}

function showJobsPage() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('jobsPage').style.display = 'block';
}

function goBackToHomePage() {
    document.getElementById('agriculturePage').style.display = 'none';
    document.getElementById('healthPage').style.display = 'none';
    document.getElementById('educationPage').style.display = 'none';
    document.getElementById('jobsPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
}