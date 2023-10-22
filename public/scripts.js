document.addEventListener("DOMContentLoaded", function () {
    const messagePlaceholder = document.getElementById("message-placeholder");

    // Fetch the message from your Express route
    fetch('/message')
        .then(response => response.json())
        .then(data => {
            messagePlaceholder.textContent = data.message;
        })
        .catch(error => console.error(error));
});