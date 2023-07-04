export default function createInt8TypedArray(length, position, value) {
  try {
    const theBuffer = new ArrayBuffer(length);

    const theView = new DataView(theBuffer);

    theView.setInt8(position, value);
    return theView;
  } catch (err) {
    throw new RangeError('Position outside range');
  }
}
