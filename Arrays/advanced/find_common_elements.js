// Find common elements between two arrays

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findCommonElements(arr1, arr2) {
  const common = [];
  const seen = {};
  
  // Mark elements from first array
  for (let item of arr1) {
    seen[item] = true;
  }
  
  // Find common elements
  for (let item of arr2) {
    if (seen[item]) {
      common.push(item);
      seen[item] = false; // Avoid duplicates
    }
  }
  
  return common;
}

readline_interface.question(
  "Enter first array separated by commas (e.g., 1,2,3,4,5): ",
  (arr1_input) => {
    readline_interface.question(
      "Enter second array separated by commas (e.g., 3,4,5,6,7): ",
      (arr2_input) => {
        const arr1 = arr1_input.split(",").map((num) => parseFloat(num.trim()));
        const arr2 = arr2_input.split(",").map((num) => parseFloat(num.trim()));
        const common = findCommonElements(arr1, arr2);
        console.log(`Common elements between [${arr1.join(", ")}] and [${arr2.join(", ")}]: [${common.join(", ")}]`);
        readline_interface.close();
      }
    );
  }
);

