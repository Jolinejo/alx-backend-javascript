export default function createInt8TypedArray(len, pos, val) {
  if (pos >= len || pos < 0) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(len);
  const uint8 = new Int8Array(buffer);
  uint8[pos] = val;
  return new DataView(buffer);
}
