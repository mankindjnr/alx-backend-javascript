import getListStudents from '../0-get_list_students';

describe('getListStudents', () => {
  test('returns an array of students', () => {
    const students = getListStudents();

    expect(Array.isArray(students)).toBe(true);
    expect(students.length).toBeGreaterThan(0);
  });

  test('each student has the expected properties', () => {
    const students = getListStudents();

    students.forEach((student) => {
      expect(student).toHaveProperty('id');
      expect(student).toHaveProperty('firstName');
      expect(student).toHaveProperty('location');
    });
  });
});
