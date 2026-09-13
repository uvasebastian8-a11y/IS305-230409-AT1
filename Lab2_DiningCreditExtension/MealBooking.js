class MealBooking {
    #student;
    #mealDate;
    #mealType;
    #quantity;
    #dietaryNote;
    #bookingStatus;

    constructor(student, mealDate, mealType, quantity, dietaryNote) {
        this.#student = student;
        this.#mealDate = mealDate;
        this.#mealType = mealType;
        this.#quantity = quantity;
        this.#dietaryNote = dietaryNote;
        this.#bookingStatus = "Pending";

        this.validate();
    }

    validate() {
        if (!this.#student) {
            throw new Error("Valid student object is required.");
        }

        if (!this.#mealDate.trim()) {
            throw new Error("Meal date cannot be empty.");
        }

        const validMeals = ["Breakfast", "Lunch", "Dinner"];

        if (!validMeals.includes(this.#mealType)) {
            throw new Error("Invalid meal type.");
        }

        if (this.#quantity < 1) {
            throw new Error("Quantity must be at least 1.");
        }
    }

    calculateTotal() {
        let price = 0;

        switch (this.#mealType) {
            case "Breakfast":
                price = 10;
                break;
            case "Lunch":
                price = 15;
                break;
            case "Dinner":
                price = 20;
                break;
        }

        return price * this.#quantity;
    }

    confirmBooking() {
        this.#bookingStatus = "Confirmed";
    }

    cancelBooking() {
        this.#bookingStatus = "Cancelled";
    }

    getSummary() {
        return `
========================================
          BOOKING SUMMARY
========================================
Student ID: ${this.#student.studentId}
Student Name: ${this.#student.getFullName()}
Meal Date: ${this.#mealDate}
Meal Type: ${this.#mealType}
Quantity: ${this.#quantity}
Dietary Note: ${this.#dietaryNote}
Status: ${this.#bookingStatus}
Total Cost: K${this.calculateTotal().toFixed(2)}
========================================
`;
    }
}

module.exports = MealBooking;