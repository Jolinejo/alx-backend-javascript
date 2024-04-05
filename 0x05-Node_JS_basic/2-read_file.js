// read file
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const headers = lines.shift().split(',');
    const fieldIndex = headers.indexOf('field');
    const fieldsCount = {};
    lines.forEach((line) => {
      const fields = line.split(',');
      const field = fields[fieldIndex];
      if (field && !fieldsCount[field]) {
        fieldsCount[field] = [];
      }
      fieldsCount[field].push(fields[0]); // Assuming first name is the first field
    });
    console.log(`Number of students: ${lines.length}`);
    for (const field in fieldsCount) {
      if (field) {
        console.log(`Number of students in ${field}: ${fieldsCount[field].length}. List: ${fieldsCount[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
