
(function () {
    'use strict';

    /**
     * 
     * Tracking properties of Spies
     * 
     * "As a JavaScript developer, 
     * I want to apply different tracking properties so that I can implement a test condition successfully."
     * 
     * Consider scenarios for tracking spies' properties, they should be applied for different test conditions:
     * // Scenario-1: The .calls.any() property should return false if the spy is not called at all
     * // Scenario-2: The .calls.any() property should return true if the spy is called once
     * // Scenario-3: The .calls.count() property should track the number of times the spy is called
     * // Scenario-4: The .calls.argsFor(index) property should return the argument(s) corresponding to each call
     * // Scenario-5: The .calls.allArgs() property should return the arguments to all calls
     * // Scenario-6: The .calls.mostRecent() property should return the context (the `this` keyword) 
     *                and arguments for the most recent call
     * // Scenario-7: The .calls.first() property should return the context (the `this` keyword) 
     *                and arguments for the first call
     * // Scenario-8: The .calls.reset() property should clear all tracking for a spy
     */

    describe("Jasmine spies: ", function() {
        describe("Tracking properties, ", function() {
            beforeEach(function(){
                this.testPerson = new Person();
                spyOn(this.testPerson, "getAge");
                spyOn(this.testPerson, "checkHIV");
            });
            describe(".calls.any() property ", function() {
                // scenario-1
                it("should return 'false' if spy is not called at all", function() {
                    expect(this.testPerson.getAge.calls.any()).toEqual(false);
                });
                // scenario-2
                it("should return 'true' if spy is called once", function() {
                    this.testPerson.ValidateAge("02/10/1987");
                    expect(this.testPerson.getAge.calls.any()).toEqual(true);
                });
            });
            // scenario-3
            describe(".calls.count() property ", function() {                
                it("should track the number of times the spy is called", function() {
                    expect(this.testPerson.getAge.calls.count()).toEqual(0);
                    // place calls to the function
                    this.testPerson.ValidateAge("02/10/1987");
                    this.testPerson.ValidateAge("02/10/1987");
                    expect(this.testPerson.getAge.calls.count()).toEqual(2);
                });
            });
            // scenario-4
            describe(".calls.argsFor(index) property ", function() {                
                it("should return the argument(s) corresponding to each call", function() {
                    this.testPerson.ValidateHIV("Name1", "10/25/1990", "A+");   // first call
                    this.testPerson.ValidateHIV("Name2", "10/25/1990", "A+");   // second call
                    this.testPerson.ValidateHIV("Name3", "10/25/1990", "A+");   // third call

                    expect(this.testPerson.checkHIV.calls.argsFor(0)).toEqual(["Name1", "10/25/1990", "A+"]);
                    expect(this.testPerson.checkHIV.calls.argsFor(1)).toEqual(["Name2", "10/25/1990", "A+"]);
                    expect(this.testPerson.checkHIV.calls.argsFor(2)).toEqual(["Name3", "10/25/1990", "A+"]);
                });
            });
            // scenario-5
            describe(".calls.allArgs() property ", function() {                
                it("should return the argument for all calls", function() {
                    this.testPerson.ValidateHIV("Name1", "10/25/1990", "A+");   // first call
                    this.testPerson.ValidateHIV("Name2", "10/25/1990", "A+");   // second call
                    this.testPerson.ValidateHIV("Name3", "10/25/1990", "A+");   // third call

                    expect(this.testPerson.checkHIV.calls.allArgs()).toEqual(
                        ["Name1", "10/25/1990", "A+"]
                        ["Name2", "10/25/1990", "A+"]
                        ["Name3", "10/25/1990", "A+"]
                        );
                });
            });
        });
    });

})();

