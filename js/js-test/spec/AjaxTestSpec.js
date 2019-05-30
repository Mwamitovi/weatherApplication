
(function () {
    'use strict';

    /**
     * 
     * testing AJAX
     * 
     * Now, let's consider some scenarios in the current context, that is, 
     * AJAX handling should be validated before displaying the details on the web page,
     * // Scenario-1: "GET" method should be passed through the XMLHttpRequest request
     * // Scenario-2: url should be passed as "/some/url/?q=Cookbook" through the XMLHttpRequest request
     * // Scenario-3: myCallback() method should be invoked on a successful response
     */
    
    describe("Ajax calls: ", function() {
        describe("Validate using 'jasmine-ajax' plugin", function() { 
            var request, myText, myCallback;
            beforeEach(function(){
                jasmine.Ajax.install();
                var myCallback = jasmine.createSpy("success");
                ajaxRequest(myCallback);
                var request = jasmine.Ajax.request.mostRecent();
            });
            
            afterEach(function(){
                jasmine.Ajax.uninstall();
            });
            // scenario-1
            it("Method 'GET' should be passed through XMLHttpRequest request", function(){
                expect(request.method).toBe('GET');
                expect(myCallback).not.toHaveBeenCalled();
            });
            // scenario-2         
            it("url should be passed as '/some/url/?q=Cookbook' through XMLHttpRequest request", function(){
                expect(request.url).toBe('/some/url/?q=Cookbook');
                expect(myCallback).not.toHaveBeenCalled();
            });    
        });
    });

})();

