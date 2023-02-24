//capitalize("my name is taras");
// Should return
//("My Name Is Taras");
const myString = "my name is taras";
function capitalize(str) {
  return str.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}

console.log(capitalize(myString));

console.log(
  myString
    .split(/\s+/)
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ")
);

const words = myString.split(" ");

console.log(
  words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ")
);

//truncate("Lorem ipsum dolor sit amet, consectetur", 14);
// Lorem ipsum...

//truncate("Lorem ipsum dolor sit amet, consectetur", 255);
// Lorem ipsum dolor sit amet, consectetur

function truncate(string, num) {
  if (string.length > num) {
    return string.slice(0, num - 3).concat("...");
  } else {
    return string;
  }
}
console.log(truncate("Lorem ipsum dolor sit amet, consectetur", 14));
console.log(truncate("Lorem ipsum dolor sit amet, consectetur", 255));

//filterRange(arr, from, to);

//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//filterRange(arr, 3, 7);
// 3,4,5,6,7

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filterRange(arr, from, to) {
  let i = arr.indexOf(from);
  let j = arr.indexOf(to);
  return arr.slice(i, j + 1);
}
console.log(filterRange(arr, 3, 7));

//const arr = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
//sortArr(arr);
// -3242, -454, 0, 4, 22, 23, 324, 544, 32423

const arr1 = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
function sortArr(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortArr(arr1));

//const arr = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
//sortArr(arr);
// '', ' ', 'a', 'bb', '4534', 'sdfds', 'r4rdv-'

const arr2 = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
function sortArr2(arr) {
  return arr.sort((string1, string2) => string1.length - string2.length);
}
console.log(sortArr2(arr2));

//Calculate average age of users older then 17 and younger then 55

const arr3 = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];
//averageAge(arr);
// 31.4

function averageAge(arr) {
  const newArr = arr.filter((item) => item.age < 55 && item.age > 17);
  return newArr.reduce((sum, item) => sum + item.age, 0) / newArr.length;
}
console.log(averageAge(arr3));

// Sort arr by name if 2 elements have same name sort by age

const arr4 = [
  { name: "John", age: 25 },
  { name: "John", age: 5 },
  { name: "John", age: 2 },
  { name: "John", age: 45 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Mary", age: 2 },
  { name: "Taras", age: 25 },
  { name: "Taras", age: 19 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Alan", age: 32 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
  { name: "Elizabeth", age: 8 },
];

function sortUsers(arr) {
   return  arr.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA > nameB) {
      return 1;
    }
    if (nameA < nameB) {
      return -1;
    }
    if (nameA === nameB) {
       return (a.age - b.age);
      }
  });
  
}
console.log(sortUsers(arr4)); 
// [
//   { name: "Alan", age: 5 },
//   { name: "Alan", age: 32 },
//   { name: "Boris", age: 55 },
//   { name: "Chris", age: 14 },
//   { name: "Elizabeth", age: 8 },
//   { name: "Elizabeth", age: 48 },
//   { name: "John", age: 2 },
//   { name: "John", age: 5 },
//   { name: "John", age: 25 },
//   { name: "John", age: 45 },
//   { name: "Kate", age: 74 },
//   { name: "Mary", age: 2 },
//   { name: "Mary", age: 29 },
//   { name: "Pete", age: 30 },
//   { name: "Taras", age: 19 },
//   { name: "Taras", age: 25 },
// ];

//Find min and max and return obj {min, max} Use reduce method

const arr5 = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];
function minMaxAge(arr) {
  const minMaxAge = {};
  minMaxAge.min = arr.reduce(
    (min, item) => (item.age < min ? item.age : min),
    arr[0].age
  );
  minMaxAge.max = arr.reduce(
    (max, item) => (item.age > max ? item.age : max),
    arr[0].age
  );

  return minMaxAge;
}
console.log(minMaxAge(arr5));

//minMaxAge(arr);
// {min:5, max:74}

//Save only unique values
//Save unique values from arr to uniqueArr

const strings = [
  "Привіт",
  "Світ",
  "Привіт",
  "Світ",
  "Привіт",
  "Привіт",
  "Світ",
  "Світ",
  ":-O",
];

//unique(strings);
// Привіт, Світ, :-O

function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
console.log(unique(strings));
