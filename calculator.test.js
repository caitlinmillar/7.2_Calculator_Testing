// location to get the function you made
const {Calculator, OddOrEven} = require('./calculator');

// AAA of testing
// ARRANGE (data), ACT(call function u are actually using), ASSERT(check result)
// anonymous inline function

// needs to be set out here to have global scope instead of block scope
// default let
let calculator;
let oddOrEven;

beforeEach(()=> {
    calculator = new Calculator();
    oddOrEven = new OddOrEven();
})

describe('testing addition', () => {
    test('can add two positive numbers', () => {
        const expected = 5;
        const actual = calculator.add(2,3);
        expect(actual).toBe(expected);
    });
  test('can add a negative and a positive number',() => {
    const expected = -2;
    const actual = calculator.add(-5,3);
    expect(actual).toBe(expected);
    })
});

describe('testing subtraction', () => {
    test('can subtract using two positive numbers', ()=>{
        expect(3).toBe(calculator.subtract(10,7));
    })
    test('can subtract using a negative number', ()=>{
        expect(14).toBe(calculator.subtract(9,-5));
    })
    test('can subtract using two negative numbers', ()=>{
        expect(-1).toBe(calculator.subtract(-4,-3));
    })
});

describe('testing multiplication', () => {
    test('can multiply using two positive numbers', ()=>{
        expect(10).toBe(calculator.multiply(5,2));
    })
    test('can multiply using a negative number', ()=>{
        expect(-10).toBe(calculator.multiply(2,-5));
    })
    test('can multiply using two negative numbers', ()=>{
        expect(10).toBe(calculator.multiply(-5,-2));
    })
});

describe('testing division', () => {
    test('can divide using two positive numbers', ()=>{
        expect(15).toBe(calculator.divide(30,2));
    })
    test('can divide using a negative number', ()=>{
        expect(-5).toBe(calculator.divide(-10,2));
    })
    test('can divide using two negative numbers', ()=>{
        expect(2).toBe(calculator.divide(-6,-3));
    })
});

describe('testing modulus', () => {
    test('can attain modulus using two positive numbers', ()=>{
        expect(3).toBe(calculator.modulus(3,4));
    })
    test('can attain modulus using one negative number', ()=>{
        expect(-2).toBe(calculator.modulus(-5,3));
    })
    test('can attain modulus using two negative numbers', ()=>{
        expect(-5).toBe(calculator.modulus(-5,-9));
    })
});

describe('testing odd or even', () => {
    test('can attain odd using positive numbers', ()=>{
        expect('Odd').toBe(oddOrEven.oddOrEven(3));
    })
    test('can attain odd using positive numbers', ()=>{    
        expect('Odd').toBe(oddOrEven.oddOrEven(1324567));
    })
    test('can attain even using positive numbers', ()=>{
        expect('Even').toBe(oddOrEven.oddOrEven(14));
    })
    test('can attain odd using positive numbers', ()=>{    
        expect('Even').toBe(oddOrEven.oddOrEven(13245642));
    })
});

test('testing Even number is not Odd', () => {
    expect('Odd').not.toBe(oddOrEven.oddOrEven(4));
})

