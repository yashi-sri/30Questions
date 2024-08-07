function allSubstrings(str) {
  let substrings = [];
  let n = str.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      substrings.push(str.slice(i, j));
      console.log(i, j, "op");
    }
  }

  return substrings;
}

// Example usage
let string = "abc";
let result = allSubstrings(string);
console.log(result);
// [ 'a', 'ab', 'abc', 'b', 'bc', 'c' ]
