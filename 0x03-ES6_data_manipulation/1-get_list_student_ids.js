export default function getListStudentIds(listi) {
  if (!Array.isArray(listi)) return [];
  const map1 = listi.map((x) => x.id);
  return map1;
}
