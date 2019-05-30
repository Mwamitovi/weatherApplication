
(function () {
    'use strict';

    /**
     * 
     * jasmine.clock()
     * 
     * "As a JavaScript developer, 
     * I want to develop Jasmine tests for JavaScript timeout methods using Jasmine Clock
     * so that I can implement a test condition successfully."
     * 
     * Let's consider a scenario in the current context, that is, 
     * Jasmine tests should be created for JavaScript timeout functions,
     * // Scenario-1: JavaScript Timeout function should be called synchronously using Jasmine Clock
     */
    
     // scenario-1
    describe("JavaScript Timeout Functions", function() { 
        var mytimerCallback;
        beforeEach(function(){
            mytimerCallback = jasmine.createSpy("mytimerCallback");
            jasmine.clock().install();
        });

        afterEach(function(){
            jasmine.clock().uninstall();
        });

        describe("With setTimeout() method:, ", function() {        
            it("should be called synchronously using Jasmine Clock", function(){
                setTimeout(function(){
                    mytimerCallback();
                }, 100);

                expect(mytimerCallback).not.toHaveBeenCalled();
                jasmine.clock().tick(100);
                expect(mytimerCallback).toHaveBeenCalled();
            });
        });
        describe("With setInterval() method:", function() {                
            it("should be called synchronously using Jasmine Clock", function(){
                setInterval(function(){
                    mytimerCallback();
                }, 100);

                expect(mytimerCallback).not.toHaveBeenCalled();

                jasmine.clock().tick(101);
                expect(mytimerCallback.calls.count()).toEqual(1);

                jasmine.clock().tick(50);
                expect(mytimerCallback.calls.count()).toEqual(1);

                jasmine.clock().tick(50);
                expect(mytimerCallback.calls.count()).toEqual(2);

                jasmine.clock().tick(100);
                expect(mytimerCallback.calls.count()).toEqual(3);
            });       
        });
    });

})();

