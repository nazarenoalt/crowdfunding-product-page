import { createPledgeElement } from './enter-pledge.js';

const radioList = document.querySelectorAll('.back-product.radio')
const cardList = document.querySelectorAll('.back-product.card')
for(let i = 0; i < cardList.length; i++) {
    cardList[i].addEventListener('click', function(event) {
        const lastActive = document.querySelector('.card.active');
        radioList[i].checked = true;
        if(lastActive) {
            lastActive.classList.remove('active');
                lastActive.querySelector('.enter-pledge').remove();
        }
        event.target.closest('.card').classList.add('active');
            createPledgeElement(cardList[i]);
        })
}

