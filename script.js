class BankAccount { 
    constructor(balance, interestRate) { 
        this.balance = balance;
        this.interestRate = interestRate;
    }
    addInterest(interestRate) { 
        interestRate = interestRate * this.balance;
        this.balance = interestRate + this.balance;
        console.log(`With ${this.interestRate}% interest, your new balance is now $${this.balance}.`);
    }
    makePayment(paymentAmount) { 
        this.balance = this.balance - paymentAmount;
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

let myBank = new BankAccountWithFee(1200, 0.07, 20);
console.log(`Starting balance in your bank account is $${myBank.balance}.`);
myBank.addInterest(0.07);
myBank.makePayment(194);
myBank.applyFee(20);

console.log(`!!! Starting new transaction !!!`);

let yourBank = new BankAccount(2000, 0.04);
console.log(`Starting balance in your bank account is $${yourBank.balance}.`);
yourBank.addInterest(0.04);
yourBank.makePayment(900);