const success_button = document.querySelector('#success_button')
const successful_back = document.querySelector('#successful_back')
const back_project = document.querySelector('.card.back-project');
function displayNone(element) {
    background.style.display = 'none';
    element.classList.remove('active-section')
}

function displayBackProject(element) {
    element.classList.add('active-section')

    console.log(element.classList.value);
    back_project.style.display = 'none';
    back_project.classList.remove('active-section');
}

function displayBlock(element) {
    element.classList.add('active-section')
    console.log(element.classList.value);
    background.style.display = 'block';
}
