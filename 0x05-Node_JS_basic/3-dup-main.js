const countStudents = require('./3.dup');

async function main() {
  try {
    const result = await countStudents('database.csv');
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
}

main();
