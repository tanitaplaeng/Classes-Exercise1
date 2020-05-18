class BankAccount { 
    constructor(balance, interestRate) { 
        this.balance = balance;
        this.interestRate = interestRate / 100;
    }
    addInterest(interestRate) { 
        const interest = interestRate * this.balance;
        this.balance = interest + this.balance;
        console.log(`With ${this.interestRate}% interest, your new balance is now $${this.balance}.`);
    }
    makeDeposit(depositAmount) { 
        this.balance = this.balance - depositAmount;
        console.log(`Thank you for your payment! This is your new balance $${this.balance}.`);
    }
}

class BankAccountWithFee extends BankAccount{ 
    constructor(balance, interestRate, fee) { 
        super(balance, interestRate);
        this.fee = fee;
    }
    applyFee(fee) {
        this.balance = this.balance + fee;
        console.log(`Adding this fee to your account. Your new balance is now $${this.balance}.`);
    }
}   

let myBank = new BankAccountWithFee(1200, 7, 20);
console.log(`Starting balance in your bank account is $${myBank.balance}.`);
myBank.addInterest(7);
myBank.makeDeposit(194);
myBank.applyFee(20);

console.log(`!!! Starting new transaction !!!`);

let yourBank = new BankAccount(2000, 4);
console.log(`Starting balance in your bank account is $${yourBank.balance}.`);
yourBank.addInterest(4);
yourBank.makeDeposit(900);