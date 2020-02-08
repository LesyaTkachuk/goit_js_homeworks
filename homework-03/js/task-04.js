// const countTotalSalary = employees => {
//   let totalSalary = 0;
//   const values = Object.values(employees);
//   // eslint-disable-next-line no-restricted-syntax
//   for (const value of values) {
//     totalSalary += value;
//   }
//   return totalSalary;
// };

const countTotalSalary = employees => {
  let totalSalary = 0;
  const entries = Object.entries(employees);
  // eslint-disable-next-line no-restricted-syntax
  for (const [, salary] of entries) {
    totalSalary += salary;
  }
  return totalSalary;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
