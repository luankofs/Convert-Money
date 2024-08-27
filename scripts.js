const convertButton = document.querySelector('#convert-button');
const currencySelect = document.querySelector('#currency-select');

function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value;
    const dolarToday = 5.49;
    const euroToday = 6.14;
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert'); // valor em real
    const currencyValueConverted = document.querySelector('.currency-value'); // outras moedas



    // conversão de:
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);


    //Conversão para:
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    } else if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }
};

function changeCurrency() {
    const currencyName = document.getElementById('currency-name');
    const currencyImg = document.querySelector('.currency-img');

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './assets/9a7dabec33201d95eb1a05fdea133971.png'
        convertValues()
    } else if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/359fe6050c52b9c7479798be6e1584e2.png'
        convertValues()
    }
};

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues);