// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Define the Directors interface that extends the Teacher interface
interface Directors extends Teacher {
    numberOfReports: number;
}

// Define the printTeacherFunction interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Define the printTeacher function based on the printTeacherFunction interface
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
}

// Define the StudentClass that implements the Student interface
class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method that returns the string "Currently working"
    workOnHomework(): string {
        return "Currently working";
    }

    // Method that returns the firstName of the student
    displayName(): string {
        return this.firstName;
    }
}
