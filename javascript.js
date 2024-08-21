const convertFor = document.querySelector('#convert-for');
convertFor.addEventListener('click', changingCurrency);

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

function changingCurrency() {
    console.log('clique')
    const convertForValue = document.querySelector('#convert-for').value;
    if(convertFor.value === 'dolar') {
        removeActiveClass();
        imgForDolar.classList.add('active');
    } else if(convertFor.value === 'euro') {
        removeActiveClass();
        imgForEuro.classList.add('active');
    } else if(convertFor.value === 'bitcoin') {
        removeActiveClass();
        imgForBit.classList.add('active');
    } else if(convertFor.value === 'libra') {
        removeActiveClass();
        imgForLibra.classList.add('active');
    }
}
