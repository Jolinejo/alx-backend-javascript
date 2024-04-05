// read file
const fs = require('fs').promises;

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
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
        resolve();
      })
      .catch(() => reject(new Error('Cannot load the database')));
  });
}

module.exports = countStudents;