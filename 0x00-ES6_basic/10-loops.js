/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
export default function appendToEachArrayValue(array, appendString) {
  let j = 0;
  const newArray = [];
  for (const i of array) {
    newArray[j] = appendString + i;
    j += 1;
  }

  return newArray;
}
