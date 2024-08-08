function mostFrequentItem(arr) {
  if (arr.length === 0) {
    return null; // Return null if the array is empty
  }

  const frequency = {};
  let maxCount = 0;
  let mostFrequent = null;

  // Iterate through the array and count the frequency of each item
  for (let item of arr) {
    frequency[item] = (frequency[item] || 0) + 1;

    // Update the most frequent item and its count
    if (frequency[item] > maxCount) {
      maxCount = frequency[item];
      mostFrequent = item;
    }
  }

  return mostFrequent;
}
const arr = [1, 3, 2, 3, 4, 3, 5, 2, 3, 2];
console.log(mostFrequentItem(arr)); // Output will be 3
