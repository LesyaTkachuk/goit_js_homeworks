// eslint-disable-next-line func-names
const checkForSpam = function(message) {
  const messageForCheck = message.toUpperCase();
  return messageForCheck.includes('SALE') || messageForCheck.includes('SPAM');
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
