const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      try {
        const database = JSON.parse(data);
        const studentsByField = {};

        for (const student of database.students) {
          const { field, firstname } = student;
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstname);
        }

        resolve(studentsByField);
      } catch (parseError) {
        reject(parseError);
      }
    });
  });
}

module.exports = { readDatabase };
