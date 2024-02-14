interface DirectorInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workDirectorTasks: () => string;
}

interface TeacherInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    };

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    };

    workDirectorTasks(): string {
        return "Getting to director tasks";
    };
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    };

    getCoffeeBreak(): string {
        return "Cannot have a break";
    };

    workTeacherTasks(): string {
        return "Getting to work";
    };
}

interface printTeacher {
    (salary: string | number): Director | Teacher;
}

let createEmployee: printTeacher;

createEmployee = function (salary: string | number) {
    
    if (typeof salary === "number" && salary < 500)
        return new Teacher;
    return new Director
}

interface Iwork {
    (empployee: Teacher | Director): string;
}

function isDirector(variable: any): variable is Director { 
    return (typeof variable === 'object' && 'workDirectorTasks' in variable); 
} 
let executeWork: Iwork;
executeWork = function (empployee: Teacher | Director) {
    if (isDirector(empployee))
        return empployee.workDirectorTasks();
    return empployee.workTeacherTasks();
}