
(function () {
    'use strict';

    /**
     * As a developer, you want to apply different Jasmine matchers
     * so that you can implement a test condition successfully.
     * 
     * Let's consider scenarios where Jasmine matchers should be applied for various test conditions.
     * // Scenario-1: 'toMatch' should be applied successfully for regular expressions
     * // Scenario-2: 'toEqual' should be applied successfully for literals, variables, and objects
     * // Scenario-3: 'toBe' should be applied successfully for literals, variables, and objects
     * // Scenario-4: 'toBeDefined' should be applied successfully to compares against defined
     * // Scenario-5: 'toBeUndefined' should be applied successfully to compares against undefined
     * // Scenario-6: 'toBeNull' should be applied successfully to compare against null
     * // Scenario-7: 'toBeTruthy' should be applied successfully for Boolean casting testing
     * // Scenario-8: 'toBeFalsy' should be applied successfully for Boolean casting testing
     * // Scenario-9: 'toContain' should be applied successfully for finding an item in an array
     * // Scenario-10: 'toBeLessThan' should be applied successfully for mathematical comparisons
     * // Scenario-11: 'toBeGreaterThan' should be applied successfully for mathematical comparisons
     * // Scenario-12: 'toBeCloseTo' should be applied for precision math comparison
     */
   
    // Understanding expectations and matchers
    describe('Jasmine Matchers', function() {
        // Scenario-1
        it("'toMatch' matcher should be applied successfully for regular expressions", function() {
            var strString1 = "Packt Cookbooks are an excellent source of learning";
            var strPhone = "123-456-78-90";
            expect(strString1).toMatch(/Cookbooks/);
            expect(strString1).toMatch(/cookbooks/i);
            expect(strString1).not.toMatch(/Java/);
            expect(strPhone).toMatch(/\d{3}-\d{3}-\d{2}-\d{2}/);
        });

        // Scenario-2
        describe("'toEqual' matcher should be applied successfully", function(){
            it("if numbers are equal", function() {
                var intVar = 15;
                expect(intVar).toEqual(15);
            });
            it("if strings are equal", function() {
                var strVar = "Jasmine Cookbook";
                expect(strVar).toEqual("Jasmine Cookbook");
            });
            it("if objects are equal", function() {
                var MyObectj1 = {a: 12, b: 13};
                var MyObectj2 = {a: 12, b: 13};
                expect(MyObectj1).toEqual(MyObectj2);
                expect(MyObectj1.a).toEqual(MyObectj2.a);
                expect(MyObectj1.a).not.toEqual(MyObectj2.b);
            });
            it("if arrays are equal", function() {
                expect([8, 9, 10]).toEqual([8, 9, 10]);
                expect([8, 9, 10, 11]).not.toEqual([8, 9, 10]);
            });
        });

        // Scenario-3
        it("'toBe' matcher should be applied successfully for literals, variables and objects", function() {
            var MyObj = {foo: "foo"};
            var MySameObj = {foo: "foo"};
            var strVar = "Jasmine Cookbook";
            var myArr = [8, 9, 10];

            expect(MyObj).toBe(MyObj);
            expect(MySameObj).not.toBe(MyObj);
            expect(MySameObj).toEqual(MyObj);
            expect(strVar).toBe("Jasmine Cookbook");
            expect(myArr).toEqual([8, 9, 10]);
            expect(myArr).not.toBe([8, 9, 10]);
        });

        // Scenario-4
        it("'toBeDefined' should be applied successfully to compares against defined", function() {
            var MyObj = {foo: "foo"};
            var Myfunction = (function() {})();
            var strUndefined;

            expect("Jasmine Cookbooks").toBeDefined();
            expect(MyObj).toBeDefined();
            expect(MyObj.foo).toBeDefined();
            expect(Myfunction).not.toBeDefined();
            expect(strUndefined).not.toBeDefined();
        });

        // Scenario-5
        it("'toBeUndefined' should be applied successfully to compares against undefined", function() {
            var MyObj = {foo: "foo"};
            var Myfunction = (function() {})();
            var strUndefined;

            expect(MyObj).not.toBeUndefined();
            expect(MyObj.foo).not.toBeUndefined();
            expect(Myfunction).toBeUndefined();
            expect(strUndefined).toBeUndefined();
        });

        // Scenario-6
        it("'toBeNull' matcher should be applied successfully to compare against null", function() {
            var nullValue = null;
            var valueUndefined;
            var notNull = "notNull";

            expect(null).toBeNull();
            expect(nullValue).toBeNull();
            expect(valueUndefined).not.toBeNull();
            expect(notNull).not.toBeNull();
        });

        // Scenario-7
        it("'toBeTruthy' matcher should be applied successfully for Boolean casting testing", function() {
            var MyVar1=12, MyVar2 = "True for Non Empty Strings";

            expect(true).toBeTruthy();
            expect("Jasmine Cookbook").toBeTruthy();
            expect(MyVar1).toBeTruthy();
            expect(MyVar2).toBeTruthy();
        });

        // Scenario-8
        it("'toBeFalsy' matcher should be applied successfully for Boolean casting testing", function() {
            var MyVar1=12, MyVar2 = "True for Non Empty Strings";

            expect(false).toBeFalsy();
            expect(null).toBeFalsy();
            expect(true).not.toBeFalsy();
            expect("Jasmine Cookbook").not.toBeFalsy();
            expect(MyVar1).not.toBeFalsy();
            expect(MyVar2).not.toBeFalsy();
        });

        // Scenario-9
        it("'toContain' matcher should be applied successfully for finding an item in an Array", function() {
            var MyArray = ["Jasmine", "Cookbook", "JavaScript"];

            expect([1, 2, 3]).toContain(2);
            expect([1, 2, 3]).toContain(2,3);
            expect(MyArray).toContain("Cookbook");
            expect([1, 2, 3]).not.toContain(4);
            expect(MyArray).not.toContain("Java");
        });

        // Scenario-10
        it("'toBeLessThan' matcher should be applied successfully for mathematical comparisons", function() {
            var pi = 3.1415926, g = 9.71, num1=5, num2=9;

            expect(pi).toBeLessThan(g);
            expect(num1).toBeLessThan(num2);
            expect(g).not.toBeLessThan(pi);
            expect(num2).not.toBeLessThan(num1);
        });

        // Scenario-11
        it("'toBeGreaterThan' matcher should be applied successfully for mathematical comparisons", function() {
            var pi = 3.1415926, g = 9.71, num1=5, num2=6;

            expect(g).toBeGreaterThan(pi);
            expect(num2).toBeGreaterThan(num1);
            expect(pi).not.toBeGreaterThan(g);
            expect(num1).not.toBeGreaterThan(num2);
        });

        // Scenario-12
        it("'toBeCloseTo' matcher should be applied for precision math comparison", function() {
            var pi = 3.1415926, e = 2.78;

            expect(pi).not.toBeCloseTo(e);
            expect(pi).toBeCloseTo(e,0);
            expect(4.334).toBeCloseTo(4.334);
            expect(4.334).toBeCloseTo(4.3345,1);
            expect(4.334).toBeCloseTo(4.3345,2);
            expect(4.334).not.toBeCloseTo(4.3,2);
            expect(4.223).not.toBeCloseTo(4.22,3);
            expect(4.223).not.toBeCloseTo(4.22,4);
        });
    });
})();