const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user['mood'] = 'happy';
user.hobby = 'skydiving';
user.premium = false;
console.log(user);

const keys = Object.keys(user);
// eslint-disable-next-line no-restricted-syntax
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}