export function createPledgeElement(card) {
    const divEl = document.createElement('div');
    divEl.classList.add('enter-pledge');
    
    const pEl = document.createElement('p');
    pEl.classList.add('description');
    const textDescription = document.createTextNode('Enter your pledge');
    pEl.append(textDescription);

    const inputEl = document.createElement('input');
    inputEl.classList.add('pledge-input');
    inputEl.value = '25';
    inputEl.type = 'number';
    inputEl.placeholder = '$';

    const buttonEl = document.createElement('button');
    buttonEl.classList.add('button');
    const textButton = document.createTextNode('Continue');
    buttonEl.setAttribute('onclick', 'displayBackProject(successful_back)')
    buttonEl.append(textButton);

    divEl.append(pEl, inputEl, buttonEl);
    card.appendChild(divEl);
}

