interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const std1: Student = {
    firstName: "Mariam",
    lastName: "Ibrahim",
    age: 22,
    location: "Egypt",
};
const std2: Student = {
    firstName: "Mar",
    lastName: "Ibr",
    age: 22,
    location: "Africa",
};
const arrOfStuds = [std1, std2];

const table = document.createElement('table');
document.body.appendChild(table);
arrOfStuds.forEach(elem => {
    const row = table.insertRow();

    const t1 = row.insertCell();
    t1.innerHTML = elem.firstName;

    const t2 = row.insertCell();
    t2.innerHTML = elem.location;

})