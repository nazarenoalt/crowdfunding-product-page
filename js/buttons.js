

const success_button = document.querySelector('#success_button');
const successful_back = document.querySelector('#successful_back')
const back_project = document.querySelector('.card.back-project');

const displayNone = (element) => {
    background.style.display = 'none';
    element.classList.remove('active-section')
}

const displaySuccessfulBacking = (element) => {
    element.classList.add('active-section')
    back_project.classList.remove('active-section');
}

const displayBlock = (element) => {
    element.classList.add('active-section')
    background.style.display = 'block';
}

const checkBookmark = () => {
    let checked = bookmark.dataset.checked;

    if(checked === 'false') {
        bookmark.src = 'images/icon-bookmark-checked.svg'
        bookmark.dataset.checked = 'true'
    } else {
        bookmark.src = 'images/icon-bookmark.svg'
        bookmark.dataset.checked = 'false'

    }
}

//Continue Button from Back Project
