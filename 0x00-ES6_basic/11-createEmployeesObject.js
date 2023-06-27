export default function createEmployeesObject(departmentName, employees) {
  const depart = {
    [departmentName]: employees,
  };
  return depart;
}
