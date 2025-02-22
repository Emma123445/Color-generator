
function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256); // Valeur entre 0 et 255
    const g = Math.floor(Math.random() * 256); // Valeur entre 0 et 255
    const b = Math.floor(Math.random() * 256); // Valeur entre 0 et 255
    return `rgb(${r}, ${g}, ${b})`; 
}