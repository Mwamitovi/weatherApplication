
'use strict';

const CurrencyConvertor = function(number, fromCurrency, toCurrency, currencyExchangeRate) {
    this.number = number;
    this.fromCurrency = fromCurrency.toUpperCase();
    this.toCurrency = toCurrency.toUpperCase();
    this.predefinedExchangeRate = 0;
    this.currencyExchangeRate = currencyExchangeRate || 0;
    this.convertedCurrency = 0;

    // Start - configured predefined exchange Rates
    const objExchangeRate = {
        "USH": {"USD": 0.00025, "JPY": 0.03},
        "USH": {"KES": 0.02713},
        "USH": {"RF": 0.4665},
        "USH": {"AED": 0.000982},
        "USH": {"GBP": 0.000206},
        "USH": {"ZAR": 0.004},
        "USD": {"KES": 0.0003, 'JPY': 111.598},
        "KES": {"USH": 0.025},
        "TZS": {"USH": 0.8}
    }; 

    // End - configured predefined exchange Rates
    for(let indexfromCurrency in objExchangeRate) {
        let objPredefinedExchangeRate = objExchangeRate[indexfromCurrency];

        if(this.fromCurrency == indexfromCurrency) {
            for(let indextoCurrency in objPredefinedExchangeRate) {
                if(this.toCurrency == indextoCurrency) {
                    this.predefinedExchangeRate = currencyExchangeRate || objPredefinedExchangeRate[indextoCurrency];
                    // this.convertedCurrency = convertCurrencyValue();
                    this.convertedCurrency = (function (){
                        if(this.number > 10000) {
                            // Exchange rate will be increased by 10%, if currency value is more than 10,000
                            this.predefinedExchangeRate += (this.predefinedExchangeRate * 0.10);
                            return Math.round(this.number * this.predefinedExchangeRate);
                        } else {
                            return this.number * this.predefinedExchangeRate;
                        }
                    });
                }
            }
        }
    }
};


// function convertCurrencyValue() {
//     if(this.number > 10000) {
//         // Exchange rate will be increased by 10%, if currency value is more than 10,000
//         this.predefinedExchangeRate += (this.predefinedExchangeRate * 0.10);
//         return Math.round(this.number * this.predefinedExchangeRate);
//     } else {
//         return this.number * this.predefinedExchangeRate;
//     }
// };
