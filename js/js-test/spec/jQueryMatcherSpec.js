
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
            // scenario-3
            describe("toHaveClass() matcher should be applied successfully: ", function(){
                it("to detect class of an element", function(){
                    expect($('#my-fixture')).toHaveClass('intro');
                });
            });
            // scenario-4
            describe("toContainHtml() matcher should be applied successfully: ", function(){
                it("for finding html element", function(){
                    expect($('#myFixtureOuter')).toContainHtml('<ul id="Listfriends"></ul>');
                });
            });
            // scenario-5
            describe("toHaveCss() matcher should be applied successfully: ", function(){
                it("to find out CSS properties", function(){
                    expect($('#myStyleID').html()).toHaveCss({margin: "10px"});
                    expect($('#myStyleID').html()).toHaveCss({display: "none"});
                    expect($('#myStyleID').html()).toHaveCss({display: "none", margin: "10px"});
                });
            });
            // scenario-6
            describe("toHaveId() matcher should be applied successfully: ", function(){
                it("for detecting value of Id in element", function(){
                    expect($('.intro')).toHaveId('my-fixture');
                });
            });
            // scenario-7
            describe("toHaveLength() matcher should be applied successfully: ", function(){
                it("for finding length of ordered/unordered HTML list", function(){
                    expect($('ul.myClass > li')).toHaveLength(4);
                });
            });
            // scenario-8
            describe("toBeMatchedBy() matcher should be applied successfully: ", function(){
                it("to match elements for the given selector", function(){
                    expect($('#my-fixture')).toBeMatchedBy('.intro');
                });
            });
            // scenario-9
            describe("toEqual() matcher should be applied successfully: ", function(){
                it("to match elements for the given selector", function(){
                    expect($('#my-fixture')).toEqual('div');
                    expect($('div.intro')).toEqual('div'); 
                    expect($('#my-fixture')).toEqual('div#my-fixture');
                    expect($('#my-fixture')).toEqual('.intro');
                });
            });           
        });
    });            

})();

