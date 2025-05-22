const fs = require('fs')

function countStudents(path) {
    let content;

    try {
        content = fs.readFileSync(path, 'utf8');
    } catch (error) {
        throw new Error("Cannot load the database");
    }

    const lines = content.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1).map(line => line.split(','));
    console.log(`Number of students: ${students.length}`);

    const fields = {};
    for (const student of students) {
        const[firstName, , , field] = student;
        if (!fields[field]) {
            fields[field] = [];
        }
        fields[field].push(firstName);
    }
    for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`)
    }
}

module.exports = countStudents;
