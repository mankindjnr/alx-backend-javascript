export default function createReportObject(employeesList) {
  const allEmployees = Object.values(employeesList).flat();

  const getNumberOfDepartments = () => Object.values(employeesList).length;

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
