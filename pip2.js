// Write a function that takes a string 
// as input and returns the number of vowels in the string.
function countVowels(string) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
  }
  const myString = "Hello, world!";
  const vowelCount = countVowels(myString);
  console.log(vowelCount);

//   Write a function that takes an array of numbers as input
//  and returns the sum of all the numbers.
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
const myArray = [1, 2, 3, 4, 5];
const arraySum = sumArray(myArray);
console.log(arraySum);

// Write a function that takes two numbers as 
// input and returns true if their sum is greater than 100, and false otherwise.
function isSumGreaterThan100(num1, num2) {
    const sum = num1 + num2;
    if (sum > 100) {
      return true;
    } else {
      return false;
    }
  }
const result2 = isSumGreaterThan100(10, 90);
console.log(result2); 
  
  
  


