const colorDisplay = document.createElement('h2');
document.body.appendChild(colorDisplay);

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeBackgroundColor() {
    const color = getRandomRGBColor();
    document.body.style.backgroundColor = color;
    colorDisplay.textContent = color;
}

setInterval(changeBackgroundColor, 1000);
