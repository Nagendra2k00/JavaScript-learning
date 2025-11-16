// Count the number of consonants in a string

const readline = require("readline");

const readline_interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function countConsonants(string) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of string) {
        if (!vowels.includes(char)) {
            count++;
        }
    }   
    return count;
}

// or we can use the following code:

function countConsonants(string) {
    let consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let count = 0;
    for (let char of string) {
        if (consonants.includes(char)) {
            count++;
        }
    }   
    return count;
}

readline_interface.question("Enter a string to count the number of consonants: ", (user_input) => {
    const count = countConsonants(user_input);
    console.log(`The number of consonants in the string ${user_input} is: ${count}`);
    readline_interface.close();
});