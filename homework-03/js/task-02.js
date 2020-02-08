const countProps = obj => {
  const values = Object.values(obj);
  let propNumber = 0;
  for (let i = 0; i < values.length; i += 1) {
    propNumber += 1;
  }
  return propNumber;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
