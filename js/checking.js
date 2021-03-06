import { createPledgeElement } from './enter-pledge.js';

const radioList = document.querySelectorAll('.back-product.radio')
const cardList = document.querySelectorAll('.back-product.card')
for(let i = 0; i < cardList.length; i++) {
    cardList[i].addEventListener('click', function(event) {

        //[non-touch] elements wont be reached by event-listener actions
        const nonTouch = document.querySelectorAll('.non-touch');
        if(event.target !== nonTouch[2]) {

            const lastActive = document.querySelector('.card.active');
            radioList[i].checked = true;
            if(lastActive) {
                lastActive.classList.remove('active');
                    lastActive.querySelector('.enter-pledge').remove();
            }
            event.target.closest('div.card').classList.add('active');
            createPledgeElement(cardList[i]);

        }
        
    })
}

