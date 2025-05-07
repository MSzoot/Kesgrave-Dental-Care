const lastUpdateDate = "05.2025"; // Update this date when needed

// Function to insert the date into the page
function displayLastUpdate(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        el.textContent = lastUpdateDate;
    });
}