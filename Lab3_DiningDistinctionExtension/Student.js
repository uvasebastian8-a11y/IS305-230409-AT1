import DiningAccount from "./DiningAccount.js";

class Student {
    #name;
    #studentID;
    #diningAccount;

    constructor(name, studentID) {
        this.#name = name;
        this.#studentID = studentID;
        this.#diningAccount = null;
    }

    assignDiningAccount(account) {
        if (!(account instanceof DiningAccount)) {
            throw new Error("Invalid dining account.");
        }

        this.#diningAccount = account;
    }

    get diningAccount() {
        return this.#diningAccount;
    }

    displayInfo() {
        console.log(`Student: ${this.#name}`);
        console.log(`Student ID: ${this.#studentID}`);

        if (this.#diningAccount) {
            this.#diningAccount.displayAccountSummary();
        }
    }
}

export default Student;
