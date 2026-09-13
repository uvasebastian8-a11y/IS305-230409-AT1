/*
  Program: Dining Meal Booking Feature
  Student Name: Sebastian UVA
  Student ID: 230409
  Date: 17 July 2026
  Description: A JavaScript program demonstrating classes,
  objects, constructors, private fields and methods.
*/

class MealBooking {
    #studentId;
    #studentName;
    #mealDate;
    #mealType;
    #quantity;
    #dietaryNote;
    #bookingStatus;

    constructor(studentId, studentName, mealDate, mealType, quantity, dietaryNote) {
        this.#studentId = studentId;
        this.#studentName = studentName;
        this.#mealDate = mealDate;
        this.#mealType = mealType;
        this.#quantity = quantity;
        this.#dietaryNote = dietaryNote;
        this.#bookingStatus = "Pending";
    }

    get studentId() {
        return this.#studentId;
    }

    set studentId(value) {
        this.#studentId = value;
    }

    get studentName() {
        return this.#studentName;
    }

    set studentName(value) {
        this.#studentName = value;
    }

    get mealDate() {
        return this.#mealDate;
    }

    set mealDate(value) {
        this.#mealDate = value;
    }

    get mealType() {
        return this.#mealType;
    }

    set mealType(value) {
        this.#mealType = value;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(value) {
        this.#quantity = value;
    }

    get dietaryNote() {
        return this.#dietaryNote;
    }

    set dietaryNote(value) {
        this.#dietaryNote = value;
    }

    get bookingStatus() {
        return this.#bookingStatus;
    }

    calculateTotal() {
        let price = 0;

        if (this.#mealType === "Breakfast") {
            price = 10;
        } else if (this.#mealType === "Lunch") {
            price = 15;
        } else if (this.#mealType === "Dinner") {
            price = 20;
        }

        return price * this.#quantity;
    }

    getSummary() {
        return `
Student ID: ${this.#studentId}
Student Name: ${this.#studentName}
Meal Date: ${this.#mealDate}
Meal Type: ${this.#mealType}
Quantity: ${this.#quantity}
Dietary Note: ${this.#dietaryNote}
Status: ${this.#bookingStatus}
Total Cost: K${this.calculateTotal().toFixed(2)}
`;
    }
}

module.exports = MealBooking;