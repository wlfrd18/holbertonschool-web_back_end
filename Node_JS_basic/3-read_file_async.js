const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.splice(1).map((line) => line.split(','));
      console.log(`Number of students: ${students.length}`);

      const fields = {};
      for (const student of students) {
        const [firstName, , , field] = student;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(' ,')}`);
      }
      resolve();
    });
  });
}

module.exports = countStudents;
