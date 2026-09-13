class Student {
    #studentId;
    #firstName;
    #lastName;

    constructor(studentId, firstName, lastName) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get studentId() {
        return this.#studentId;
    }

    set studentId(value) {
        if (!value.trim()) {
            throw new Error("Student ID cannot be empty");
        }
        this.#studentId = value;
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(value) {
        if (!value.trim()) {
            throw new Error("First Name cannot be empty");
        }
        this.#firstName = value;
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(value) {
        if (!value.trim()) {
            throw new Error("Last Name cannot be empty");
        }
        this.#lastName = value;
    }

    getFullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    displayInfo() {
        return `
========================================
          STUDENT DETAILS
========================================
Student ID: ${this.#studentId}
Student Name: ${this.getFullName()}
========================================
`;
    }
}

module.exports = Student;