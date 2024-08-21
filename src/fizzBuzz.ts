export function fizzBuzz(i: number) {
  // check if the integer is positive
  if (i <= 0) {
    console.log("Please enter a positive integer greater than zero(0).");
    return;
  }

  // check if the number is a whole integer or there is no number
  if (i % 1 !== 0) {
    console.log("Please enter a valid whole integer.");
    return;
  }

  for (let num = 1; num <= i; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
    } else if (num % 3 === 0) {
      console.log("Fizz");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  }
}

fizzBuzz(8);
