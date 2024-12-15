const currencies = [];
const selectFrom = document.querySelector("#selectFrom");
const selectTo = document.querySelector("#selectTo");
const button = document.querySelector("button");
const amount = document.querySelector("#amount");
const resultElement = document.querySelector("#result")


const currencyConverter = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=currencies');
        const responseJson = await response.json();

        for (let index = 1; index < responseJson.length; index++) {
            const code = Object.keys(responseJson[index]["currencies"])[0];
            if (!code) continue;
            const currency = `${code} - ${responseJson[index]["currencies"][code]["name"]}`;
            if (currencies.includes(currency)) continue;
            currencies.push(currency);
        }
        createOptions(currencies);
    }
    catch (error) {
        console.log(error)
        resultElement.textContent = "Some error occured please try after some time";
    }
}

const createOptions = (currencies) => {
    currencies.sort();
    currencies.forEach(currencyOption => {
        const fromOption = document.createElement("option");
        fromOption.textContent = currencyOption;
        fromOption.setAttribute("value", currencyOption.slice(0, 3));
        const toOption = fromOption.cloneNode(true);
        selectFrom.appendChild(fromOption);
        selectTo.appendChild(toOption);
    });
}

const convert = async () => {
    try {
        const fromValue = selectFrom.value;
        const toValue = selectTo.value;
        const amountValue = amount.value;
        if (amountValue === "" || amountValue < 1) return
        resultElement.textContent = "Calculating...";
        const response = await fetch(`https://v6.exchangerate-api.com/v6/0109417dbf65192b207ae57d/pair/${fromValue}/${toValue}/${amountValue}`);
        const responseJson = await response.json();
        const finalResult = responseJson["conversion_result"];
        resultElement.textContent = `${amountValue} ${fromValue} = ${finalResult} ${toValue}`;
    }
    catch (error) {
        console.log(error)
        resultElement.textContent = "Some error occured please try after some time";
    }
}

currencyConverter()
button.addEventListener("click", convert);

