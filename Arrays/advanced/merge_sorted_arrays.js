// Merge two sorted arrays into one sorted array

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0, j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  
  // Add remaining elements
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  
  return merged;
}

readline_interface.question(
  "Enter first sorted array separated by commas (e.g., 1,3,5,7): ",
  (arr1_input) => {
    readline_interface.question(
      "Enter second sorted array separated by commas (e.g., 2,4,6,8): ",
      (arr2_input) => {
        const arr1 = arr1_input.split(",").map((num) => parseFloat(num.trim()));
        const arr2 = arr2_input.split(",").map((num) => parseFloat(num.trim()));
        const merged = mergeSortedArrays(arr1, arr2);
        console.log(`Merged array: [${merged.join(", ")}]`);
        readline_interface.close();
      }
    );
  }
);

