
(function () {
    'use strict';

    /**
     * 
     * Acceptance Criteria (AC)
     * AC defines the boundary for a feature and provides clarity to all stakeholders on what needs
     * to be achieved from a user story. It works as a completion criteria for a user story.
     * 
     * As a financial administrator of <MwamiTovi> company, 
     * I want to check the value of the converted currency across Uganda, Tanzania and Kenya, 
     * so that I can get the exact value of currency conversion for further usage.
     * 
     * we can consider the following Acceptance Criteria for the preceding user story:
     * // Kenya Shillings (KES) should be converted to Uganda Shillings (USH) with the exchange rate 0.025
     * // Tanzania Shillinga (TZS) should be converted to Uganda Shillings (USH) with exchange rate 0.8
     */

    describe("<MwamiTovi> Money Exchange Company: Currency Converter Module", function() {
        describe("When Convert the Currency across East African Countries: ", function() {
            it("Kenya Shillings (KES) should be converted to Uganda Shillings (USH)" +
               "with a user defined exchange rate", function() {
                    var myCurrency = new CurrencyConvertor(1, "KES", "USH", 0.025);
                    expect(myCurrency.convertedCurrency()).toEqual(0.025);
            });
            it("Tanzania Shillinga (TZS) should be converted to Uganda Shillings (USH)" +
               "with a user defined exchange rate", function() {
                    var myCurrency = new CurrencyConvertor(1, "TZS", "USH", 0.8);
                    expect(myCurrency.convertedCurrency()).toEqual(0.8);
            });            
        });
    });

})();

