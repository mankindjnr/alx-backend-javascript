import getStudentsByLocation from '../2-get_students_by_loc';

describe('getStudentsByLocation', () => {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 3, firstName: 'Serena', location: 'San Francisco' },
    { id: 4, firstName: 'Emma', location: 'New York' },
  ];

  test('returns students from the specified location', () => {
    const city = 'San Francisco';
    const result = getStudentsByLocation(students, city);
    
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(2);
    expect(result).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 3, firstName: 'Serena', location: 'San Francisco' },
    ]);
  });

  test('returns an empty array if no students are found in the specified location', () => {
    const city = 'London';
    const result = getStudentsByLocation(students, city);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });
});
