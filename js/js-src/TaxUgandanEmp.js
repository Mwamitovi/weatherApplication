
'use strict'; 

// declaring a construction function TaxUgandanEmp()
var TaxUgandanEmp = function() {
    var grossTaxableIncome;
    // getters and setters
    this.getIncome = function() {
        return grossTaxableIncome || 0;
    };
    this.setIncome = function(grossIncome) {
        grossTaxableIncome = grossIncome;
    };
};