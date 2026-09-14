import DiningAccount from './DiningAccount.js';

class CreditDiningAccount extends DiningAccount {
    #creditLimit;

    constructor(accountNumber, openingBalance, creditLimit) {
        super(accountNumber, openingBalance);
        if (creditLimit < 0) throw new Error("Credit limit cannot be negative.");
        this.#creditLimit = creditLimit;
    }

    payForMeal(amount, description = "Meal payment") {
        const totalAvailable = this.getBalance() + this.#creditLimit;
        if (amount > totalAvailable) {
            console.log("Payment exceeds available balance and credit limit.");
            return false;
        }
        return super.payForMeal(amount, description);
    }

    displayAccountSummary() {
        super.displayAccountSummary();
        console.log(`Credit Limit: K${this.#creditLimit.toFixed(2)}`);
    }
}

export default CreditDiningAccount;
