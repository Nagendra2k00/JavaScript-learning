// Sort an array in descending order

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sortDescending(arr) {
  // Using bubble sort algorithm
  const sorted = [...arr];
  const n = sorted.length;
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sorted[j] < sorted[j + 1]) {
        // Swap elements
        let temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }
  return sorted;
}

readline_interface.question(
  "Enter numbers separated by commas (e.g., 5,2,8,1,9): ",
  (user_input) => {
    const arr = user_input.split(",").map((num) => parseFloat(num.trim()));
    const sorted = sortDescending(arr);
    console.log(`Array [${arr.join(", ")}] sorted in descending order: [${sorted.join(", ")}]`);
    readline_interface.close();
  }
);

