// Reverse the characters of each word and the words in a sentence

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverseCharsAndWords(sentence) {
  let splitted_string = sentence.split(" ");
  let reversed_string = splitted_string.reverse();
  let reversed_chars_string = reversed_string.map((word) =>
    word.split("").reverse().join("")
  );
  let joined_string = reversed_chars_string.join(" ");
  return joined_string;
}

readline_interface.question(
  "Enter a sentence to reverse the characters of each word and the words in the sentence: ",
  (user_input) => {
    const reversed_sentence = reverseCharsAndWords(user_input);
    console.log(
      `The reversed sentence of ${user_input} is: ${reversed_sentence}`
    );
    readline_interface.close();
  }
);
