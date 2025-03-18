const caesarCipher = require("../src/caesar-cipher.js");

test("Caesar cipher for abc shift 3", () => {
    const shifted = caesarCipher("abc", 3);
    expect(shifted).toBe("def");
});

test("Caesar cipher for abc shift 4", () => {
    const shifted = caesarCipher("abc", 4);
    expect(shifted).toBe("efg");
});

test("Caesar cipher for hijk shift 4", () => {
    const shifted = caesarCipher("hijk", 4);
    expect(shifted).toBe("lmno");
});

test("Caesar cipher for Test shift 1, capital letter", () => {
    const shifted = caesarCipher("Test", 1);
    expect(shifted).toBe("Uftu");
});

test("Caesar cipher for HeLLo shift 3, capital letters", () => {
    const shifted = caesarCipher("HeLLo", 3);
    expect(shifted).toBe("KhOOr");
});
test("Caesar cipher for Hello, World! shift 3, punctuation", () => {
    const shifted = caesarCipher("Hello, World!", 3);
    expect(shifted).toBe("Khoor, Zruog!");
});