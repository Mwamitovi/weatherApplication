
(function () {
    'use strict';

    /**
     * 
     * fixtures
     * 
     * "As a JavaScript developer, 
     * I want to apply/use HTML/JSON fixtures so that I can implement a test condition successfully."
     * 
     * Let's consider the following scenario in current context:
     * // Scenario-1: Jasmine specs should be designed using HTML and JSON fixtures
     */
    
    describe("JavaScript Application: ", function() {
        describe("When Jasmine Specs are designed with ", function() {
            describe("HTML fixture: ", function() {
                beforeEach(function(){
                    jasmine.getFixtures().fixturesPath = 'spec/javascripts/fixtures';
                })
                describe("'loadFixtures' Method, ", function() {
                    it("Load fixture from a file", function(){
                    }); 
                }); 
            }); 
        });
    });

})();

