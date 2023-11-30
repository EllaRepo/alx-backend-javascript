export default function appendToEachArrayValue(array, appendString) {
  const arr = [];  
  for (let [key, value] of array) {
    arr.push(appendString + value);
  }

  return arr;
}
