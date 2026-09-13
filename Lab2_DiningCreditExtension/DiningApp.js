const Student = require("./Student");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Student ID: ", (id) => {

    rl.question("First Name: ", (firstName) => {

        rl.question("Last Name: ", (lastName) => {

            try {

                const student = new Student(
                    id,
                    firstName,
                    lastName
                );

                console.log(student.displayInfo());

            } catch (error) {

                console.log("Error:", error.message);

            }

            rl.close();

        });

    });

});