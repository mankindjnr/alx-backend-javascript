import getListStudentsId from '../1-get_list_student_ids';

describe('getListStudentsId', () => {
  test('returns an array of student IDs when given an array of student objects', () => {
    const students = [
      { id: 1, firstName: 'Guillaume', location: 'San Fransisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Fransisco' }
    ];
    
    const result = getListStudentsId(students);
    
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual([1, 2, 5]);
  });

  test('returns an empty array when given a non-array argument', () => {
    const nonArrayArgument = 'not an array';
    
    const result = getListStudentsId(nonArrayArgument);
    
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual([]);
  });
});
