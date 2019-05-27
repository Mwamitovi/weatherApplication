
(function () {
    'use strict';

    /**
     * 
     * Design specs, after analyzing test requirements
     * 
     * A travel agent wants to check the value of converted currency across the regions/countries using 
     * the Money Exchange facility of <MwamiTovi> company so that he/she can provide the exact details
     * of currency conversion to tourists"
     * 
     * Since the Money Exchange company deals across the continents, the white box engineer defined
     * these test requirements in the form of test cases corresponding to the preceding User Story;
     * // Test Case-1: Verify that Ugandan Shillings (USH) are converted to US Dollars (USD)
     * // Test Case-2: Verify that Ugandan Shillings (USH) are converted to Japanese Yen (JPY)
     * // Test Case-3: Verify that Ugandan Shillings (USH) are converted to Kenya Shillings (KES)
     * // Test Case-4: Verify that Ugandan Shillings (USH) are converted to Rwanda Francs (RF)
     * // Test Case-5: Verify that Ugandan Shillings (USH) are converted to UAE Dirhams (AED)
     * // Test Case-6: Verify that Ugandan Shillings (USH) are converted to British Pound Sterlings (GBP)
     * // Test Case-7: Verify that Ugandan Shillings (USH) are converted to South African Rands (ZAR)
     * // Test Case-8: Verify that US Dollars (USD) are converted to Kenya Shillings (KES)
     * // Test Case-9: Verify that US Dollars (USD) are converted to Japanese Yen (JPY)
     */

    describe("<MwamiTovi> Money Exchange Company: Currency Converter Module", function() {
        describe("When converting currency acros regions: ", function() {
            it("Verify that Ugandan Shillings (USH) converted into US Dollars (USD)", function() {
                var myCurrency = new CurrencyConvertor(4000, "USH", "USD");
                expect(myCurrency.convertedCurrency()).toEqual(1);
            });
            it("Verify that Ugandan Shillings (USH) converted to Japanese Yen (JPY)", function() {
                var myCurrency = new CurrencyConvertor(1, "USH", "JPY");
                expect(myCurrency.convertedCurrency()).toEqual(0.03);
            });
            it("Verify that Ugandan Shillings (USH) are converted to Kenya Shillings (KES)", function() {
                var myCurrency = new CurrencyConverter(1000, "USH", "KSH");
                expect(myCurrency.convertedCurrency()).toEqual(27.13);
            });
            it("Verify that Ugandan Shillings (USH) are converted to Rwanda Francs (RF)", function() {
                var myCurrency = new CurrencyConverter(2000, "USH", "RFC");
                expect(myCurrency.convertedCurrency()).toEqual(933);
            });
            it("Verify that Ugandan Shillings (USH) are converted to UAE Dirhams (AED)", function() {
                var myCurrency = new CurrencyConverter(10000, "USH", "AED");
                expect(myCurrency.convertedCurrency()).toEqual(9.81);
            });
            it("Verify that Ugandan Shillings (USH) are converted to British Pound Sterlings (GBP)", function() {
                var myCurrency = new CurrencyConverter(5000, "USH", "GBP");
                expect(myCurrency.convertedCurrency()).toEqual(1.03);
            });
            it("Verify that Ugandan Shillings (USH) are converted to South African Rands (ZAR)", function() {
                var myCurrency = new CurrencyConverter(1000, "USH", "ZAR");
                expect(myCurrency.convertedCurrency()).toEqual(3.84);
            });
            it("Verify that US Dollars (USD) are converted to Kenya Shillings (KES)", function() {
                var myCurrency = new CurrencyConverter(500, "USD", "KES");
                expect(myCurrency.convertedCurrency()).toEqual(0.13);
            });
            it("Verify that US Dollars (USD) converted to Japanese Yen (JPY)", function() {
                var myCurrency = new CurrencyConverter(5, "USD", "JPY");
                expect(myCurrency.convertedCurrency()).toEqual(557.99);
            });
        });
    });

})();

