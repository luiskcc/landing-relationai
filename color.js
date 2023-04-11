const elements = document.querySelectorAll('.color-change');

elements.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = getRandomColor();
        element.style.color = '#FFF';
    });

    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = '';
        element.style.color = '';
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}