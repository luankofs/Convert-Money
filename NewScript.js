const apiEndpoint = 'https://economia.awesomeapi.com.br/json/last/';

// Função para obter as taxas de câmbio
async function getExchangeRates(fromCurrency, toCurrency) {
    try {
        const response = await fetch(`${apiEndpoint}${fromCurrency}-${toCurrency}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();

        console.log('Response data:', data);
        
        //chave para acessar os dados no padrão FROM-TO
        const key = `${fromCurrency}${toCurrency}`;
        if (!data[key]) {
            throw new Error('Rates data is undefined');
        }
        
        const rate = parseFloat(data[key].bid);
        console.log('Taxa de câmbio obtida com sucesso:', rate); // Verificar se a taxa é retornada corretamente
        return rate;
    } catch (error) {
        console.error('Erro ao obter taxas de câmbio:', error);
        return null;
    }
}

const convertButton = document.querySelector('#convert-button');
const currencyFrom = document.querySelector('.currency-from');
const currencyImg = document.querySelector('.currency-img');
const inputCurrencyValue = document.querySelector('.input-currency');
const currencyFromSelect = document.querySelector('#convert-from-select');
const currencySelect = document.querySelector('#currency-select');
const currencyValueConverted = document.querySelector('.currency-value');
const currencyValueToConvert = document.querySelector('.currency-value-to-convert');

currencyFromSelect.addEventListener('change', changeCurrencyFrom);
currencySelect.addEventListener('change', changeCurrency);
convertButton.addEventListener('click', convertValues);

function changeCurrencyFrom() {
    const currencyMapping = {
        'real': { code: 'BRL', name: 'Real', img: './assets/ea5a0aa77537e7939a6742b588d600a6.png' },
        'dolar-estados-unidos': { code: 'USD', name: 'Dólar', img: './assets/9a7dabec33201d95eb1a05fdea133971.png' },
        'euro': { code: 'EUR', name: 'Euro', img: './assets/359fe6050c52b9c7479798be6e1584e2.png' },
        'libra': { code: 'GBP', name: 'Libra Esterlina', img: './assets/3223b56d3c95277c822d9484d1bc9757.png' },
        'peso-argentino': { code: 'ARS', name: 'Peso', img: './assets/3909430.png' },
        'iene': { code: 'JPY', name: 'Iene', img: './assets/197604.png' },
        'peso-uruguaio': { code: 'UYU', name: 'Peso Uruguaio', img: './assets/197599.png' },
        'dolar-canadense': { code: 'CAD', name: 'Dolar Canadense', img: './assets/197430.png'}
    };
    const currency = currencyMapping[currencyFromSelect.value];
    currencyFrom.innerHTML = currency.name;
    document.querySelector('.from-img').src = currency.img;
    convertValues();
}

function changeCurrency() {
    const currencyMapping = {
        'dolar-estados-unidos': { code: 'USD', name: 'Dólar Americano', img: './assets/9a7dabec33201d95eb1a05fdea133971.png' },
        'euro': { code: 'EUR', name: 'Euro', img: './assets/359fe6050c52b9c7479798be6e1584e2.png' },
        'libra': { code: 'GBP', name: 'Libra Esterlina', img: './assets/3223b56d3c95277c822d9484d1bc9757.png' },
        'peso-argentino': { code: 'ARS', name: 'Peso', img: './assets/3909430.png' },
        'real': { code: 'BRL', name: 'Real Brasileiro', img: './assets/ea5a0aa77537e7939a6742b588d600a6.png' },
        'iene': { code: 'JPY', name: 'Iene', img: './assets/197604.png' },
        'peso-uruguaio': { code: 'UYU', name: 'Peso Uruguaio', img: './assets/197599.png' },
        'dolar-canadense': { code: 'CAD', name: 'Dolar Canadense', img: './assets/197430.png' }
    };
    const currency = currencyMapping[currencySelect.value];
    document.getElementById('currency-name').innerHTML = currency.name;
    currencyImg.src = currency.img;
    convertValues();
}

async function convertValues() {
    const currencyMapping = {
        'real': 'BRL',
        'dolar-estados-unidos': 'USD',
        'euro': 'EUR',
        'libra': 'GBP',
        'peso-argentino': 'ARS',
        'peso-uruguaio': 'UYU',
        'iene': 'JPY',
        'dolar-canadense': 'CAD'
    };

    const fromCurrency = currencyMapping[currencyFromSelect.value];
    const toCurrency = currencyMapping[currencySelect.value];
    
    // Verificação de moedas iguais
    if (fromCurrency === toCurrency) {
        currencyValueConverted.innerHTML = "Câmbio repetido. Para converter, selecione moedas diferentes.";
        currencyValueConverted.classList.add('txt-error');
        currencyValueToConvert.innerHTML = "";
        return;
    } else {
        currencyValueConverted.classList.remove('txt-error');
    }
    
    const amount = parseFloat(inputCurrencyValue.value.replace(/[^0-9.-]+/g, ""));

    const rate = await getExchangeRates(fromCurrency, toCurrency);
    if (!rate) {
        currencyValueConverted.innerHTML = "Erro ao obter taxas de câmbio.";
        return;
    }

    const convertedAmount = amount * rate;

    currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: toCurrency
    }).format(convertedAmount);

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: fromCurrency
    }).format(amount);

    // Logs para depuração
    console.log('fromCurrency:', fromCurrency);
    console.log('toCurrency:', toCurrency);
    console.log('rate:', rate);
    console.log('amount:', amount);
    console.log('convertedAmount:', convertedAmount);
}
