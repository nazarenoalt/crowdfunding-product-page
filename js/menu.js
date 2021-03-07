const menu_icon = document.getElementById('menu_icon');
const menu_container = document.getElementById('menu_container');
const background = document.getElementById('background');
let turned = false;

menu_icon.addEventListener('click', function() {
    if(turned === false) {
        menu_icon.src = '../images/icon-close-menu.svg';
        background.style.display = 'block';
        menu_container.classList.add('active-section')
        turned = true;
    } else {
        menu_icon.src = '../images/icon-hamburger.svg';
        background.style.display = 'none';
        menu_container.classList.remove('active-section')
        turned = false;
    }
})
