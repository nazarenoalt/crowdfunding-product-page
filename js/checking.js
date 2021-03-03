const radioList = document.querySelectorAll('.back-product.radio')
const cardList = document.querySelectorAll('.back-product.card')

for(let i = 0; i < radioList.length; i++) {
    radioList[i].addEventListener('change', function(event) {
        const lastActive = document.querySelector('.card.active');
        if(lastActive) lastActive.classList.remove('active');
        event.target.closest('.card').classList.add('active');
        })
    }