const {expect} = require('chai');
const {describe, beforeEach, afterEach, it} = require('mocha');
const NumbersValidator = require('../../app/numbers-validator');


describe('isNumberEven tests', () => {
    let validator;
    const arrayOfNotNumbers = ['one', true, null, undefined, 10n, {name: 'second'}];
    const invalidArrays = [6, {"number": 1}, 'one', true, null, undefined, 10n];
    const arraysWithNonNumberEl = [[19, 20, "one"], [true, 6, 6], [7,8, null], [5,7,undefined], [5, {"number": 1}, 9], [5n, 6n, 9n]] ;

    //Instantiates a new NumbersValidator object before each test 
    beforeEach(() => {
        validator = new NumbersValidator();
    });

    //Sets the validator variable to null after each test to clean up memory
    afterEach(() => {
        validator = null;
    });

    describe('isNumberEven method', () => {

        describe('positive tests', () => {
            // Checks if the method returns true if the number is even
            it('should return true if number is even', () => {
            const validationResults = validator.isNumberEven(4);
            expect(validationResults).to.be.equal(true);
        })
        });

        describe('negative tests', () => {
            // Checks if the method returns false if the number is odd
            it('should return false when provided an odd numbers', () => {
            const validationResults = validator.isNumberEven(5);
            expect(validationResults).to.be.equal(false);
        });

        // Checks if the method throws the error if the number is not a number
            it('should throw an error when provided not a number value', () => {
            for (const notNumber of arrayOfNotNumbers){
                expect(() => {
                    validator.isNumberEven(notNumber);
                }).to.throw(`[${notNumber}] is not of type "Number" it is of type "${typeof notNumber}"`)
            }
        });
 
        })
   

    });

    describe('isInteger method', () => {

            describe('positive tests', () => {
                //Checks if the method returns true if the number is an integer
                it('should return true if the number is an iteger', () => {
                    const validationResult = validator.isInteger(9);
                    expect(validationResult).to.be.equal(true);

                })
            });

            describe('negative tests', () => {
                //Checks if the method throws an error if a number is float
                it('should return false if the number is float', () => {
                    const validationResult = validator.isInteger(8.999);
                    expect(validationResult).to.be.equal(false);
                })

                it('should throw an error if a number is not a number', () => {
                    for(const notNumber of arrayOfNotNumbers){
                        expect(() => {
                            validator.isInteger(notNumber);
                        }).to.throw(`[${notNumber}] is not a number`)
                    }

                })
            });
        })

    describe('getEvenNumbersFromArray method', () => {

        describe('positive tests', () => {
            // Checks if the method returns true values if the array has even numbers
            it('should return only even numbers from the array', () => {
            const validationResults = validator.getEvenNumbersFromArray([1, 2, 3, 4, 5, 6, 7, 8]);
            expect(validationResults).to.deep.equal([2, 4, 6, 8]);
        })

        // Checks if the method returns false values if the array has odd numbers
            it('should return an empty array if all numbers are odd', () => {
            const validationResults = validator.getEvenNumbersFromArray([1, 3, 5, 7]);
            expect(validationResults).to.deep.equal([]);
        })
        });

        describe('negative tests', () => {
            //Checks if the method throws the error if the argument is not an array
            it('should throw an error when provided not an array', () => {
            for (const notArray of invalidArrays){
                expect(() => {
                    validator.getEvenNumbersFromArray(notArray);
                }).to.throw(`[${notArray}] is not an array of "Numbers"`)
            }
        });

            //Checks if the method throws the error when the array has non number
            it('should throw an error when the array has a non number', () => {
            

            for (const invalidArray of arraysWithNonNumberEl){
                expect(() => {
                    validator.getEvenNumbersFromArray(invalidArray);
                }).to.throw(`[${invalidArray}] is not an array of "Numbers"`);

            }
        });

        })

    })

    describe('isAllNumbers method', () => {

        describe('positive tests', () => {
            // Checks if the method returns true if all elements in array are numbers
            it('should return true if all elements in array are numbers', () => {
            const validationResults = validator.isAllNumbers([1,2,3,5,6,7,8]);
            expect(validationResults).to.be.equal(true);
        })
        })

        describe('negative tests', () => {
            //Checks if the method throws the error when the array is not an array
            it('should throw an error when provided not an array', () => {
            for (const notArray of invalidArrays){
                expect(() => {
                    validator.isAllNumbers(notArray);
                }).to.throw(`[${notArray}] is not an array`)
            }
        });

        //Checks if the method returns false when the array has non number
        it('should return false when the array has a non number', () => {
    
            for (const invalidArray of arraysWithNonNumberEl){
                expect(validator.isAllNumbers(invalidArray)).to.be.equal(false);
            }
        })

        })

    })

    
   
})