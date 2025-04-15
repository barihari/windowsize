// Create the display element
const sizeDisplay = document.createElement('div');
sizeDisplay.id = 'window-size-display';
document.body.appendChild(sizeDisplay);

// Function to update the display
function updateSizeDisplay() {
    sizeDisplay.textContent = `${window.innerWidth}px`;
}

// Initial update
updateSizeDisplay();

// Update on window resize
window.addEventListener('resize', updateSizeDisplay); 