//Elements

const convertFor = document.querySelector('#convert-for');
convertFor.addEventListener('click', changingCurrency);
const convertMoney = document.querySelector('button');


//Images For 
const imgForDolar = document.querySelector('img[alt*="dolar"]');
const imgForEuro = document.querySelector('img[alt*="logo-euro"]');
const imgForBit = document.querySelector('img[alt*="logo-bitcoin"]');
const imgForLibra = document.querySelector('img[alt*="logo-libra"]');

function removeActiveClass() {
    imgForDolar.classList.remove('active');
    imgForEuro.classList.remove('active');
    imgForBit.classList.remove('active');
    imgForLibra.classList.remove('active');
}

// switch image and currency name
function changingCurrency() {
    const valueFromHTML = document.querySelector('.currencyFromName');
    const valueFromNum = document.querySelector('.currencyFromValue');
    if(convertFor.value === 'dolar') {
        removeActiveClass();
        imgForDolar.classList.add('active');
        valueFromHTML.innerHTML = 'Dolar Americano'
        valueFromNum.innerHTML = `U$ 0,00`;
    } else if(convertFor.value === 'euro') {
        removeActiveClass();
        imgForEuro.classList.add('active');
        valueFromHTML.innerHTML = 'Euro'
        valueFromNum.innerHTML = `€ 0,00`;
    } else if(convertFor.value === 'bitcoin') {
        removeActiveClass();
        imgForBit.classList.add('active');
        valueFromHTML.innerHTML = 'Bitcoin';
        valueFromNum.innerHTML = `BTC 0,00`;
    } else if(convertFor.value === 'libra') {
        removeActiveClass();
        imgForLibra.classList.add('active');
        valueFromHTML.innerHTML = 'Libra';
        valueFromNum.innerHTML = `£ 0,00`;
    }
}

convertMoney.addEventListener('click', conversionMoney)

function conversionMoney() {
    const convertFromValue = +document.querySelector('#convertValue').value.replace(',', '.');
    const convertedFromValue = document.querySelector('.currencyForValue');
    const cotDolar = 5.42;
    const cotEuro = 6.11;
    const cotLibra = 7.18;
    const cotBit = 334314.93;

    //mostrar o BRL.
    const formattedValue = convertFromValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    const currencyValueFrom = document.querySelector('.currencyFromValue');
    currencyValueFrom.innerHTML = formattedValue
    console.log(formattedValue)
    
    // conversor
    if(convertFor.value === "dolar") {
        const convertedValue = (convertFromValue / cotDolar).toFixed(2);
        convertedFromValue.innerHTML = `U$ ${convertedValue}`;
    } else if(convertFor.value === "euro") {
        const convertedValue = (convertFromValue / cotEuro).toFixed(2);
        convertedFromValue.innerHTML = `€ ${convertedValue}`;
    } else if(convertFor.value === "libra") {
        const convertedValue = (convertFromValue / cotLibra).toFixed(2);
        convertedFromValue.innerHTML = `£ ${convertedValue}`;
    } else if(convertFor.value === "bitcoin") {
        const convertedValue = (convertFromValue / cotBit).toFixed(2);
        convertedFromValue.innerHTML = `BTC ${convertedValue}`;
    }
};

