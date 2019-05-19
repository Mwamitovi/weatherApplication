
'use strict';
var CurrencyConvertor = function(number, fromCurrency, toCurrency, currencyExchangeRate) {
    this.number = number;
    this.fromCurrency = fromCurrency.toUpperCase();
    this.toCurrency = toCurrency.toUpperCase();
    this.predefinedExchangeRate = 0;
    this.currencyExchangeRate = currencyExchangeRate || 0;
    this.convertedCurrency = 0;

    // Start - configured predefined exchange Rates
    var objExchangeRate = {
        "USH": {"USD": 0.0002667, "JPY": 0.03}
    }; 

    // End - configured predefined exchange Rates
    for(var indexfromCurrency in objExhangeRate) {
        var objPredefinedExchangeRate = objExchangeRate[indexfromCurrency];

        if(this.fromCurrency == indexfromCurrency) {
            for(var indextoCurrency in objPredefinedExchangeRate) {
                if(this.toCurrency == indextoCurrency) {
                    this.predefinedExchangeRate = currencyExchangeRate ||
                        objPredefinedExchangeRate[indextoCurrency];
                    this.convertedCurrency = convertCurrencyValue();
                }
            }
        }
    }
};


function convertCurrencyValue() {
    if(this.number > 1000) {
        // Exchange rate will be increased by 10%, if currency value is more than 10,000
        this.predefinedExchangeRate += (this.predefinedExchangeRate * 0.10);
        return Math.round(this.number * this.predefinedExchangeRate);
    } else {
        return this.number * this.predefinedExchangeRate;
    };
};
