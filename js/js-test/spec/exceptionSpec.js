
(function () {
    'use strict';

    /**
     * As a JS-developer, if you want to handle all the errors and validate error messages
     * so that the end-user should not get stuck during any process.
     * 
     * Let's consider some scenarios, that all the system and user-defined errors should
     * be handled throughout the application.
     * // Scenario-1: Error should be thrown on any unexpected behavior or malfunction.
     * // Scenario-2: Error messages should be consistent throughout the application.
     */
   
    // Understanding tests for exceptions
    describe('JavaScript Exceptions: ', function() {
        // Scenario-1
        describe('Validate Errors: ', function() {
            it('Error should be thrown on any unexpected behavior or malfunctioning', function() {
                expect(addTwonumbers).not.toThrow();
                expect(generateMaxValue).toThrow();
                expect(generateMaxValue).toThrowError();
            });
            it('Error should be thrown on passing any unexpected or wrong arguments', function() {
                // Assertions to test parameters of addTwonumbers()
                expect(addTwonumbers.bind(null,1,2)).not.toThrow();
                expect(addTwonumbers.bind(null,1,2)).not.toThrowError();
                expect(function(){addTwonumbers(1,4);}).not.toThrow();
                // Asserions to test parameters of generateMaxvalue()
                expect(generateMaxValue.bind(null,5)).not.toThrow();
                expect(generateMaxValue.bind(this,5)).not.toThrow();
                expect(function(){generateMaxValue(2000);}).toThrow();
                expect(function(){generateMaxValue(2000);}).toThrowError();
            });
        });
    });

})();

