// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.



const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]


describe("sentenceArr", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
    expect(sentenceArr(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// ReferenceError: sentenceArr is not defined

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// input - array
// output - array

/* Pseudocode
    1. Create a function that takes an array
    2. use the map method to access the objects within the array un the key "name" and split into string
    3. use the slice method to access the desired index and toUpperCase to capitalize
    4. join the string back together into an array

*/

const sentenceArr = (arr) => {
  return arr.map(
    (object) => 
    `${object.name
    .split(" ")
    .map((name) => name.slice(0, 1).toUpperCase() + name.slice(1))
    .join(" ")} is ${object.occupation}.`
    )
}

//  PASS  ./code-challenges.test.js

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


describe("remainders", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]),
    expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// ReferenceError: remainders is not defined

// b) Create the function that makes the test pass.

/* Pseudocode
    1. create a function that takes in an array
    2. filter through the values of the array extracting the value only if the datatype is an integer
    3. map the filtered values to return it as an array of equal length 
    4. return the values % 3
*/

const remainders = (arr) => {
  return arr.filter((value) => typeof value === typeof 1).map((value) => value % 3)
}

//  PASS  ./code-challenges.test.js

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("totalSumCubed", () => {
  it("returns the sum of all the numbers cubed", () => {
    expect(totalSumCubed(cubeAndSum1)).toEqual(99),
    expect(totalSumCubed(cubeAndSum2)).toEqual(1125)
  })
})

// ReferenceError: totalSumCubed is not defined

// b) Create the function that makes the test pass.


/* Pseudocode
    1. created a function and pass in an array
    2. map the array to extract the value of the indexes
    3. multiply the value with itself, and then multiply the value with itself again the get the cubed amount.
    4. reduce the array to add all the values together
*/

const totalSumCubed = (arr) => {
  return arr.map((value) => value * value * value).reduce((value, newValue) => value + newValue)
}


//  PASS  ./code-challenges.test.js