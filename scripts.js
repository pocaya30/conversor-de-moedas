const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues (){
    const InputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // real value
    const currencyValueConverted = document.querySelector(".currency-value") //other currencys
    
    console.log(currencySelect.value)
    const dolarToday = 4.95
    const euroToday = 5.33

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
    
    convertValues ()
    
}

currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click",convertValues)
