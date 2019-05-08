
(function () {
    'use strict';

    /**
     * As a JS-developer, if you want to develop a mechanism to check the equality of two strings
     * so that you can compare and categorize objects.
     * 
     * // Scenario-1: Two strings should be equal if the first word of both strings is "Kampala"
     */
   
    // Understanding custom matchers
    describe('Custom Equality function: ', function() {
        // Scenario-1
        describe('Strings: ', function() {
            it('Should be custom equal, if first word of both the strings is "Kampala"', function() {
                expect("Kampala Northern-bypass").toEqual("Kampala-Mityana road");
            });
        });
    });

})();

