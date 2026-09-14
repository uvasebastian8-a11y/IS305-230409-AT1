import DiningAccount from './DiningAccount.js';

class RewardsDiningAccount extends DiningAccount {
    #rewardRate;

    constructor(accountNumber, openingBalance, rewardRate) {
        super(accountNumber, openingBalance);
        this.#rewardRate = rewardRate;
    }

    calculateReward() {
        return (this.getBalance() * this.#rewardRate) / 100;
    }

    applyReward() {
        const reward = this.calculateReward();
        this.deposit(reward, "Reward applied");
    }

    displayAccountSummary() {
        super.displayAccountSummary();
        console.log(`Reward Rate: ${this.#rewardRate}%`);
    }
}

export default RewardsDiningAccount;
