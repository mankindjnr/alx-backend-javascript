export default function hasValuesFromArray(set, argument) {
  return argument.every((item) => set.has(item));
}
