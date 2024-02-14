interface Teacher extends Record<string, any> {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
}
interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacher {
    (firstName: string, lastName: string): string;
}

let funcy: printTeacher;

funcy = function (firstName, lastName) {
    const firstLet = firstName[0];
    const res = `${firstLet}. ${lastName}`;
    return res;
}