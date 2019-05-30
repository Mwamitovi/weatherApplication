
(function () {
    'use strict';

    /**
     * 
     * jasmine.any(), jasmine.objectContaining()
     * 
     * "As a JavaScript developer, 
     * I want to develop Jasmine tests using jasmine.any() and jasmine.objectContaining(),
     * so that I can implement a test condition successfully."
     * 
     * Let's consider some scenarios in the current context, that is,
     * jasmine.any() and jasmine.objectContaining() should be applied for different test conditions,
     * // Scenario-1: The jasmine.any() should be applied successfully for comparing types of arguments.
     * // Scenario-2: The jasmine.objectContaining() should match/compare objects corresponding to actual key/value pairs.
     * // Scenario-3: The jasmine.objectContaining() should be applied successfully to compare arguments with Jasmine Spies.
     */

    describe("jasmine.any(), ", function() {
        // scenario-1
        it("should be applied successfully for comparing arguments", function(){
            var mydate = new Date("11/20/2014");    // mm/dd/yyyy
            var myMobile = new MobilePhone(
                "Huawei", "silver", "8 Megapixels", mydate.toDateString(), 
                ["Android", "Lollipop", "1.2 GHz Quad Core"]
            );

            expect(myMobile).toEqual(jasmine.any(Object));
            expect(myMobile.mobileRating()).toEqual(jasmine.any(String), jasmine.any(Array));
            expect(12).toEqual(jasmine.any(Number));
        });
    });

})();

