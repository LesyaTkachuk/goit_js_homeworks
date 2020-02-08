// const findBestEmployee = employees => {
//   const keys = Object.keys(employees);
//   let bestEmployee;
//   let maxTasks = 0;
//   for (let i = 0; i < keys.length; i += 1) {
//     if (employees[keys[i]] > maxTasks) {
//       maxTasks = employees[keys[i]];
//       bestEmployee = keys[i];
//     }
//   }
//   return bestEmployee;
// };

const findBestEmployee = employees => {
  const entries = Object.entries(employees);
  let bestEmployee;
  let maxTasks = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const [name, tasks] of entries) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
