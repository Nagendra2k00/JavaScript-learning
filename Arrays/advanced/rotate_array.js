// Rotate an array by k positions to the right

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function rotateArray(arr, k) {
  const n = arr.length;
  if (n === 0) return arr;
  
  // Normalize k to be within array bounds
  k = k % n;
  if (k === 0) return arr;
  
  // Create rotated array
  const rotated = [];
  for (let i = 0; i < n; i++) {
    rotated[(i + k) % n] = arr[i];
  }
  
  return rotated;
}

readline_interface.question(
  "Enter numbers separated by commas (e.g., 1,2,3,4,5): ",
  (array_input) => {
    readline_interface.question(
      "Enter number of positions to rotate: ",
      (k_input) => {
        const arr = array_input.split(",").map((num) => parseFloat(num.trim()));
        const k = parseInt(k_input.trim());
        const rotated = rotateArray(arr, k);
        console.log(`Array [${arr.join(", ")}] rotated by ${k} positions: [${rotated.join(", ")}]`);
        readline_interface.close();
      }
    );
  }
);

