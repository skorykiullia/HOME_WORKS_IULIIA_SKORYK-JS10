//Pythagorean theorem
//Calculate length of other side aa + bb = c*c
//Find c

//pythagorean(a, b);
function pythagorean(a, b) {
  return console.log(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
}
pythagorean(5, 12);
// 13

//formatMoney(num);
function formatMoney(num) {
  if (num <= 0) {
    num = num.toFixed(2);
  } else {
    num = "+" + num.toFixed(2);
  }
  const parts = num.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formatMoney = parts.join(".");

  return console.log(formatMoney);
}

formatMoney(1232323);
//'+ 1,232,323.00'

formatMoney(-23.2132);
//'- 23.21'

//Format number in spaces
//+- sign should be present
//Separate thousands with spaces

//formatNumber(num);
function formatNumber(value) {
  let num = "";
  if (value % 1 === 0) {
    value = value.toString();
  } else {
    value = value.toFixed(3);
  }
  if (+value <= 0) {
    num = value;
  } else {
    num = "+" + value;
  }
  const parts = num.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const formatNumber = parts.join(".");

  return console.log(formatNumber);
}

formatNumber(1232323);
// 1 232 323

formatNumber(1223.65378);
// 1 223.654
//Write a password generator with length n
//Generate password with any symbol
//!"#$%&'()*+,-./0123456789:;<=>?
//@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_
//`abcdefghijklmnopqrstuvwxyz

function generatePassword(n) {
  let charset =
    "!\"#$%&'()*+,-./0123456789:;<=>?@[]^_?`abcdefghijklmnopqrstuvwxyzcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let res = "";
  for (let i = 0; i < n; i++) {
    res += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return console.log(res);
}

generatePassword(8);
// 1H:s4dh$
//calculate percentage with n numbers after dot
//Given 2 numbers. Calculate their percentage with n precision
//after dot
//50 is 25% of 200
//secondNum * 100% / firstNum

function calc(firstNum, secondNum, precision) {
  console.log(+((secondNum * 100) / firstNum).toFixed(precision));
}

calc(200, 50, 0);
// 25

calc(200, 0.14, 1);
// 0.1
//Get integer part of number and decimal
//User enters a number
//Get it's integer part and decimal

function splitNumber(num) {
  let decimal = num % 1;
  let int = Math.floor(num);
  console.log(
    `int: ${Math.floor(num)}, decimal: ${Math.round((num % 1) * 100)}`
  );
}

splitNumber(2);
// {int: 2, decimal: 0}

splitNumber(2.34);
// {int: 2, decimal: 34}

//Check if prime
//Check if given number is a prime number
//Prime numbers are numbers that is divisible without a remainder
//only by itself and by 1
//Should return boolean

function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return console.log(false);
      }
    }
    return console.log(true);
  }
}

isPrime(4);
// false

isPrime(5);
// true
//Check if number is Armstrong Number
//An armstrong number is a number which equal to the sum of the
//cubes of its individual digits.
//153 = 1*1*1 + 5*5*5 + 3*3*3 153 = 1 + 125 + 27 153 = 153

function isPrime1(n) {
  if (
    
    (String(n)
      .split("")
      .reduce(function (sum, item) {
        return (sum + Math.pow(item,3));
      },0))===n
  ) {
    return console.log(true);
  }
  else {
    return console.log(false)
  }
}

isPrime1(4);
// false

isPrime1(153);
// true


//An n-digit natural number is an Armstrong number if the sum of its digits raised to the n-th power is equal to the number itself 

function isPrime2(n) {
  if (
    
    (String(n)
      .split("")
      .reduce(function (sum, item) {
        return sum + Math.pow(item,(String(n)
        .split("").length));
      },0))===n
  ) {
    return console.log(true);
  }
  else {
    return console.log(false)
  }
}

isPrime2(4);
// false

isPrime2(153);
// true