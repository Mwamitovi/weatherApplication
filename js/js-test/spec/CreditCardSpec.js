
(function () {
    'use strict';

    /**
     * Assume you are working with a bank in a credit card division.
     * There are different business rules that exist to accept credit card numbers.
     * A credit card administrator, wants to validate some credit card numbers 
     * so they can can check their authenticity for further processing."
     * 
     * Let's consider scenarios that a credit card number should be valid do online shopping.
     * // Scenario-1: The credit card number should have 16 digits for the "Master Card" category
     * 
     * Define the scenarios in the Given/When/Then format, from the BDD prespective
     * 
     * // Scenario-1, Given: Credit card division of a bank,
     *                 When: Accepted credit card number for Master Card category,
     *                 Then: Should have 16 numerical digits
     */

    // Creating Jasmine tests for "new code" using TDD/BDD
    describe('Credit Card Divison of a bank: ', function() {
        // Scenario-1
        describe('Accept Credit Card Number for Master Card category', function() {
            it('Should be equal to 16 digits', function() {
            });
        });
    });

})();