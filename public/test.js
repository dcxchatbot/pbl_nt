document.addEventListener('DOMContentLoaded', function () {
    // Add a delay before simulating the click
    setTimeout(function () {
        // Simulate a click on the existing "readme-button"
        var readmeButton = document.getElementById('readme-button');
        if (readmeButton) {
            readmeButton.click();
        }
    }, 1000); // 1-second delay
});