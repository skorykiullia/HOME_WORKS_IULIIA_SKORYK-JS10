//Return total days count

//getDaysInYear(year);
const getDaysInYear = (year) => {
  return year % 4 === 0 ? 366 : 365;
};
console.log(getDaysInYear(2021));
console.log(getDaysInYear(2020));

//Get day of a year
//Return day number from date

//getDayNumber(date);
const getDayNumber = (date) => {
  return Math.ceil(
    (Date.parse(date) -
      Date.parse(new Date(new Date(date).getFullYear(), 0, 1))) /
      1000 /
      60 /
      60 /
      24
  );
};

console.log(getDayNumber("2023-01-12"));
// 12
console.log(getDayNumber("2023-02-26"));
// 57
console.log(getDayNumber("2023-03-26"));

//Return quarter number from date
//I quarter: Jan - Mar
//II quarter: Apr - Jun
//III quarter: Jul - Sep
//IV quarter: Oct - Dec

const getQuarters = (date) => {
  const monthName = new Date(date)
    .toLocaleString("eng", { month: "long" })
    .slice(0, 3);
  const dateNumber = new Date(date).getDate();
  let quarterName = "";
  Math.ceil((new Date(date).getMonth() + 1) / 3) === 1
    ? (quarterName = "I")
    : Math.ceil((new Date(date).getMonth() + 1) / 3) === 2
    ? (quarterName = "II")
    : Math.ceil(new Date(date).getMonth() / 3 + 1) === 3
    ? (quarterName = "III")
    : (quarterName = "IV");
  return `${monthName} ${dateNumber} is ${quarterName} quarter`;
};

console.log(getQuarters("2023-04-26"));
// Feb 26 is I quarter

const calcDateDiff = (startDate, endDate) => {
  const quantityMinutes =
    (Date.parse(endDate) - Date.parse(startDate)) / 1000 / 60;
    let result = "";
  quantityMinutes < 60
    ? (result = `${quantityMinutes} minutes`)
    : quantityMinutes >= 60 && quantityMinutes < 1440
    ? (result = `${(quantityMinutes - (quantityMinutes % 60)) / 60} hours ${
        quantityMinutes % 60
      } minutes`)
    : quantityMinutes >= 1440 && quantityMinutes < 43200
    ? (result = `${Math.floor(quantityMinutes / 1440)} days`)
    : quantityMinutes >= 43200 && quantityMinutes < 525600
    ? (result = `${Math.floor(quantityMinutes / 43200)} month`)
    : (result = `${Math.floor(quantityMinutes / 525600)} years`);
  return result;
};
console.log(calcDateDiff("2023-02-26 14:00", "2023-02-26 14:20"));
// 20 minutes

console.log(calcDateDiff("2023-02-26 14:00", "2023-02-26 15:30"));

// 1 hours 30 minutes

console.log(calcDateDiff("2023-02-26 14:00", "2023-02-28 15:30"));
// 2 days

console.log(calcDateDiff("2023-02-26 14:00", "2023-05-28 15:30"));
// 3 months

console.log(calcDateDiff("2023-02-26 14:00", "2025-05-28 15:30"));
// 2 years

const createMap = (arr = []) => {
  const map = new Map();

  arr.forEach((obj) => {
    map.set(obj.id, obj);
  });

  return map;
};

console.log(
  createMap([
    { id: 1, value: 1, date: "2022-02-15" },
    { id: 2, value: 1242, date: "2023-02-15" },
    { id: 3, value: 3342, date: "2021-02-15" },
  ])
);

const cache = new Map();
const cacheCalcDateDiff = (startDate, endDate) => {
  const key = `${startDate}-${endDate}`;
  if (cache.has(key)) {
    return cache.get(key);
  } else {
    return cache.set(key, calcDateDiff(startDate, endDate));
  }
};
console.log(cacheCalcDateDiff("2023-02-26 14:00", "2023-02-26 14:20"));


console.log(cacheCalcDateDiff("2023-02-26 14:00", "2023-02-26 15:30"));



console.log(cacheCalcDateDiff("2023-02-26 14:00", "2023-02-28 15:30"));


console.log(cacheCalcDateDiff("2023-02-26 14:00", "2023-05-28 15:30"));


console.log(cacheCalcDateDiff("2023-02-26 14:00", "2025-05-28 15:30"));