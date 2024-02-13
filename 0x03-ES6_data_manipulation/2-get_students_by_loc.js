export default function getStudentsByLocation(listi, city) {
  if (!Array.isArray(listi)) return [];
  const result = listi.filter((x) => x.location === city);
  return result;
}
