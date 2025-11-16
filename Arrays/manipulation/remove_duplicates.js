// Remove duplicate elements from an array

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function removeDuplicates(arr) {
  const result = [];
  const seen = {};
  
  for (let item of arr) {
    if (!seen[item]) {
      seen[item] = true;
      result.push(item);
    }
  }
  return result;
}

readline_interface.question(
  "Enter numbers separated by commas (e.g., 1,2,2,3,3,4,5): ",
  (user_input) => {
    const arr = user_input.split(",").map((num) => parseFloat(num.trim()));
    const unique = removeDuplicates(arr);
    console.log(`Array [${arr.join(", ")}] without duplicates: [${unique.join(", ")}]`);
    readline_interface.close();
  }
);

