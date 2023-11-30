export default function createIteratorObject(report) {
  const result = [];
  for (const emp of Object.values(report.allEmployees)) {
    result.push(...emp);
  }
  return result;
}
