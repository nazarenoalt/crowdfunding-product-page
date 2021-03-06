const success_button = document.querySelector('#success_button')
const successful_back = document.querySelector('#successful_back')
const back_project = document.querySelector('.card.back-project');
function displayNone(element) {
    element.style.display = 'none';
    background.style.display = 'none';
}

function displayBackProject(element) {
    element.style.display = 'block';
    back_project.style.display = 'none';
}

function displayBlock(element) {
    element.style.display = 'block';
    background.style.display = 'block';
}