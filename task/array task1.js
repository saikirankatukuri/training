const numbers = [10, 25, 32, 47, 50, 63, 78, 89, 90, 101];

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

console.log("Includes 47:", numbers.includes(47));

const firstGreaterThan60 = numbers.find(num => num > 60);
console.log("First number greater than 60:", firstGreaterThan60);

const sortedDescending = [...numbers].sort((a, b) => b - a);
console.log("Sorted in descending order:", sortedDescending);`  `