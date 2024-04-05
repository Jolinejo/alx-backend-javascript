// read file please
const fs = require('node:fs/promises');

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
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
      fieldsCount[field].push(fields[0]);
    });
    console.log(`Number of students: ${lines.length}`);
    for (const field in fieldsCount) {
      if (field) {
        console.log(`Number of students in ${field}: ${fieldsCount[field].length}. List: ${fieldsCount[field].join(', ')}`);
      }
    }
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(new Error('Cannot load the database'));
  }
}

module.exports = countStudents;
