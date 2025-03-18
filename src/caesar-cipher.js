function caesarCipher(str, shift) {
    const wordArr = [];
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for (const c of str) {
        if (c.match(/[a-zA-Z]/)) {
            let letter = c;
            let upperCase = false;
            if (c === c.toUpperCase()) {
                letter = c.toLowerCase();
                upperCase = true;
            }
            const index = alphabet.findIndex((val) => val === letter);
            const newLetter = upperCase ? alphabet[index+shift].toUpperCase() : alphabet[index+shift];
            wordArr.push(newLetter);
        } else {
            wordArr.push(c);
        }
    }

    return wordArr.join("");
}


module.exports = caesarCipher;