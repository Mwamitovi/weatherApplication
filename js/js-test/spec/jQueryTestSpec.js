
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
        describe("Ajax calls: ", function() {
            describe("with $.ajax: ", function() {
                var configData = {
                    url: "myData.json",
                    remainingTime: 5000
                };
                // scenario-1
                it("correct URL should be passed to $.ajax object", function(){
                    spyOn($, "ajax");
                    sendRequestWithJQuery(undefined, undefined, configData);
                    
                    expect($.ajax).toHaveBeenCalledWith(jasmine.objectContaining(
                        {url: configData.url}
                    ));
                });
                // scenario-2
                it("method 'myCallback' should be called on successful response", function(){
                    spyOn($, "ajax").and.callFake(function(e){
                        e.success({});
                    });
                    var myCallback;
                    myCallback = jasmine.createSpy();
                    showErrorMessage = jasmine.createSpy();
                    sendRequestWithJQuery(myCallback, showErrorMessage, configData);

                    expect(myCallback).toHaveBeenCalled()
                    expect(showErrorMessage).not.toHaveBeenCalled();
                });
                // scenario-3
                it("error method showErrorMessage should be called for any malfunctioning", function(){
                    spyOn($, "ajax").and.callFake(function(e){
                        e.error({});
                    });
                    showErrorMessage = jasmine.createSpy();
                    sendRequestWithJQuery(myCallback, showErrorMessage, configData);

                    expect(showErrorMessage).toHaveBeenCalled();
                });
            });
            // scenario-4
            describe("DOM Manipulation", function(){
                it("Test HTML fixture", function(){
                        jasmine.getFixtures().fixturesPath = 'spec/javascripts/fixtures';
                        loadFixtures('myFixture.html');
                        jasmine.getJSONFixtures().fixturesPath = 'spec/javascripts/fixtures';
                        
                        var FixtureUrl = "myData.json";
                        var ufixtures = loadJSONFixtures(FixtureUrl);
                        var myResult = ufixtures[FixtureUrl];

                        spyOn($, "ajax").and.callFake(function(e){
                            e.success(myResult);
                        });
                        showErrorMessage = jasmine.createSpy();
                        sendRequestWithJQuery(myCallback, showErrorMessage, configData);
                        
                        expect($('#my-fixture')).toContainText(/Uganda Zaabu by Martin Matovu/i);
                });
            });
        });
    });

})();

