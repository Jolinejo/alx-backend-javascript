export default function appendToEachArrayValue(array, appendString) {
  const newarr = [];
  for (const val of array) {
    newarr.push(appendString + val);
  }

  return newarr;
}
