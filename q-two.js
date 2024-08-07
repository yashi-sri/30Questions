const arr = [3, 5, 1, 2, 4, 8, 7, 6];

function findLargestAndSmallest(arr) {
  if (arr.length === 0) {
    return { smallest: null, largest: null };
  }

  let smallest = arr[0];
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    } else if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return { smallest, largest };
}
const result = findLargestAndSmallest(arr);
console.log(`Smallest: ${result.smallest}, Largest: ${result.largest}`);
