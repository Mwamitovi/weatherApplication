
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
            var $ = jQuery.noConflict();

            describe("HTML fixture: ", function() {
                beforeEach(function(){
                    jasmine.getFixtures().fixturesPath = 'spec/javascripts/fixtures';
                });
                describe("'loadFixtures' Method, ", function() {
                    beforeEach(function(){
                        loadFixtures('myFixture.html');
                    });
                    it("Load fixture from a file", function(){
                        expect($('.myULClass')).toExist();
                        expect($('#my-fixture')).toExist();
                    }); 
                });
                describe("'readFixtures' Method, ", function(){
                    var theFixture;
                    beforeEach(function(){
                        theFixture = readFixtures('myFixture.html');
                    });
                    it("reads fixtures from a file", function(){
                        expect(theFixture).toContainText('Martin');
                        // expect($(theFixture)).find("li").toHaveText('Matovu');
                        expect($('ul > li')).toHaveText('Matovu');
                    });
                });
                describe("'setFixtures' Method, ", function(){
                    beforeEach(function(){
                        setFixtures('<div class="FixtureClass">Uganda Zaabu</div>');
                    });
                    it("receive fixture as a parameter", function(){
                        expect($('.FixtureClass')).toExist();
                    });
                });
            });
            describe("JSON fixture: ", function(){
                var fixtureFile, ufixtures, myResult;
                beforeEach(function(){
                    loadFixtures('myFixture.html');
                    jasmine.getJSONFixtures().fixturesPath = 'spec/javascripts/fixtures';
                    fixtureFile = "myData.json";
                    ufixtures = loadJSONFixtures(fixtureFile);
                    myResult = ufixtures[fixtureFile];
                });
                it("loads json data from a file", function(){
                    $('#my-fixture').html("Uganda Zaabu");
                    expect($('#my-fixture')).toContainText("Uganda Zaabu");
                });
            });
        });
    });

})();

