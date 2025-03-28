const arr = ["Hello", 1, 2, 3];

const [first, second, third] = arr;

console.log(first, second, third);

const obj = {
    employeeid: 1,
    employee: "sai",
    employeeSalary: 5000,
    address: "kodad",
};

// Correcting case-sensitive property name
const { employeeid, employee, employeeSalary, address } = obj;
console.log(employeeid, employee, employeeSalary, address);

// Rest operator
const arr2 = ["Hello", 1, 2, 3, 4, 5];

const [firstString, ...remaining] = arr2;

console.log(remaining);

// Corrected function with rest parameters
function displayNames(...names) {
    console.log(The names are: ${names.join(", ")});
}

displayNames("Ram", "Uday", "Sai", "Sriram", "Raju", "Vijay");

// Spread operator - proper array cloning
const arr3 = ["a", "b", "c"];
const arr4 = [...arr3]; // Cloning instead of reference

arr3.push("d");

console.log("arr3:", arr3);
console.log("arr4:", arr4); // arr4 remains unchanged

