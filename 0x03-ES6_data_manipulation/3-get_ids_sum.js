export default function getStudentIdsSum(students) {
  let sum = 0;
  for (let i = 0; i < students.length; i += 1) {
    sum += students[i].id;
  }
  return sum;
}
