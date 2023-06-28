export default function divideFunction(numerator, denominator) {
  try {
    const answ1 = numerator / denominator;
    if (denominator === 0) {
      throw new Error();
    }
    return answ1;
  } catch (err) {
    throw Error('cannot divide by 0');
  }
}
