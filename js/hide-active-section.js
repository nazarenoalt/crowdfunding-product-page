const hideActiveSection = () => {
    const element = document.querySelector('.active-section');
    element.classList.remove('active-section');
    background.style.display = 'none';
}