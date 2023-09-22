function firstNonRepeatedChar(str) {
  if (str.length === 0) {
    return null; // Handle empty string
  }

  const charCount = {};

  // Count the frequency of each character in the string
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with a frequency of 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeated character found
}

// Test cases
console.log(firstNonRepeatedChar('aabbcdd')); // 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // null
console.log(firstNonRepeatedChar(''));         // null (empty string)

