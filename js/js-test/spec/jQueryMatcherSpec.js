
(function () {
    'use strict';

    /**
     * 
     * jQuery Matchers
     * 
     * "As a JavaScript developer I want to apply different custom jQuery matchers,
     * so that I can implement a test condition successfully."
     * 
     * Here are the different scenarios:
     * // Scenario-1: toContainText() matcher should be applied successfully to find any text in an element
     * // Scenario-2: toHaveText() matcher should be applied successfully to find text in an element
     * // Scenario-3: toHaveClass() matcher should be applied successfully to detect the class of an element
     * // Scenario-4: toContainHtml() matcher should be applied successfully to find an HTML element
     * // Scenario-5: toHaveCss() matcher should be applied successfully to find out CSS properties
     * // Scenario-6: toHaveId() matcher should be applied successfully to detect the ID of an element
     * // Scenario-7: toHaveLength() matcher should be applied successfully to find length of the ordered/unordered HTML list
     * // Scenario-8: toBeMatchedBy() matcher should be applied successfully to match elements for the given selector
     * // Scenario-9: toEqual() matcher should be applied successfully to match elements for the given selector
     * // Scenario-10: toBeChecked() matcher should be applied successfully to check the state/status of check box
     * // Scenario-11: toBeFocused() matcher should be applied successfully to detect whether an element is in focus or not
     * // Scenario-12: toBeDisabled() matcher should be applied successfully to detect whether an element is disabled or not
     */
    
    describe("HTML fixture", function() {
        describe("Jasmine jQuery custom matchers ", function() {
            beforeEach(function(){
                jasmine.getFixtures().fixturesPath = 'spec/javascripts/fixtures';
                loadFixtures('jQueryFixture.html', 'formFixture.html')
            });
            // scenario-1
            describe("toContainText() matcher should be applied successfully for: ", function(){
                it("finding text in an element", function(){
                    expect($('h1')).toContainText("Welcome");
                });
                it("finding any text or text-pattern in an element", function(){
                    expect($('#my-Address')).toContainText(/Kampala/);
                });
            });
            // scenario-2
            describe("toHaveText() matcher should be applied successfully for: ", function(){
                it("finding text in an element", function(){
                    expect($('#my-Address')).toHaveText('I live in Kampala, Uganda');
                });
                it("finding any text or text-pattern in an element", function(){
                    expect($('#my-Address')).toHaveText(/Uganda/);
                });
            });
        });
    });

})();

