// Display a welcome message in the console
document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to my portfolio!');
});

// Function to update the content of a paragraph when a button is clicked
function updateContent() {
    const message = "Thanks for visiting my portfolio! Feel free to explore my work.";
    document.getElementById('message').innerText = message;
}

// Add an event listener to the button
document.getElementById('updateButton').addEventListener('click', updateContent);
