
(function () {
    'use strict';

    /**
     * 
     * testing jQuery
     * 
     * "As a JavaScript developer, 
     * I want to test the jQuery code so that I complete the Acceptance Criteria successfully."
     * 
     * Let's consider the following scenarios in current context:
     * // Scenario-1: The correct URL should be passed to the $.ajax object
     * // Scenario-2: The myCallback method should be called on successful response
     * // Scenario-3: The showErrorMessage method should be called for any malfunctioning
     * // Scenario-4: The DOM should be updated based on the server response
     */
    
    describe("jQuery", function() {
        // scenario-1
        describe("Ajax calls: ", function() {
            describe("with $.ajax: ", function() {
                var configData = {
                    url: "myData.json",
                    remainingTime: 5000
                };
                it("correct URL should be passed to $.ajax object", function(){
                    spyOn($, "ajax");
                    sendRequestWithJQuery(undefined, undefined, configData);
                    
                    expect($.ajax).toHaveBeenCalledWith(jasmine.objectContaining(
                        {url: configData.url}
                    ));
                });
            });
        });
    });

})();

