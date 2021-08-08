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
  let sum = firstNumber + secondNumber; //in function, create a variable and add the two
  return sum; //return sum of two / variable
  // return firstNumber + secondNumber;
}
console.log('The sum of the two numbers 23 and 77 is', addNumbers(23, 77) ); //run function w/ those two numbers, including logging it


// 4. Function to multiply three numbers & return the result
function multiplyThree( larry, curly, moe ){
  console.log( 'in multiplyThree function' );
  let product = larry * curly * moe; //using goofy names for experiments as I learn - I do acknowledge this isn't best practice
  return product;
} //end multiplyThree function
console.log( 'the product of 7 x 2 x 3 is', multiplyThree(7, 2, 3) );

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) { //creating function
  if ( number > 0 ){
    return true; //return boolean value TRUE if positive
  }
  else{
    return false; //return boolean value FALSE if not positive
  } //end conditional
} //end isPositive function

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) ); //test function w/ 3
console.log( 'isPositive - should say false', isPositive(0) ); //test function w/ 0
console.log( 'isPositive - should say false', isPositive(-3) ); //test function w/ -3


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) { //creating a function getLast
  console.log( 'in getLast' );
  let bodyParts = [ 'head', 'shoulders', 'knees', 'toes'];
  return bodyParts[3]; // return the 4th item in the array (index 3)
}
  console.log( 'the last body part is', getLast() ); //run function


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

function find( value, array ){ // function find
  for(let i=0; i<array.length; i++){ //for loop - index is zero, increment as long as index is less than array length
    if( array[i] === value ){ //conditional - if index is equal to the "value", return true
      return true;
    } // end conditional
  } // end for loop
  return false; //otherwise, return false (no need to use ELSE since "return" stops the function)
} //end find function

console.log('testing find with value 1486 and array 5, 12, 1486, 2'); //testing
console.log(find( 1486, [ 5, 12, 1486, 2  ])) //testing w/ that value and that array

console.log('testing find with value 73 and array 4, 6, 8, 13, 74, 22, 80, 1000');
console.log(find( 73, [  4, 6, 8, 13, 74, 22, 80, 1000  ])) //testing w/ that value and that array


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) { //create function called isFirstLetter
  return letter === string[0]; //apparently you can return a value of a character in a string?! SWEET!
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );


// 9. Function to return the sum of all numbers in an array
function sumAll( addNums ) { //create function sumAll
  let sum = 0; // sum = 0, NUMBER not index
    for(let i=0; i < addNums.length; i++){ //for loop - start at index 0 and, increment thru array
      sum+=addNums[i]; // starting from 0, add incrementally all values in array
    } // end for loop
  return sum;
} // end sumAll function

console.log('Adding numbers 5 + 10 + 15 + 50 =', sumAll([5, 10, 15, 50])); // test!

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positive( originalArray ){ //creating a function called positive - this one took me for a ride!
  let posArray = []; //create new positive array, empty for now
  for(let i=0; i < originalArray.length; i++){ //create common for loop - i starts at 0 and, as long as i is less than the original array length, incrementally work thru array values
    if(originalArray[i] > 0){ //conditional - if index in original array is greater than 0
      posArray.push(originalArray[i]); // add it to the new positive array
    } // end if conditional
  } // end for loop
  return posArray; // is this the right spot? It appears to work!
} // end positive function

console.log('Out of the numbers -2, 9, -8, 2, 63, 0 and -5...');
console.log('...the positive numbers are:', positive( [ -2, 9, -8, 2, 63, 0, -5 ] ));



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//this is the first one that came up -
//thanks for the links! Gonna try a bunch of stuff!!

//DOES NOT EXECUTE PROPERLY - SOLVE
function multiply(a, b){
  a * b
}

//ANSWER:
function multiply(a, b){
  return a * b;
}

console.log('The product of 3 and 5 is:', multiply(3, 5));
console.log('The product of 2 and 15 is:', multiply(2, 15));
console.log('The product of 14.53 and 12.9887 is:', multiply(14.53, 12.9887));
