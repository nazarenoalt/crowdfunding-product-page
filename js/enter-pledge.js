export function createPledgeElement(card) {

    const divEl = document.createElement('div');
    divEl.classList.add('enter-pledge');
    const noReward = card.classList.contains('no-reward');
    let pEl;
    let textDescription;
    let inputEl;

    if (noReward === false) {

        pEl = document.createElement('p');
        pEl.classList.add('description');
        textDescription = document.createTextNode('Enter your pledge');
        pEl.append(textDescription);

        inputEl = document.createElement('input');
        inputEl.classList.add('pledge-input');
        inputEl.value = '25';
        inputEl.type = 'number';
        inputEl.placeholder = '$';

    } else {
        divEl.classList.add('no-reward');
    }

    const buttonEl = document.createElement('button');
    buttonEl.classList.add('button');
    const textButton = document.createTextNode('Continue');
    buttonEl.setAttribute('onclick', 'displayBackProject(successful_back)')
    buttonEl.append(textButton);

    !card.classList.contains('no-reward')
        ? divEl.append(pEl, inputEl, buttonEl)
        : divEl.append(buttonEl);
        
    card.appendChild(divEl);
}
