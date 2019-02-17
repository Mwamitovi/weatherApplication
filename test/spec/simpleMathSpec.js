
                // The describe keyword declares a new test suite called "SimpleMath". 
                describe("SimpleMath", function() {
                    var simpleMath;

                    beforeEach(function() {
                        simpleMath = new SimpleMath();
                    });
                    
                    // test suite for factorial
                    describe("when SimpleMath is used to find factorial", function() {
                        it("should be able to find factorial for positive number", function() {
                            expect(simpleMath.getFactorial(3)).toEqual(6);
                        }); 
                        it("should be able to find factorial for zero", function() {
                            expect(simpleMath.getFactorial(0)).toEqual(1);
                        });
                        it("should be able to throw an exception when the number is negative", function() {
                            expect(function(){simpleMath.getFactorial(-10)}).toThrow(new Error("There is no factorial for negative numbers"));
                        });
                    });
                    // test suite for signum method
                    describe("when SimpleMath is used to find signum", function() {
                        it("should be able to find the signum for a positive number", function() {
                            expect(simpleMath.signum(3)).toEqual(1);
                        });
                        it("should be able to find the signum for zero", function() {
                            expect(simpleMath.signum(0)).toEqual(0);
                        });
                        it("should be able to find the signum for a negative number", function() {
                            expect(simpleMath.signum(-1000)).toEqual(-1);
                        });
                    });
                    // the test suite for average
                    describe("when SimpleMath is used to find the average of two values", function() {
                        it("should be able to find the average of two values", function() {
                            expect(simpleMath.average(3, 6)).toEqual(4.5);
                        });
                    });
                });