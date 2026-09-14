class MealBooking {
    constructor(
        student,
        mealType = "Dinner",
        quantity = 2
    ) {
        this.student = student;
        this.mealType = mealType;
        this.quantity = quantity;
        this.bookingStatus = "Pending";
        this.paymentProcessed = false;
    }

    calculateTotalCost() {
        let price = 0;

        switch (this.mealType) {
            case "Breakfast":
                price = 10;
                break;

            case "Lunch":
                price = 15;
                break;

            case "Dinner":
                price = 20;
                break;

            default:
                price = 20;
        }

        return price * this.quantity;
    }

    processPayment(diningAccount) {
        if (this.paymentProcessed) {
            console.log("Payment already processed.");
            return;
        }

        const cost = this.calculateTotalCost();

        const success = diningAccount.payForMeal(
            cost,
            `${this.mealType} booking`
        );

        if (success) {
            this.bookingStatus = "Confirmed";
            this.paymentProcessed = true;

            console.log("========================================");
            console.log("MEAL BOOKING");
            console.log("========================================");
            console.log(`Meal: ${this.mealType}`);
            console.log(`Quantity: ${this.quantity}`);
            console.log(`Total Cost: K${cost.toFixed(2)}`);
            console.log("Payment Status: Successful");
            console.log(`Booking Status: ${this.bookingStatus}`);
        } else {
            console.log("Payment failed. Booking remains Pending.");
        }
    }
}

export default MealBooking;
