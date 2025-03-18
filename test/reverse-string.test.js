const reverseString = require("../src/reverse-string.js");

test("Reverse hello", () => {
    const reverse = reverseString("hello");
    expect(reverse).toBe("olleh");
});

test("Reverse world", () => {
    const reverse = reverseString("world");
    expect(reverse).toBe("dlrow");
});

test("Reverse test", () => {
    const reverse = reverseString("test");
    expect(reverse).toBe("tset");
});