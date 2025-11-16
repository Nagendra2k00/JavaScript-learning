// Square each element in an array

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function squareElements(arr) {
  const result = [];
  for (let num of arr) {
    result.push(num * num);
  }
  return result;
}

readline_interface.question(
  "Enter numbers separated by commas (e.g., 1,2,3,4,5): ",
  (user_input) => {
    const arr = user_input.split(",").map((num) => parseFloat(num.trim()));
    const squared = squareElements(arr);
    console.log(`Squared elements of [${arr.join(", ")}] are: [${squared.join(", ")}]`);
    readline_interface.close();
  }
);

