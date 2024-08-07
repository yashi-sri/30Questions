function firstNonRepeatingCharacter(str) {
  const charCount = {};

  // Count the occurrences of each character in the string
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character that occurs only once
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Return null if no non-repeating character is found
  return null;
}

// Example usage:
console.log(firstNonRepeatingCharacter("swiss")); // Output: "w"
console.log(firstNonRepeatingCharacter("racecar")); // Output: "e"
console.log(firstNonRepeatingCharacter("aabb")); // Output: null
