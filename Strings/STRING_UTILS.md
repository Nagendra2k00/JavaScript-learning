# Strings

This folder contains various string manipulation and analysis utilities in JavaScript.

## Overview

The Strings folder is organized into different categories based on the type of string operations:

- **Count** - Functions to count specific characters in strings
- **Palindrome** - Functions to check if strings are palindromes
- **Reverse** - Functions to reverse strings in various ways

## Directory Structure

```
Strings/
├── count/
│   ├── consonants.js
│   └── vowels.js
├── palindrome/
│   └── palindrome.js
└── reverse/
    ├── reverse_string.js
    ├── reverse_sentence.js
    ├── reverse_chars_of_words.js
    └── reverse_chars_and_words.js
```

## Count Operations

### `count/consonants.js`
Counts the number of consonants in a given string.

**Usage:**
```bash
node Strings/count/consonants.js
```

**Example:**
- Input: "Hello World"
- Output: The number of consonants in the string Hello World is: 7

### `count/vowels.js`
Counts the number of vowels (a, e, i, o, u) in a given string.

**Usage:**
```bash
node Strings/count/vowels.js
```

**Example:**
- Input: "Hello World"
- Output: The number of vowels in the string Hello World is: 3

## Palindrome Operations

### `palindrome/palindrome.js`
Checks if a given string is a palindrome (reads the same forwards and backwards).

**Usage:**
```bash
node Strings/palindrome/palindrome.js
```

**Example:**
- Input: "racecar"
- Output: The string racecar is a palindrome
- Input: "hello"
- Output: The string hello is not a palindrome

## Reverse Operations

### `reverse/reverse_string.js`
Reverses all characters in a string.

**Usage:**
```bash
node Strings/reverse/reverse_string.js
```

**Example:**
- Input: "Hello"
- Output: The reversed string of Hello is: olleH

### `reverse/reverse_sentence.js`
Reverses the order of words in a sentence.

**Usage:**
```bash
node Strings/reverse/reverse_sentence.js
```

**Example:**
- Input: "Hello World"
- Output: The reversed sentence of Hello World is: World Hello

### `reverse/reverse_chars_of_words.js`
Reverses the characters of each word in a sentence while keeping the word order.

**Usage:**
```bash
node Strings/reverse/reverse_chars_of_words.js
```

**Example:**
- Input: "Hello World"
- Output: The reversed sentence of Hello World is: olleH dlroW

### `reverse/reverse_chars_and_words.js`
Reverses both the characters of each word and the order of words in a sentence.

**Usage:**
```bash
node Strings/reverse/reverse_chars_and_words.js
```

**Example:**
- Input: "Hello World"
- Output: The reversed sentence of Hello World is: dlroW olleH

## How to Use

All scripts use Node.js `readline` interface for interactive input. Simply run any script with Node.js and follow the prompts:

```bash
node <path-to-script>
```

## Requirements

- Node.js (for running the scripts)
- No external dependencies required (uses only Node.js built-in modules)

