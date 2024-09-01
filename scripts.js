const convertButton = document.querySelector('#convert-button');
const currencyFrom = document.querySelector('.currency-from');
const currencyImg = document.querySelector('.currency-img')
const inputCurrencyValue = document.querySelector('.input-currency');

// convert from
const currencyFromSelect = document.querySelector('#convert-from-select');
currencyFromSelect.addEventListener('change', changeCurrencyFrom);
const currencyImgSelect = document.querySelector('.from-img');


function changeCurrencyFrom() {
    if(currencyFromSelect.value == 'real') {
        currencyFrom.innerHTML = 'Real';
        currencyImgSelect.src = './assets/ea5a0aa77537e7939a6742b588d600a6.png';

    } else if (currencyFromSelect.value == 'dolar') {
        currencyFrom.innerHTML = 'Dólar';
        currencyImgSelect.src = './assets/9a7dabec33201d95eb1a05fdea133971.png';
        
    } else if (currencyFromSelect.value == 'euro') {
        currencyFrom.innerHTML = 'Euro';
        currencyImgSelect.src = './assets/359fe6050c52b9c7479798be6e1584e2.png';


    } else if (currencyFromSelect.value == 'libra') {
        currencyFrom.innerHTML = 'Libra Esterlina';
        currencyImgSelect.src = './assets/3223b56d3c95277c822d9484d1bc9757.png';

    } else if (currencyFromSelect.value == 'bitcoin') {
        currencyFrom.innerHTML = 'Bitcoin';
        currencyImgSelect.src = './assets/f494cf16ed7a323da67f9e4332aca36b.png';

    } 
};


//convert to

const currencySelect = document.querySelector('#currency-select');
function convertValues() {
    //from real
    const dolarToday = 5.49;
    const euroToday = 6.14;
    const libraToday = 7.25;
    const bitcoinToday = 346665.56;

    //from dolar

     // resultado
    const currencyValueConverted = document.querySelector('.currency-value'); // outras moedas

    // conversão de:
    // alteração de identificação de meodas.
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert');
    const currencyFromSelect = document.querySelector('#convert-from-select').value;
    if(currencyFromSelect == 'real') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue.value); 

    } else if(currencyFromSelect == 'dolar') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue.value); 
    }



    //Conversão para:
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue.value / dolarToday);
    } else if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue.value / euroToday);
    } else if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue.value / libraToday);
    } else if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "decimal",
            minimumFractionDigits: 1,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue.value / bitcoinToday) + " BTC";
    } else if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue.value / bitcoinToday);
    }
};
function changeCurrency() {
    const currencyName = document.getElementById('currency-name');

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './assets/9a7dabec33201d95eb1a05fdea133971.png'
        convertValues()
    } else if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/359fe6050c52b9c7479798be6e1584e2.png'
        convertValues()
    } else if (currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra Esterlina'
        currencyImg.src = './assets/3223b56d3c95277c822d9484d1bc9757.png'
        convertValues()
    } else if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/f494cf16ed7a323da67f9e4332aca36b.png'
        convertValues()
    }
};
currencySelect.addEventListener('change', changeCurrency);
convertButton.addEventListener('click', convertValues);

