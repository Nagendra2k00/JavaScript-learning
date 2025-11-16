// Find the second largest element in an array

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }
  
  let largest = arr[0];
  let secondLargest = -Infinity;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  
  return secondLargest === -Infinity ? null : secondLargest;
}

readline_interface.question(
  "Enter numbers separated by commas (e.g., 1,5,3,9,2,8): ",
  (user_input) => {
    const arr = user_input.split(",").map((num) => parseFloat(num.trim()));
    const secondLargest = findSecondLargest(arr);
    
    if (secondLargest !== null) {
      console.log(`The second largest element in [${arr.join(", ")}] is: ${secondLargest}`);
    } else {
      console.log(`Cannot find second largest element in [${arr.join(", ")}]`);
    }
    readline_interface.close();
  }
);

