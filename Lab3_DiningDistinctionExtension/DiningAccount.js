class DiningAccount {
    #accountNumber;
    #balance;
    #transactions = [];

    constructor(accountNumber, openingBalance = 0) {
        if (!accountNumber) throw new Error("Account number cannot be empty.");
        if (openingBalance < 0) throw new Error("Opening balance cannot be negative.");
        
        this.#accountNumber = accountNumber;
        this.#balance = openingBalance;
        if (openingBalance > 0) {
            this.deposit(openingBalance, "Opening balance");
        }
    }

    deposit(amount, description = "Deposit") {
        if (amount <= 0) throw new Error("Deposit amount must be greater than zero.");
        this.#balance += amount;
        this.#transactions.push({ type: 'Deposit', amount, description, date: new Date(), balance: this.#balance });
    }

    payForMeal(amount, description = "Meal payment") {
        if (this.#balance - amount < 0) {
            console.log("Insufficient funds for this transaction.");
            return false;
        }
        this.#balance -= amount;
        this.#transactions.push({ type: 'Meal Payment', amount, description, date: new Date(), balance: this.#balance });
        return true;
    }

    getBalance() {
        return this.#balance;
    }

    getTransactions() {
        return JSON.parse(JSON.stringify(this.#transactions)); // Return a safe copy.
    }

    displayAccountSummary() {
        console.log(`Account Number: ${this.#accountNumber}`);
        console.log(`Account Type: Dining Account`);
        console.log(`Current Balance: K${this.#balance.toFixed(2)}`);
    }
}

export default DiningAccount;
