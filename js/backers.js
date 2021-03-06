//statistics variables
const target = 100000;
let progress = 89914;
let backers = 5007;

//[function] Formatting integers into currency
const formatCurrency = (locales, currency, fractionDigits, number) => {
    return new Intl.NumberFormat(locales, {
        style: 'currency',
        currency: currency,
        minimumFranctionDigits: fractionDigits,
    }).format(number)
}
backers_label.innerHTML = backers;
target_label.innerHTML = `of ${formatCurrency("en-US", "USD", 2, target)} backed`;
progress_label.innerHTML = formatCurrency("en-US","USD",2,progress)

//Assigning values to the progress bar
progress_bar.min = 0;
progress_bar.max = target;
progress_bar.value = progress;

//[function] Entering pledge into the total pledged value
const inputPledge = () => {
    const pledge_input = document.querySelector('.pledge-input');
    if(pledge_input !== null) {
        if(pledge_input.value > 0 ) {
            progress += parseInt(pledge_input.value);
            backers++
            backers_label.innerHTML = backers;
            progress_label.innerHTML = formatCurrency("en-US","USD",2,progress)
            progress_bar.value = progress;
            displaySuccessfulBacking(successful_back)
        } if(pledge_input.value <= 0) {
            alert('The inserted number is invalid');
        } 
    } else if(pledge_input === null) {
        backers++
        displaySuccessfulBacking(successful_back)
    }
}

//Function Alerta de Exito
const displaySuccessfulBacking = (element) => {
    element.classList.add('active-section')
    back_project.classList.remove('active-section');
}
