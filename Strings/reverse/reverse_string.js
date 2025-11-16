// Reverse a string

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverseString(str) {
  let spplitted_string = str.split("");
  let reversed_string = spplitted_string.reverse();
  let joined_string = reversed_string.join("");
  return joined_string;
}

readline_interface.question("Enter a string to reverse: ", (user_input) => {
  const reversed_string = reverseString(user_input);
  console.log(`The reversed string of ${user_input} is: ${reversed_string}`);
  readline_interface.close();
});
