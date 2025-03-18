const analyzeArray = require("../src/analyze-array.js");

test("Analyze array with one element", () => {
    const obj = analyzeArray([1]);
    expect(obj).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1
    });
});

test("Analyze array with two elements", () => {
    const obj = analyzeArray([2,4]);
    expect(obj).toEqual({
        average: 3,
        min: 2,
        max: 4,
        length: 2
    });
});

test("Analyze array with three elements", () => {
    const obj = analyzeArray([1,2,3]);
    expect(obj).toEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3
    });
});

test("Analyze empty", () => {
    const obj = analyzeArray([]);
    expect(obj).toEqual({
        average: null,
        min: null,
        max: null,
        length: 0
    });
});