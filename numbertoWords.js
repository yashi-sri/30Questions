function numberToWords(num) {
  if (num === 0) return "Zero";

  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const teens = [
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const thousands = ["", "Thousand", "Million", "Billion"];

  function convertToWords(n) {
    let word = "";
    if (n >= 100) {
      word += ones[Math.floor(n / 100)] + " Hundred ";
      n %= 100;
    }
    if (n >= 11 && n <= 19) {
      word += teens[n - 11] + " ";
    } else {
      word += tens[Math.floor(n / 10)] + " ";
      n %= 10;
      word += ones[n] + " ";
    }
    return word.trim();
  }

  let word = "";
  let i = 0;

  while (num > 0) {
    let n = num % 1000;
    if (n !== 0) {
      word = convertToWords(n) + " " + thousands[i] + " " + word;
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return word.trim();
}

// Example usage
// console.log(numberToWords(43)); // Forty Three
console.log(numberToWords(123)); // One Hundred Twenty Three
console.log(numberToWords(1001)); // One Thousand One
