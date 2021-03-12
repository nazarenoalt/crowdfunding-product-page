
export function createPledgeElement(card) {

    const divEl = document.createElement('div');
    divEl.className = 'enter-pledge non-touch';
    const noReward = card.classList.contains('no-reward');
    let pEl;
    let textDescription;
    let inputEl;

    if (!noReward) {

        pEl = document.createElement('p');
        pEl.className = 'description non-touch';
        textDescription = document.createTextNode('Enter your pledge');
        pEl.append(textDescription);

        inputEl = document.createElement('input');
        inputEl.className = 'pledge-input non-touch';
        inputEl.value = '25';
        inputEl.type = 'number';
        inputEl.placeholder = '$';

    } else {
        divEl.classList.add('no-reward');
    }

    const buttonEl = document.createElement('button');
    buttonEl.className = 'button back-button';
    buttonEl.setAttribute('id', 'back_button')
    const textButton = document.createTextNode('Continue');
    buttonEl.setAttribute('onclick', 'inputPledge();reduceStock();')
    buttonEl.append(textButton);

    !card.classList.contains('no-reward')
        ? divEl.append(pEl, inputEl, buttonEl)
        : divEl.append(buttonEl);
        
    card.appendChild(divEl);
}
