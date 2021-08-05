console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
} // end hello function

// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return name;
} //end helloName function
// Remember to call the function to test
console.log( 'Hello,', helloName('Chris') + '!');


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let sum = firstNumber + secondNumber;
  return sum;
  // return firstNumber + secondNumber;
}
console.log('The sum of the two numbers 23 and 77 is', addNumbers(23, 77) );


// 4. Function to multiply three numbers & return the result
function multiplyThree( larry, curly, moe ){
  console.log( 'in multiplyThree function' );
  let product = larry * curly * moe;
  return product;
} //end multiplyThree function
console.log( 'the product of 7 x 2 x 3 is', multiplyThree(7, 2, 3) );

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else{
    return false;
  }
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  console.log( 'in getLast' );
  let bodyParts = [ 'head', 'shoulders', 'knees', 'toes'];
  return bodyParts[3];
}
  console.log( 'the last body part is', getLast() );


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

function find( value, array ){
  for(let i=0; i<array.length; i++){
    if( array[i] === value ){
      return true;
    }
  }
  return false;
}

console.log('testing find with value 1486 and array 5, 12, 1486, 2');
console.log(find( 1486, [ 5, 12, 1486, 2  ]))

console.log('testing find with value 73 and array 4, 6, 8, 13, 74, 22, 80, 1000');
console.log(find( 73, [  4, 6, 8, 13, 74, 22, 80, 1000  ]))


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return letter === string[0];
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );


// 9. Function to return the sum of all numbers in an array
function sumAll( addNums ) {
  let sum = 0;
    for(let i=0; i < addNums.length; i++){
      sum+=addNums[i];
    }
  return sum;
}

console.log('Adding numbers 5 + 10 + 15 + 50 =', sumAll([5, 10, 15, 50]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positive( originalArray ){
  let posArray = [];
  for(let i=0; i < originalArray.length; i++){
    if(originalArray[i] > 0){
      posArray.push(originalArray[i]);
    } // end if conditional
  } // end for loop
  return posArray;
} // end positive function

console.log('Out of the numbers -2, 9, -8, 2, 63, 0 and -5...');
console.log('...the positive numbers are:', positive( [ -2, 9, -8, 2, 63, 0, -5 ] ));



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
