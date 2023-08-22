const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines

    if (lines.length === 0) {
      throw new Error('Database is empty');
    }

    const students = [];

    for (const line of lines.slice(1)) {
      const firstname = line.split(',')[0];

      students.push(firstname);
    }

    console.log(`Number of students: ${students.length}`);

    const fields = [];

    for (const line of lines.slice(1)) {
      const values = line.split(',');
      const major = values[3].trim();
      if (!fields.includes(major)) fields.push(major);
    }

    for (const field of fields) {
      const currentField = [];
      for (const line of lines.slice(1)) {
        const values = line.split(',');
        const major = values[3].trim();

        if (major === field) {
          currentField.push(values[0].trim());
        }
      }

      console.log(`Number of students in ${field}: ${currentField.length}. List: ${currentField.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
