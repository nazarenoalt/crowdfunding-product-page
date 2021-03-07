const hideActiveSection = () => {
    const element = document.querySelector('.active-section');
    element.classList.remove('active-section');
    background.style.display = 'none';

    if(element === menu_container) menu_icon.src = '../images/icon-hamburger.svg';
}