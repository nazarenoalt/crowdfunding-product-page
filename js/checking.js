import { createPledgeElement } from './enter-pledge.js';

const radioList = document.querySelectorAll('.back-product.radio')
const cardList = document.querySelectorAll('.back-product.card')

for(let i = 0; i < radioList.length; i++) {
    radioList[i].addEventListener('change', function(event) {
        const lastActive = document.querySelector('.card.active');
        if(lastActive) {
            lastActive.classList.remove('active');
            if(!lastActive.classList.contains('no-reward')) {
                lastActive.querySelector('.enter-pledge').remove();
            }
        }
        event.target.closest('.card').classList.add('active');
        if(!cardList[i].classList.contains('no-reward')) {
            createPledgeElement(cardList[i]);
        }
    })
}

