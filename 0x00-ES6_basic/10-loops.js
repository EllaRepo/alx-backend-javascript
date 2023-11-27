export default function appendToEachArrayValue(array, appendString) {
  for (let [key, value] of array) {
    array[key] = appendString + value;
  }

  return array;
}
