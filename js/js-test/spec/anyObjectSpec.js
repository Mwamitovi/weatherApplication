
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

    // scenario-1
    describe("jasmine.any(), ", function() {        
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
    describe("jasmine.objectContaining(), ", function() { 
        // scenario-2               
        it("should match/compare objects corresponding to key/value pairs in the actual", function(){
            var mydate = new Date("11/20/2014");    // mm/dd/yyyy
            var myMobile = new MobilePhone(
                "Huawei", "silver", "8 Megapixels", mydate.toDateString(), 
                ["Android", "Lollipop", "1.2 GHz Quad Core"]
            );

            expect(myMobile).toEqual(jasmine.objectContaining({
                brand: "Huawei", color: "silver", primaryCamera: "8 Megapixels"
            }));
        });
        // scenario-3
        describe("when used with a spy", function() {        
            it("should be applied successfully for comparing arguments", function(){
                var myMobile = jasmine.createSpy('myMobile');
                myMobile({ brand: "Huawei", foo: "foo"});

                expect(myMobile).toHaveBeenCalledWith(jasmine.objectContaining({
                    brand: "Huawei", foo: "foo"
                }));
            });
        });        
    });

})();

