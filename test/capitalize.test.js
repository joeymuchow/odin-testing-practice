const capitalize = require("../src/capitalize.js");

test("Capitalize test", () => {
    const capStr = capitalize("test");
    expect(capStr).toBe("Test");
});

test("Capitalize hello", () => {
    const capStr = capitalize("hello");
    expect(capStr).toBe("Hello");
});

test("Capitalize world", () => {
    const capStr = capitalize("world");
    expect(capStr).toBe("World");
});