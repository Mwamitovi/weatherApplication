
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
        // scenario-1
        describe("When Jasmine Specs are designed with ", function() {
            describe("HTML fixture: ", function() {
                beforeEach(function(){
                    jasmine.getFixtures().fixturesPath = 'spec/javascripts/fixtures';
                })
                describe("'loadFixtures' Method, ", function() {
                    beforeEach(function(){
                        loadFixtures('myfixture.html');
                    });
                    it("Load fixture from a file", function(){
                        expect($('.myULClas')).toExist();
                        expect($('#my-fixture')).toExist();
                    }); 
                });
                describe("'readFixtures' Method, ", function(){
                    var theFixture;
                    beforeEach(function(){
                        theFixture = readFixtures('myfixture.html');
                    });
                    it("reads fixtures from a file", function(){
                        expect(theFixture).toContainText(/Martin/);
                        expect($(theFixture)).find("li").toHaveText(/Matovu/);
                    })
                });
                describe("'setFixtures' Method, ", function(){
                    beforeEach(function(){
                        setFixtures('<div class="FixtureClass">Uganda Zaabu</div>');
                    });
                    it("receive fixture as a parameter", function(){
                        expect($('.FixtureClass')).toExist();
                    })
                });
            }); 
        });
    });

})();

