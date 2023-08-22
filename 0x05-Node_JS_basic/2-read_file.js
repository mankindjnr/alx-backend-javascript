const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines

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

    for (const line of lines.slice(1)){
        const values = line.split(',');
        const major = values[3].trim();
        if (!fields.includes(major))
        fields.push(major);

    }

    for (const field of fields){
      const current_field = [];
      for (const line of lines.slice(1)){
        const values = line.split(',');
        const major = values[3].trim();

        if (major === field){
          current_field.push(values[0].trim());
        }
      }

      console.log(`Number of students in ${field}: ${current_field.length}. List: ${current_field.join(", ")}`);
    }

  } catch (error) {
    throw new Error(`Cannot load the database`);
  }
}

// Call the function with the path to the database file
module.exports= countStudents;
