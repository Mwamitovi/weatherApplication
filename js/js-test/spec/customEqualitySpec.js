
(function () {
    'use strict';

    /**
     * As a JS-developer, if you want to develop a mechanism to check the equality of two strings
     * so that you can compare and categorize objects.
     * 
     * // Scenario-1: Two strings should be equal if the first word of both strings is "Kampala"
     */
   
    // Understanding custom equality tester
    describe('Custom Equality function: ', function() {
        beforeEach(function() {
            jasmine.addCustomEqualityTester(MyCustomEquality);
        });
        // Scenario-1
        describe('Strings: ', function() {
            it('Should be custom equal, if first word of both the strings is "Kampala"', function() {
                expect("Kampala Northern-bypass").toEqual("Kampala-Mityana road");
            });
        });
    });

    /**
     * Defining a custom equality tester function
     * 
     * In this example, MyCustomEquality() receives the first argument (the Actual Value)
     * as the value passed to expect() and the value passed to the toEqual() matcher itself
     * as the second argument or Expected value.
     */
    // 
    var MyCustomEquality = function(strFirstString, strSecondString) {
        if(typeof strFirstString == "string" && typeof strSecondString == "string") {
            return strFirstString.substr(0,7) == strSecondString.substr(0,7);
        };
    };

})();

