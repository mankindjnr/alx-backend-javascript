export default function getListStudentsId(argument) {
  if (Array.isArray(argument)) {
    return argument.map((x) => x.id);
  }

  return [];
}
