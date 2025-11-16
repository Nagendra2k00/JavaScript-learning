# Array Questions Documentation

A comprehensive collection of JavaScript array problems organized by difficulty and topic. Each problem includes a complete implementation with interactive command-line interface.

## 📚 Table of Contents

- [Basic Operations](#basic-operations)
- [Manipulation Operations](#manipulation-operations)
- [Sorting Operations](#sorting-operations)
- [Advanced Operations](#advanced-operations)
- [Usage](#usage)

## 🎯 Basic Operations

Fundamental array operations for beginners.

### Find Maximum Element
**File:** `basic/find_max.js`

Find the largest element in an array.

**Example:**
```bash
node Arrays/basic/find_max.js
# Input: 1,2,3,4,5
# Output: The maximum element in [1, 2, 3, 4, 5] is: 5
```

### Find Minimum Element
**File:** `basic/find_min.js`

Find the smallest element in an array.

**Example:**
```bash
node Arrays/basic/find_min.js
# Input: 1,2,3,4,5
# Output: The minimum element in [1, 2, 3, 4, 5] is: 1
```

### Find Element
**File:** `basic/find_element.js`

Search for an element in an array and return its index.

**Example:**
```bash
node Arrays/basic/find_element.js
# Input array: 1,2,3,4,5
# Input element: 3
# Output: Element 3 found at index 2 in [1, 2, 3, 4, 5]
```

### Count Even Numbers
**File:** `basic/count_even.js`

Count how many even numbers are in an array.

**Example:**
```bash
node Arrays/basic/count_even.js
# Input: 1,2,3,4,5,6
# Output: The number of even numbers in [1, 2, 3, 4, 5, 6] is: 3
```

### Count Odd Numbers
**File:** `basic/count_odd.js`

Count how many odd numbers are in an array.

**Example:**
```bash
node Arrays/basic/count_odd.js
# Input: 1,2,3,4,5,6
# Output: The number of odd numbers in [1, 2, 3, 4, 5, 6] is: 3
```

### Sum Array
**File:** `basic/sum_array.js`

Calculate the sum of all elements in an array.

**Example:**
```bash
node Arrays/basic/sum_array.js
# Input: 1,2,3,4,5
# Output: The sum of [1, 2, 3, 4, 5] is: 15
```

## 🔧 Manipulation Operations

Transform and filter arrays to create new arrays.

### Filter Positive Numbers
**File:** `manipulation/filter_positive.js`

Extract all positive numbers from an array.

**Example:**
```bash
node Arrays/manipulation/filter_positive.js
# Input: -2,-1,0,1,2,3
# Output: Positive numbers in [-2, -1, 0, 1, 2, 3] are: [1, 2, 3]
```

### Filter Negative Numbers
**File:** `manipulation/filter_negative.js`

Extract all negative numbers from an array.

**Example:**
```bash
node Arrays/manipulation/filter_negative.js
# Input: -2,-1,0,1,2,3
# Output: Negative numbers in [-2, -1, 0, 1, 2, 3] are: [-2, -1]
```

### Square Elements
**File:** `manipulation/square_elements.js`

Square each element in an array.

**Example:**
```bash
node Arrays/manipulation/square_elements.js
# Input: 1,2,3,4,5
# Output: Squared elements of [1, 2, 3, 4, 5] are: [1, 4, 9, 16, 25]
```

### Double Elements
**File:** `manipulation/double_elements.js`

Double each element in an array.

**Example:**
```bash
node Arrays/manipulation/double_elements.js
# Input: 1,2,3,4,5
# Output: Doubled elements of [1, 2, 3, 4, 5] are: [2, 4, 6, 8, 10]
```

### Remove Duplicates
**File:** `manipulation/remove_duplicates.js`

Remove duplicate elements from an array.

**Example:**
```bash
node Arrays/manipulation/remove_duplicates.js
# Input: 1,2,2,3,3,4,5
# Output: Array [1, 2, 2, 3, 3, 4, 5] without duplicates: [1, 2, 3, 4, 5]
```

## 📊 Sorting Operations

Sort arrays and search within sorted arrays.

### Sort Ascending
**File:** `sorting/sort_ascending.js`

Sort an array in ascending order using bubble sort algorithm.

**Example:**
```bash
node Arrays/sorting/sort_ascending.js
# Input: 5,2,8,1,9
# Output: Array [5, 2, 8, 1, 9] sorted in ascending order: [1, 2, 5, 8, 9]
```

### Sort Descending
**File:** `sorting/sort_descending.js`

Sort an array in descending order using bubble sort algorithm.

**Example:**
```bash
node Arrays/sorting/sort_descending.js
# Input: 5,2,8,1,9
# Output: Array [5, 2, 8, 1, 9] sorted in descending order: [9, 8, 5, 2, 1]
```

### Binary Search
**File:** `sorting/binary_search.js`

Search for an element in a sorted array using binary search algorithm.

**Example:**
```bash
node Arrays/sorting/binary_search.js
# Input array: 1,2,3,4,5,6,7
# Input element: 4
# Output: Element 4 found at index 3 in [1, 2, 3, 4, 5, 6, 7]
```

## 🚀 Advanced Operations

Complex array operations requiring advanced algorithms.

### Flatten Array
**File:** `advanced/flatten_array.js`

Flatten a nested array into a single-dimensional array.

**Example:**
```bash
node Arrays/advanced/flatten_array.js
# Input: [1,2,[3,4],5,[6,[7,8]]]
# Output: Flattened array: [1, 2, 3, 4, 5, 6, 7, 8]
```

### Rotate Array
**File:** `advanced/rotate_array.js`

Rotate an array by k positions to the right.

**Example:**
```bash
node Arrays/advanced/rotate_array.js
# Input array: 1,2,3,4,5
# Input positions: 2
# Output: Array [1, 2, 3, 4, 5] rotated by 2 positions: [4, 5, 1, 2, 3]
```

### Find Second Largest
**File:** `advanced/find_second_largest.js`

Find the second largest element in an array.

**Example:**
```bash
node Arrays/advanced/find_second_largest.js
# Input: 1,5,3,9,2,8
# Output: The second largest element in [1, 5, 3, 9, 2, 8] is: 8
```

### Merge Sorted Arrays
**File:** `advanced/merge_sorted_arrays.js`

Merge two sorted arrays into one sorted array.

**Example:**
```bash
node Arrays/advanced/merge_sorted_arrays.js
# Input array 1: 1,3,5,7
# Input array 2: 2,4,6,8
# Output: Merged array: [1, 2, 3, 4, 5, 6, 7, 8]
```

### Find Common Elements
**File:** `advanced/find_common_elements.js`

Find common elements between two arrays.

**Example:**
```bash
node Arrays/advanced/find_common_elements.js
# Input array 1: 1,2,3,4,5
# Input array 2: 3,4,5,6,7
# Output: Common elements between [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7]: [3, 4, 5]
```

## 💻 Usage

All scripts use Node.js `readline` interface for interactive input. Simply run any script and follow the prompts:

```bash
# Basic operations
node Arrays/basic/find_max.js
node Arrays/basic/sum_array.js

# Manipulation operations
node Arrays/manipulation/filter_positive.js
node Arrays/manipulation/remove_duplicates.js

# Sorting operations
node Arrays/sorting/sort_ascending.js
node Arrays/sorting/binary_search.js

# Advanced operations
node Arrays/advanced/rotate_array.js
node Arrays/advanced/merge_sorted_arrays.js
```

## 🎓 Learning Path

1. **Start with Basics**: Begin with finding max/min and counting operations
2. **Learn Manipulation**: Practice filtering and transforming arrays
3. **Master Sorting**: Understand sorting algorithms and binary search
4. **Tackle Advanced**: Work on complex problems like merging and flattening

## 📝 Notes

- All scripts handle empty arrays gracefully
- Input validation is included where necessary
- Algorithms are implemented from scratch for learning purposes
- Each script is self-contained and can be run independently

---

**Happy Learning!** 🚀

