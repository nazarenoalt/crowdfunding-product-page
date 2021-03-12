const target = 100000;
let progress = 89914;

const formatCurrency = (locales, currency, fractionDigits, number) => {
    return new Intl.NumberFormat(locales, {
        style: 'currency',
        currency: currency,
        minimumFranctionDigits: fractionDigits,
    }).format(number)
    
}

target_label.innerHTML = `of ${formatCurrency("en-US", "USD", 2, target)} backed`;
progress_label.innerHTML = formatCurrency("en-US","USD",2,progress)

progress_bar.min = 0;
progress_bar.max = target;
progress_bar.value = progress;
