const MealBooking = require("./MealBooking");

const booking1 = new MealBooking(
    "230409",
    "Sebastian UVA",
    "2026-07-24",
    "Lunch",
    2,
    "No Peanuts"
);

console.log("================================");
console.log("DWU DINING MEAL BOOKING");
console.log("================================");

console.log(booking1.getSummary());