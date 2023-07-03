import updateStudentGradeByCity from '../4-update_grade_by_city';

describe('updateStudentGradeByCity', () => {
  let students;
  let newGrades;

  beforeEach(() => {
    students = [
      { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 80 },
      { id: 2, firstName: 'James', location: 'Columbia', grade: 90 },
      { id: 3, firstName: 'Serena', location: 'San Francisco', grade: 85 },
      { id: 4, firstName: 'Emma', location: 'New York', grade: 95 },
    ];

    newGrades = [
      { studentId: 1, grade: 100 },
      { studentId: 3, grade: 95 },
      { studentId: 5, grade: 90 },
    ];
  });

  test('updates the grade of students in the specified city based on matching student IDs', () => {
    const city = 'San Francisco';
    const result = updateStudentGradeByCity(students, city, newGrades);
    
    expect(result).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 100 },
      { id: 2, firstName: 'James', location: 'Columbia', grade: 'N/A' },
      { id: 3, firstName: 'Serena', location: 'San Francisco', grade: 95 },
    ]);
  });

  test('returns an empty array if no students are found in the specified city', () => {
    const city = 'London';
    const result = updateStudentGradeByCity(students, city, newGrades);

    expect(result).toEqual([]);
  });
});
