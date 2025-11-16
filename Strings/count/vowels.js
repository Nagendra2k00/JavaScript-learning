// Count the number of vowels in a string

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countVowels(string) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of string) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

readline_interface.question(
  "Enter a string to count the number of vowels: ",
  (user_input) => {
    const count = countVowels(user_input);
    console.log(
      `The number of vowels in the string ${user_input} is: ${count}`
    );
    readline_interface.close();
  }
);
