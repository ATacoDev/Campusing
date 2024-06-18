
// Scrolling for features
document.addEventListener('DOMContentLoaded', (event) => {
    const featuresLink = document.querySelector('.featuresLink');
    featuresLink.addEventListener('click', (event) => {
        event.preventDefault();
        const targetElement = document.getElementById('hanging-icons');
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
