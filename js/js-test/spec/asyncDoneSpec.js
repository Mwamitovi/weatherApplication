
(function () {
    'use strict';

    /**
     * 
     * Asynchronous operations with Done()
     * 
     * "As a JavaScript developer, I want to create Jasmine specs for asynchronous operations,
     * so that I can implement a test condition successfully."
     * 
     * Let's consider the following scenario in the current context:
     * // Scenario-1: Jasmine should support JavaScript asynchronous operations using the done() function
     */
    
    describe("Jasmine specs for Asynchronous operations: ", function() {
        // scenario-1
        describe("With Done() function:", function(){
            var myCallback, showErrorMessage;
            beforeEach(function(done) {
                myCallback = jasmine.createSpy();
                $.ajax({
                    url: "spec/fixtures/myData.json",
                    dataType: "json",
                    success: function(responseResult) {
                        myCallback(responseResult);
                        done();
                    },
                    error: showErrorMessage,
                    timeout: 5000
                });
            });

            it("should support JavaScript asynchronous operations", function(){
                expect(myCallback).toHaveBeenCalled();
            });
        });
    });

})();

