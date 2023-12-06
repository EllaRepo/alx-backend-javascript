// Define the MajorCredits interface
interface MajorCredits {
    credits: number;
    brand: string;
}

// Define the MinorCredits interface
interface MinorCredits {
    credits: number;
    brand: string;
}

// Create a function to sum the credits of two MajorCredits objects
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return {
        credits: totalCredits,
        brand: "MajorCredits",
    };
}

// Create a function to sum the credits of two MinorCredits objects
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return {
        credits: totalCredits,
        brand: "MinorCredits",
    };
}
