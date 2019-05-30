
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
            });
            
            afterEach(function(){
                jasmine.Ajax.uninstall();
            });
            // scenario-1
            it("Method 'GET' should be passed through XMLHttpRequest request", function(){
            });
            // scenario-2         
            it("url should be passed as '/some/url/?q=Cookbook' through XMLHttpRequest request", function(){
            });       
        });
    });

})();

