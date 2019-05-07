'use strict';
/**
 * Assume that you are developing a bank application to track details of
 * the fixed deposit, recurring deposit, and all other financial transactions.
 * Thus the finance administrator, wants to track all financial transactions so that 
 * they can categorize them for further assessment/processing.
 * 
 * Let's consider scenarios where all financial transactions should be tracked and categorized.
 * // Scenario-1: Deposit should be of the fixed Deposit (FD) type if amount is locked for a fix period
 * // Scenario-2: Deposit should be of the Recurring Deposit (RD) type for an amount deposited with regular frequency
                  (that is, monthly, quarterly, half-yearly, yearly, and so on)
 */
    
 // An Object Construction function, with one parameter
function Deposit(Frequency) {
    this.Type = Frequency;
};

// A function for the Deposit() object using prototype
Deposit.prototype.BankDeposit = function() {
    switch (this.Type) {
        case "FIX":
            return "FD";
            break;
        case "RECURRING":
            return "RD";
            break;
    };
};
