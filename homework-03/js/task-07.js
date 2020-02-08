/* eslint-disable no-restricted-syntax */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      id: 'id=1',
      amount,
      type,
    };
    return transaction;
  },

  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    return this.transactions;
  },

  withdraw(amount) {
    if (amount > this.balance) {
      const message =
        'Снятие такой суммы невозможно, недостаточно средств на счету.';
      return message;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    return this.transactions;
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      const transaction = this.transactions[i];
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  getTransactionTotal(type) {
    let totalAmount = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      const transaction = this.transactions[i];
      if (transaction.type === type) {
        totalAmount += transaction.amount;
      }
    }
    return totalAmount;
  },
};
console.log(account.deposit(40));
console.log(account.deposit(1000));
console.log(account.getBalance());
console.log(account.withdraw(100));
console.log(account.getBalance());
console.log(account.withdraw(1200));
console.log(account.getTransactionTotal('withdraw'));
console.log(account.getTransactionTotal('deposit'));
