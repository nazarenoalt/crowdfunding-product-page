//stock variables
let stock_bambooStand = 101;
let stock_blackStand = 164;
let stock_mahogamyStand = 10;

//Assigning initial stock - write class selector with dot
const writeStock = (classElement, number) => document.querySelectorAll(classElement).forEach(element => element.innerHTML = number)
    writeStock('.number.bamboo', stock_bambooStand);
    writeStock('.number.black-edition', stock_blackStand);
    writeStock('.number.mahogamy', stock_mahogamyStand);

const reduceStock = () => {
    if(back_button.closest('.back-product').dataset.product === 'bamboo-stand') {
        stock_bambooStand--
        writeStock('.number.bamboo', stock_bambooStand);
    } else if (back_button.closest('.back-product').dataset.product === 'black-stand') {
        stock_blackStand--
        writeStock('.number.black-edition', stock_blackStand);
    } else if (back_button.closest('.back-product').dataset.product === 'mahogamy') {
        stock_mahogamyStand--
        writeStock('.number.mahogamy', stock_mahogamyStand);
    }
}