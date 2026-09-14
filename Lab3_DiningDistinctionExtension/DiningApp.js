import DiningAccount from './DiningAccount.js';
import RewardsDiningAccount from './RewardsDiningAccount.js';
import CreditDiningAccount from './CreditDiningAccount.js';
import Student from './Student.js';
import MealBooking from './MealBooking.js';

const student = new Student("Sebastian Uva", "230409");

const rewardsAccount = new RewardsDiningAccount(
    "RA001",
    1500,
    2.5
);

const creditAccount = new CreditDiningAccount(
    "CA001",
    1000,
    500
);

student.assignDiningAccount(rewardsAccount);

student.displayInfo();

rewardsAccount.deposit(500, "Weekly meal allowance");

const reward = rewardsAccount.calculateReward();

console.log(`Reward earned: K${reward.toFixed(2)}`);

rewardsAccount.applyReward();

console.log("*****************************************");

const mealBooking = new MealBooking(
    student,
    "Dinner",
    2
);

mealBooking.processPayment(
    student.diningAccount
);
