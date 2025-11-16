// Check if a string is a palindrome

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPalindrome(string) {
  let reversed_string = string.split("").reverse().join("");
  return string === reversed_string;
}

readline_interface.question(
  "Enter a string to check if it is a palindrome: ",
  (user_input) => {
    const is_palindrome = isPalindrome(user_input);
    console.log(
      `The string ${user_input} is ${
        is_palindrome ? "a palindrome" : "not a palindrome"
      }`
    );
    readline_interface.close();
  }
);
