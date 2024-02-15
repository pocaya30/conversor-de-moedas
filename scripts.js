const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues (){
    const InputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // real value
    const currencyValueConverted = document.querySelector(".currency-value") //other currencys
    
    console.log(currencySelect.value)
    const dolarToday = 4.95
    const euroToday = 5.33
    const BitcoinToday = 258.113
    const LibraToday = 6.24

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(InputCurrencyValue/dolarToday)
    }
    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(InputCurrencyValue/euroToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(InputCurrencyValue/LibraToday)
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en",{
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8
        }).format(InputCurrencyValue/BitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(InputCurrencyValue)
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")
    if(currencySelect.value == "dolar"){
        currencyName.innerHTML ="Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
    }
    if(currencySelect.value == "euro"){
        currencyName.innerHTML ="Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML ="BitCoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML ="Libra Esterlina"
        currencyImg.src = "./assets/libra.png"
    }
    
    convertValues ()
    
}

currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click",convertValues)
