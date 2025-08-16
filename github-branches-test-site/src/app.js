// This file contains the JavaScript code for the website.

document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.createElement('h1');
    messageElement.textContent = 'Welcome to the GitHub Branches Test Site!';
    document.body.appendChild(messageElement);

    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
});