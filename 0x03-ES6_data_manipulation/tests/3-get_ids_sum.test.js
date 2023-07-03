import getStudentIdsSum from '../3-get_ids_sum';

describe('getStudentIdsSum', () => {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 3, firstName: 'Serena', location: 'San Francisco' },
  ];

  test('returns the sum of student IDs', () => {
    const result = getStudentIdsSum(students);
    
    expect(result).toBe(6);
  });

  test('returns 0 if no students are provided', () => {
    const emptyStudents = [];
    const result = getStudentIdsSum(emptyStudents);

    expect(result).toBe(0);
  });
});
