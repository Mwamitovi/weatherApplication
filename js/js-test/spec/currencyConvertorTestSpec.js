
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
     * // Test Case-3: Verify that Hong Kong Dollars (HKD) are converted to US Dollars (USD)
     * // Test Case-4: Verify that Japanese Yen (JPY) are converted to US Dollars (USD)
     * // Test Case-5: Verify that UAE Dirhams (AED) are converted to US Dollars (USD)
     * // Test Case-6: Verify that British Pound Sterlings (GBP) are converted to US Dollars (USD)
     * // Test Case-7: Verify that South African Rands (ZAR) are converted to Ugandan Shillings (USH)
     * // Test Case-8: Verify that US Dollars (USD) are converted to Hong Kong Dollars (HKD)
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
            xit("Verify that Hong Kong Dollars (HKD) converted to US Dollars (USD)", function() {
            });
            xit("Verify that Japanese Yen (JPY) converted to US Dollars (USD)", function() {
            });
            xit("Verify that UAE Dirham (AED) converted to US Dollars (USD)", function() {
            });
            xit("Verify that British Pound Sterling (GBP) converted to US Dollars (USD)", function() {
            });
            xit("Verify that South African Rand (ZAR) converted to Ugandan Shillings (USH)", function() {
            });
            xit("Verify that US Dollars (USD) converted to Hong Kong Dollars (HKD)", function() {
            });
            xit("Verify that US Dollars (USD) converted to Japanese Yen (JPY)", function() {
            });
        });
    });

})();

