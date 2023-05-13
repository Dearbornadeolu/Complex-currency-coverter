document.addEventListener("DOMContentLoaded", ()=>{
    const initialCurrency = document.getElementById("currency")
    const newCurrency = document.getElementById("convertTo")
    const amount = document.getElementById("currencyToChange")
    const covert = document.getElementById("covert")
    let displayOut = document.getElementById("result")

    const apiKey = "Add your APIKEY"
    const apiUrl = "https://api.api-ninjas.com/v1/convertcurrency?"

    covert.addEventListener('click', ()=>{
        const firstCurrency = initialCurrency.value
        const secondCurrency = newCurrency.value

        const amountTotal = amount.value 
        if (amountTotal < 1){
            alert("empty")
        } else{
            const url = apiUrl+"want="+`${secondCurrency}`+"&have="+`${firstCurrency}`+"&amount="+amountTotal
            console.log(url)
            fetch(url, {
                headers:{
                    'X-API-KEY': apiKey
                }
            }).then(response => response.json()).then(result => {
                displayOut.innerText = firstCurrency +" "+ amountTotal +" = "+ secondCurrency+ " " +result.new_amount 
            }).catch(error => console.log(error))
        }
    })
})