const arr = ["Hello", 1, 2, 3];

const [first, second, third] = arr;

console.log(first, second, third);

const obj = {
    employeeid: 1,
    employee: "sai",
    employeeSalary: 5000,
    address: "kodad",
};

const { employeeid, employee, employeesalary, address } = obj;
//console.log(employeeid, employee, employeesalary, address);

// rest operator
const arr2 = ["Hello", 1, 2, 3, 4, 5];

const [firstString, ...remaining] = arr2;

console.log(remaining);

function displayNames(...a) {
    console.log('The names are: ${a}')


}

displayNames("Ram", "Uday", "Sai", "Sriram", "Raju", "Vijay")
//spread

//expands array or object into individual elements

const arr3 = ["a", "b", "c"];
const dummy = ["orange", "apple"];


const arr4 = [...arr3, ...dummy];

//spread in objects
    arr3.push("d");
    const car1 = { name: "bmw", Price: "1cr" };
    const car2 = { color: "white", engineer: 5000 }
    const car = { ...car1, ...car2 };
    console.log(car); 
    

    function square(val) {
        return val * val;
    }
    
    function cube(val) {
        return val * val * val;
    }
    
    // function sumOfSquares(val1, val2)
    let firstValue = square(val1);
    let secondValue = square(val2);
    return firstValue + secondValue;
    
    //  function sumOfCubes(val1, val2) {
       // let firstValue = cube(val1);
        //let secondValue = cube(val2);
        //return firstValue + secondValue;
   // }
    
    //function sumOfSomething(val1, val2, calculateFn) {
      //  let firstValue = calculateFn(val1);
        //let secondValue = calculateFn(val2);
        //return firstValue + secondValue;
    //}
    
    const ans = sumOfSomething(2, 3, cube);
    console.log(ans);
    
    setInterval(() => console.log("Hello Everyone"), 1000);