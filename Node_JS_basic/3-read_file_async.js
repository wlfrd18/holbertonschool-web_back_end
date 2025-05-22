const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

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
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(new Error('Cannot load the database'));
  }
}

module.exports = countStudents;
