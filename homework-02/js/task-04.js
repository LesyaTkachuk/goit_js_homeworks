// eslint-disable-next-line func-names
const formatString = function(string) {
  let finalString = string;
  const characters = string.split('');

  if (characters.length > 40) {
    const charactersCutted = characters.splice(0, 40);
    finalString = charactersCutted.join('');
  }
  return finalString;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// Vestibulum facilisis, purus nec pulvinar

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
); //Nunc sed turpis. Curabitur a felis in nu
