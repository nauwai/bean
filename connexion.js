document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const alertForm = document.getElementById("alert")

    form.addEventListener('submit', function (event) {
        const pseudo = document.getElementById('pseudo').value;
        const password = document.getElementById("password").value;

        if (!pseudo || !password || pseudo == password) {
            alertForm.style.display = "flex"
            event.preventDefault();
        }
    });
});
