const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const moneySelect = document.querySelector(".money-select")




function convertValues (){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") 
    const currencyValueConverted = document.querySelector(".currency-value") 
    
    console.log(currencySelect.value) 
    console.log(moneySelect.value)  
    console.log(inputCurrencyValue)

    const dolarToday = 4.95
    const euroToday = 5.33
    const BitcoinToday = 257.237
    const LibraToday = 6.24
    const realtoday = 1

    //dollar conversion
    if(currencySelect.value == "dolar" && moneySelect.value == "brl"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToday)
    }

    if(currencySelect.value == "dolar" && moneySelect.value == "eur"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * euroToday / dolarToday)
    }

    if(currencySelect.value == "dolar" && moneySelect.value == "btc"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * BitcoinToday / dolarToday)
    }

    if(currencySelect.value == "dolar" && moneySelect.value == "gbp"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * LibraToday / dolarToday)
    }
    if(currencySelect.value == "dolar" && moneySelect.value == "uss"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

// euro conversion
    if(currencySelect.value == "euro" && moneySelect.value == "brl"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }

    if(currencySelect.value == "euro" && moneySelect.value == "uss"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * dolarToday / euroToday)
    }

    if(currencySelect.value == "euro" && moneySelect.value == "btc"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * BitcoinToday / euroToday)
    }

    if(currencySelect.value == "euro" && moneySelect.value == "gbp"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * LibraToday / euroToday)
    }

    if(currencySelect.value == "euro" && moneySelect.value == "eur"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }


//libra conversion

if(currencySelect.value == "libra" && moneySelect.value == "brl"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue/LibraToday)
}

if(currencySelect.value == "libra" && moneySelect.value == "uss"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue * dolarToday /LibraToday)
}

if(currencySelect.value == "libra" && moneySelect.value == "btc"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue * BitcoinToday /LibraToday)
}

if(currencySelect.value == "libra" && moneySelect.value == "eur"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue * euroToday /LibraToday)
}

if(currencySelect.value == "libra" && moneySelect.value == "gbp"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue)
}


//bitcoin conversion

if(currencySelect.value == "bitcoin" && moneySelect.value == "brl"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en",{
        style: "currency",
        currency: "BTC",
        minimumFractionDigits: 8
    }).format(inputCurrencyValue/BitcoinToday)
}

if(currencySelect.value == "bitcoin" && moneySelect.value == "uss"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en",{
        style: "currency",
        currency: "BTC",
        minimumFractionDigits: 8
    }).format(inputCurrencyValue * dolarToday/BitcoinToday)
}

if(currencySelect.value == "bitcoin" && moneySelect.value == "eur"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en",{
        style: "currency",
        currency: "BTC",
        minimumFractionDigits: 8
    }).format(inputCurrencyValue * euroToday/BitcoinToday)
}

if(currencySelect.value == "bitcoin" && moneySelect.value == "gbp"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en",{
        style: "currency",
        currency: "BTC",
        minimumFractionDigits: 8
    }).format(inputCurrencyValue * LibraToday /BitcoinToday)
}

if(currencySelect.value == "bitcoin" && moneySelect.value == "btc"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en",{
        style: "currency",
        currency: "BTC",
        minimumFractionDigits: 8
    }).format(inputCurrencyValue)
}



//real conversion

if(currencySelect.value == "real" && moneySelect.value == "brl"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

if(currencySelect.value == "real" && moneySelect.value == "uss"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue * dolarToday/realtoday)
}

if(currencySelect.value == "real" && moneySelect.value == "eur"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue * euroToday/realtoday)
}

if(currencySelect.value == "real" && moneySelect.value == "btc"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue * BitcoinToday/realtoday)
}

if(currencySelect.value == "real" && moneySelect.value == "gbp"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue * LibraToday/realtoday)
}


    if (moneySelect.value == "uss") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (moneySelect.value == "eur") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (moneySelect.value == "brl") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (moneySelect.value == "gbp") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB",{
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (moneySelect.value == "btc") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en",{
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8
        }).format(inputCurrencyValue)
    }


    
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

    if(currencySelect.value == "real"){
        currencyName.innerHTML ="Real Brasileiro"
        currencyImg.src = "./assets/brasil.png"
    }
    
    
    
}

function changeMoney (){
    const moneyName = document.getElementById("currency-name-first")
    const moneyImg = document.querySelector(".currency-img-one")

    if(moneySelect.value == "brl"){
        moneyName.innerHTML = "Real Brasileiro"
        moneyImg.src = "./assets/brasil.png"
    }

    if(moneySelect.value == "uss"){
        moneyName.innerHTML = "Dólar Americano"
        moneyImg.src = "./assets/dolar.png"
    }

    if(moneySelect.value == "eur"){
        moneyName.innerHTML = "Euro"
        moneyImg.src = "./assets/euro.png"
    }

    if(moneySelect.value == "btc"){
        moneyName.innerHTML = "Bitcoin"
        moneyImg.src = "./assets/bitcoin.png"
    }

    if(moneySelect.value == "gbp"){
        moneyName.innerHTML = "Libra Esterlina"
        moneyImg.src = "./assets/libra.png"
    }

    convertValues ()
}






moneySelect.addEventListener("change",changeMoney)
currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click",convertValues)
currencySelect.addEventListener("change",convertValues)
