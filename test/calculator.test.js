const calculator = require("../src/calculator.js");

test("Add 1+1", () => {
    const sum = calculator.add(1,1);
    expect(sum).toBe(2);
});

test("Add 2+2", () => {
    const sum = calculator.add(2,2);
    expect(sum).toBe(4);
});

test("Subtract 1-1", () => {
    const diff = calculator.subtract(1,1);
    expect(diff).toBe(0);
});

test("Subtract 2+1", () => {
    const diff = calculator.subtract(2,1);
    expect(diff).toBe(1);
});

test("Multiply 4*4", () => {
    const product = calculator.multiply(4,4);
    expect(product).toBe(16);
});

test("Multiply 2*5", () => {
    const product = calculator.multiply(2,5);
    expect(product).toBe(10);
});

test("Divide 10/2", () => {
    const quotient = calculator.divide(10,2);
    expect(quotient).toBe(5);
});

test("Divide 8/4", () => {
    const quotient = calculator.divide(8,4);
    expect(quotient).toBe(2);
});