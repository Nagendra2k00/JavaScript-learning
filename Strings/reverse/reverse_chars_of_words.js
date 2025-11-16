// Reverse the characters of each word in a sentence

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverseCharsOfWords(sentence) {
  let splitted_string = sentence.split(" ");
  let reversed_string = splitted_string.map((word) =>
    word.split("").reverse().join("")
  );
  let joined_string = reversed_string.join(" ");
  return joined_string;
}

readline_interface.question(
  "Enter a sentence to reverse the characters of each word: ",
  (user_input) => {
    const reversed_sentence = reverseCharsOfWords(user_input);
    console.log(
      `The reversed sentence of ${user_input} is: ${reversed_sentence}`
    );
    readline_interface.close();
  }
);
