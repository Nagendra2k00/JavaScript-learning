// Reverse a sentence

const readline = require("readline");

readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverseSentence(sentence) {
  let spplitted_string = sentence.split(" ");
  let reversed_string = spplitted_string.reverse();
  let joined_string = reversed_string.join(" ");
  return joined_string;
}

readline_interface.question("Enter a sentence to reverse: ", (user_input) => {
  const reversed_sentence = reverseSentence(user_input);
  console.log(
    `The reversed sentence of ${user_input} is: ${reversed_sentence}`
  );
  readline_interface.close();
});
