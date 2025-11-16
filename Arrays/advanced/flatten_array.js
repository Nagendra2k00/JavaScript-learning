// Flatten a nested array into a single-dimensional array

const readline = require("readline");

const readline_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function flattenArray(arr) {
  const result = [];
  
  for (let item of arr) {
    if (Array.isArray(item)) {
      // Recursively flatten nested arrays
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }
  
  return result;
}

readline_interface.question(
  "Enter array elements. Use format: 1,2,[3,4],5,[6,[7,8]]: ",
  (user_input) => {
    // Simple parsing for demonstration (for complex nested arrays, use JSON.parse)
    try {
      // Try to parse as JSON array
      const arr = JSON.parse(user_input);
      const flattened = flattenArray(arr);
      console.log(`Flattened array: [${flattened.join(", ")}]`);
    } catch (e) {
      console.log("Please enter a valid JSON array format, e.g., [1,2,[3,4],5]");
    }
    readline_interface.close();
  }
);

