
(function () {
    'use strict';

    /**
     * We are developing an online ordering module for <MwamiTovi> company's website. 
     * And there are some business rules to fill the online order.
     * 
     * An administrator, wants to validate all the business rules on 
     * submission of an online order so that they can process orders"
     * 
     * Let's look at scenarios, that is, all business rules should be validated before we accept the online order:
     * // Scenario-1: Person's age should be greater than or equal to 21
     * // Scenario-2: Person's first and last names are mandatory to process the online order
     * 
     * To understand this concept of custom matchers, consider that whenever a Jasmine test fails,
     * a user-defined error message should be displayed for both scenarios,
     * // Error message for Scenario-1: Minimum person's age should be 21 years to place the order
     * // Error message for Scenario-2: Person's first name and last name are mandatory to process the order
     */
   
    // Understanding custom matcher
    describe('<MwamiTovi> Company: Online Order Module', function() {
        beforeEach(function(){
            jasmine.addMatchers(personAgeValidationMatcher);
        });
        // Scenario-1
        describe('When to place the online order: ', function() {
            it('Age should be greater than or equal to 21 years', function() {
                var myPerson = new Person(18, 'Martin', 'Matovu');
                expect(myPerson.age).toBeOlderThan(20);
            });
        });
    });

    /**
     * Defining a custom matcher function
     * 
     * In this example, define the custom matcher personAgeValidationMatcher(),
     * Note that we create the toBeOlderThan() method to validate a person's age within the custom matcher. 
     * And a compare() function is created with two parameters.
     * // compare() function receives the first argument as Actual Value, which is passed to expect() 
     * // and it receives the second argument as Expected Value, which is passed to the matcher itself.
     * // And returns a result object with a property called "pass" that is the Boolean result of matcher.
     * // The "pass" property tells the expectation whether the matcher is successful (true) or unsuccessful (false).
     */

    var personAgeValidationMatcher = {
        toBeOlderThan: function() {
            return {
                compare: function(actualAge, expectedAge) {
                    if(expectedAge === undefined) { 
                        throw "Expected value is required"; 
                    }
                    if(actualAge >= expectedAge) { 
                        return {
                            pass: true,
                            message: 'Person is eligible to place an online order'
                        }; 
                    } 
                    else { 
                        return {
                            pass: false,
                            message: "Minimum person's age should be 21 years to place an online order"
                        }; 
                    };
                }
            };
        }
    };

})();

